/** Smooth-scrolls to a section, leaving room for the fixed navbar. */
export function scrollToSection(id: string, offset = 72): void {
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: id === 'home' ? 0 : top, behavior: 'smooth' });
}
