import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import StartLoader from "./StartLoader";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Welcome() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-30",
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        })
        .from("#frame", {
          opacity: 0,
          duration: 0.5,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.6,
        })
        .to(window, {
          scrollTo: { y: window.innerHeight, autoKill: false },
          duration: 3,
          ease: "power2.inOut",
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={comp} className="relative">
      <div
        id="intro-slider"
        className="absolute left-0 top-0 z-10 flex h-screen w-full flex-col gap-10 bg-gray-50 p-10 font-spaceGrotesk tracking-tight"
      >
        <h1 id="title-1" className="text-5xl sm:text-9xl">
          Frontend developer
        </h1>
        <h1 id="title-2" className="text-5xl sm:text-9xl">
          Elizar Aitbek
        </h1>
        <h1 id="title-3" className="text-5xl sm:text-9xl">
          Chilisten
        </h1>
        <StartLoader />
      </div>
      <div className="flex h-screen place-items-center justify-center bg-gray-950">
        <h1
          id="welcome"
          className="relative z-10 font-spaceGrotesk text-6xl font-bold text-gray-100 sm:text-9xl"
        >
          Welcome.
        </h1>

        <iframe
          id="frame"
          src="https://giphy.com/embed/ui1hpJSyBDWlG"
          width="480px"
          height="322px"
          className="pointer-events-none absolute z-0 rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
