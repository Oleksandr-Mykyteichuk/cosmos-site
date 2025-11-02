import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerVideoController } from "./videoController";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener("loadedmetadata", () => {
      const duration = video.duration;

      let scrollProgress = 0;
      let lastProgress = 0.0001;

      const lenis = new Lenis({
        smoothWheel: true,
        lerp: 0.1,
      });

      function raf(t: number) {
        lenis.raf(t);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      const st = ScrollTrigger.create({
        trigger: "#scroll-root",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          scrollProgress = Math.min(1, Math.max(0, self.progress));
        },
      });

      st.update();
      ScrollTrigger.refresh();

      video.currentTime = duration * scrollProgress;

      const render = () => {
        const p =
          scrollProgress === 0 || scrollProgress === 1
            ? lastProgress
            : scrollProgress;

        lastProgress = p;
        const time = duration * p;

        if (video.currentTime !== time) {
          video.currentTime = time;
        }

        if ("requestVideoFrameCallback" in video) {
          (video as any).requestVideoFrameCallback(render);
        } else {
          requestAnimationFrame(render);
        }
      };

      registerVideoController({
        scrollToProgress: (target: number, dur = 1.4) => {
          gsap.to({ p: scrollProgress }, {
            p: target,
            duration: dur,
            ease: "power2.inOut",
            onUpdate(self) {
              lastProgress = self.targets()[0].p;
            }
          });

          const scrollY =
            target * (document.body.scrollHeight - window.innerHeight);

          lenis.scrollTo(scrollY, {
            duration: dur,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
          });
        },
      });

      render();
    });
  }, []);

  return (
    <video
      ref={videoRef}
      className="bg-video"
      src="/video/space.webm"
      muted
      playsInline
      preload="auto"
    />
  );
}
