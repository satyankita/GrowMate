const CLASSROOM_THEMES = [
  { start: "#493B94", end: "#6655B9", primary: "#6354C7", soft: "#F0EDFF", accent: "#AFA4FF" },
  { start: "#14577F", end: "#1D79A4", primary: "#237FAF", soft: "#EAF7FC", accent: "#91D9EB" },
  { start: "#783B29", end: "#A94F31", primary: "#A95134", soft: "#FFF1E9", accent: "#F4B38E" },
  { start: "#15594E", end: "#217566", primary: "#218876", soft: "#E9F8F3", accent: "#8DE0CC" },
  { start: "#71304A", end: "#9C4163", primary: "#A34668", soft: "#FFF0F5", accent: "#F0A6C0" },
  { start: "#654817", end: "#8C681D", primary: "#997521", soft: "#FFF8E8", accent: "#E6CB7A" },
];

export function getClassroomTheme(classroomId = "") {
  const stableId = String(classroomId);
  const hash = [...stableId].reduce(
    (total, character) => (total * 31 + character.charCodeAt(0)) >>> 0,
    7
  );
  return CLASSROOM_THEMES[hash % CLASSROOM_THEMES.length];
}
