import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Respect reduced motion
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
  // Hero entrance
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-avatar",  { opacity: 0, scale: 0.8, duration: 0.6 })
    .from(".hero-name",    { opacity: 0, y: 30, duration: 0.7 }, "-=0.3")
    .from(".hero-role",    { opacity: 0, y: 20, duration: 0.5 }, "-=0.4")
    .from(".hero-meta",    { opacity: 0, y: 15, duration: 0.5 }, "-=0.3")
    .from(".hero-btns",    { opacity: 0, y: 15, duration: 0.5 }, "-=0.3")
    .from(".hero-stats",   { opacity: 0,         duration: 0.5 }, "-=0.2");

  // Navbar fade down
  gsap.from(".nav-header", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    delay: 0.2
  });

  // Generic section fade-in for section headings
  gsap.utils.toArray<HTMLElement>(".section-heading").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });

  // Generic section content fade-in
  gsap.utils.toArray<HTMLElement>(".section-content").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
  });

  // Experience timeline
  const expSection = document.getElementById('experience');
  if (expSection) {
    gsap.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: { trigger: expSection, start: "top 80%" }
    });

    gsap.from(".timeline-item", {
      opacity: 0,
      x: -20,
      duration: 0.5,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: { trigger: expSection, start: "top 70%" }
    });
  }

  // Projects
  const projSection = document.getElementById('projects');
  if (projSection) {
    gsap.from(".project-card", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: { 
        trigger: projSection, 
        start: "top 85%", // make it trigger earlier
        toggleActions: "play none none reverse" 
      }
    });
  }

  // Skills
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    gsap.from(".skill-group", {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.1,
      scrollTrigger: { trigger: skillsSection, start: "top 85%" }
    });
  }

  // Ensure ScrollTrigger recalculates after all resources (images, fonts) load
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}
