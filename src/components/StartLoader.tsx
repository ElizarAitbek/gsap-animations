import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function StartLoader() {
  const progressRef = useRef<HTMLDivElement>(null);
  const progressNumberRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({});

      tl.to(progressRef.current, {
        scaleX: 1,
        duration: 5,
        ease: "power3.inOut",
      })
        .to(
          progressNumberRef.current,
          {
            x: "96vw",
            duration: 5,
            ease: "power3.inOut",
          },
          "<",
        )
        .to(
          progressNumberRef.current,
          {
            textContent: "100",
            duration: 5,
            roundProps: "textContent",
          },
          "<",
        )
        .to(progressNumberRef.current, {
          y: 24,
          autoAlpha: 0,
        });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="absolute bottom-0 left-0 z-30 h-[5vh] w-full">
      <div
        className="h-full w-full origin-left scale-x-0 bg-gray-950"
        ref={progressRef}
      ></div>
      <span
        className="absolute left-[-5vh] top-1/2 z-40 -translate-y-1/2 transform whitespace-nowrap text-[3.2rem] text-white"
        ref={progressNumberRef}
      >
        0
      </span>
    </div>
  );
}
