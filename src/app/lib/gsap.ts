import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Avoid jumpy trigger updates on mobile when the URL bar collapses/expands.
ScrollTrigger.config({ ignoreMobileResize: true });

// Re-measure all triggers once the page and its resources are fully loaded.
const refreshWhenReady = () => ScrollTrigger.refresh();
if (document.readyState === "complete") {
  refreshWhenReady();
} else {
  window.addEventListener("load", refreshWhenReady);
}

export { gsap, ScrollTrigger, SplitText };
