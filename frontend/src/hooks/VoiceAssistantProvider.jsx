import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { VoiceAssistantContext } from "./voiceAssistantContext";

const speechErrorMessage = (code) => {
  const messages = {
    "not-allowed": "Microphone access is blocked. Allow microphone access in your browser settings and try again.",
    "service-not-allowed": "Speech recognition is unavailable. Check browser permissions and try again.",
    "audio-capture": "No microphone was found. Connect a microphone and try again.",
    "no-speech": "No speech was detected. Try speaking again.",
    network: "Speech recognition needs an internet connection. Check your connection and try again.",
  };

  return messages[code] || `Microphone error: ${code}.`;
};

export function VoiceAssistantProvider({ children }) {
  const [speechStatus, setSpeechStatus] = useState("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [listeningTarget, setListeningTarget] = useState(null);
  const [voiceError, setVoiceError] = useState("");
  const utteranceRef = useRef(null);
  const recognitionRef = useRef(null);

  const speak = useCallback((text, options = {}) => {
    if (typeof window === "undefined" || !window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      setVoiceError("Read aloud is not supported in this browser.");
      return false;
    }
    if (isMuted || typeof text !== "string" || !text.trim()) return false;

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
      setListeningTarget(null);
    }
    window.speechSynthesis.cancel();
    const utterance = new window.SpeechSynthesisUtterance(text.trim());
    utterance.lang = options.lang || "en-IN";
    utterance.rate = options.rate || 0.95;
    utterance.onstart = () => setSpeechStatus("speaking");
    utterance.onpause = () => setSpeechStatus("paused");
    utterance.onresume = () => setSpeechStatus("speaking");
    utterance.onend = () => {
      setSpeechStatus("idle");
      if (utteranceRef.current === utterance) utteranceRef.current = null;
    };
    utterance.onerror = () => {
      setSpeechStatus("idle");
      if (utteranceRef.current === utterance) utteranceRef.current = null;
    };
    utteranceRef.current = utterance;
    setVoiceError("");
    window.speechSynthesis.speak(utterance);
    return true;
  }, [isMuted]);

  const pauseSpeech = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis?.speaking) {
      window.speechSynthesis.pause();
    }
  }, []);

  const resumeSpeech = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis?.paused) {
      window.speechSynthesis.resume();
    }
  }, []);

  const stopSpeech = useCallback(() => {
    if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    recognitionRef.current?.stop();
    recognitionRef.current = null;
    setListeningTarget(null);
    utteranceRef.current = null;
    setSpeechStatus("idle");
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    recognitionRef.current = null;
    setListeningTarget(null);
  }, []);

  const startListening = useCallback(({ target = "voice-input", onResult, lang = "en-IN" }) => {
    if (typeof window === "undefined") {
      setVoiceError("Microphone access is not available in this environment.");
      return false;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceError("Speech recognition is not supported in this browser. Try Chrome or Edge.");
      return false;
    }
    if (recognitionRef.current) {
      setVoiceError("Another voice input is already active. Stop it before starting a new one.");
      return false;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = lang;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onstart = () => {
      setListeningTarget(target);
      setVoiceError("");
    };
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript?.trim();
      if (transcript) onResult?.(transcript);
    };
    recognition.onerror = (event) => setVoiceError(speechErrorMessage(event.error));
    recognition.onend = () => {
      setListeningTarget(null);
      if (recognitionRef.current === recognition) recognitionRef.current = null;
    };

    recognitionRef.current = recognition;
    try {
      recognition.start();
      return true;
    } catch {
      recognitionRef.current = null;
      setListeningTarget(null);
      setVoiceError("Could not start the microphone. Check browser permissions and try again.");
      return false;
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((muted) => {
      if (!muted) {
        if (typeof window !== "undefined") window.speechSynthesis?.cancel();
        utteranceRef.current = null;
        setSpeechStatus("idle");
      }
      return !muted;
    });
  }, []);

  useEffect(() => () => {
    if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    recognitionRef.current?.stop();
    recognitionRef.current = null;
  }, []);

  const value = useMemo(() => ({
    speak,
    pauseSpeech,
    resumeSpeech,
    stopSpeech,
    toggleMute,
    startListening,
    stopListening,
    speechStatus,
    isMuted,
    listeningTarget,
    voiceError,
    clearVoiceError: () => setVoiceError(""),
  }), [speak, pauseSpeech, resumeSpeech, stopSpeech, toggleMute, startListening, stopListening, speechStatus, isMuted, listeningTarget, voiceError]);

  return <VoiceAssistantContext.Provider value={value}>{children}</VoiceAssistantContext.Provider>;
}

export default VoiceAssistantProvider;
