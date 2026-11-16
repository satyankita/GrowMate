import { useContext } from "react";
import { VoiceAssistantContext } from "./voiceAssistantContext";

export default function useVoiceAssistant() {
  const context = useContext(VoiceAssistantContext);
  if (!context) {
    throw new Error("useVoiceAssistant must be used within VoiceAssistantProvider.");
  }
  return context;
}
