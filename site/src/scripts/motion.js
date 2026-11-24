import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animate, hover, inView } from "motion";

gsap.registerPlugin(ScrollTrigger);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function addWordSpans(heading) {
  const label = heading.textContent.trim().replace(/\s+/g, " ");
  if (!label) return [];
  heading.setAttribute("aria-label", label);
  heading.replaceChildren();
  const words = label.split(" ");
  return words.map((word, index) => {
    const span = document.createElement("span");
    span.className = "gsap-word";
    span.setAttribute("aria-hidden", "true");
    span.textContent = word;
    heading.append(span);
    if (index < words.length - 1) heading.append(document.createTextNode(" "));
    return span;
  });
}

if (!reducedMotion.matches) {
  gsap.context(() => {
    document.querySelectorAll(".page-title h1, .divider .pill, .timeline-section > h2").forEach((heading) => {
      const words = addWordSpans(heading);
      if (!words.length) return;
      gsap.from(words, {
        yPercent: 85,
        opacity: 0,
        rotateX: -18,
        duration: 0.62,
        ease: "power3.out",
        stagger: 0.075,
        scrollTrigger: { trigger: heading, start: "top 88%", once: true }
      });
    });
  }, document.body);

  document.querySelectorAll(".fb").forEach((card, index) => {
    inView(card, (element) => {
      animate(element, { y: [16, 0], scale: [0.99, 1] }, {
        duration: 0.48,
        delay: (index % 3) * 0.055,
        ease: [0.22, 1, 0.36, 1]
      });
    }, { amount: 0.08, margin: "0px 0px -36px 0px" });
  });

  hover(".fb", (element) => {
    animate(element, { y: -3, scale: 1.012 }, { duration: 0.18, ease: "easeOut" });
    return () => animate(element, { y: 0, scale: 1 }, { duration: 0.2, ease: "easeOut" });
  });
}

window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
