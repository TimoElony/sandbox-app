'use client';

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

declare global {
  interface Window {
    __epilot?: {
      init: (config: any) => void;
      [key: string]: any;
    };
  }
}

export default function Funktion() {
  useEffect(() => {
    // Only run on client
    const script = document.createElement("script");
    script.src = "https://embed.journey.epilot.io/bundle.js";
    script.async = true;
    script.dataset.epInit = "false";

    script.onload = () => {
      if (window.__epilot) {
        console.log("epilot loaded");
        window.__epilot.init([
          {
            journeyId: "b2895790-b43f-11f0-aba3-4b60a66e3b8b",
            mode: "inline",
            scrollToTop: true,
            topBar: true,
            lang: "de",
          },
        ]);
      }
    };

    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const startJourney = () => {
    console.log("Funktionstest gestartet");
    if (window.__epilot) {
      window.__epilot.init([
        {
          journeyId: "b2895790-b43f-11f0-aba3-4b60a66e3b8b",
          mode: "inline",
          scrollToTop: true,
          topBar: true,
          lang: "de",
        },
      ]);
    } else {
      console.warn("__epilot not loaded yet");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="/loomia.png"
          alt="Loomia logo"
          width={100}
          height={20}
          priority
        />
        <nav>
          <Link href="/">Zurück zur Startseite</Link>
        </nav>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Button onClick={startJourney}>Funktionstest Button</Button>
        </div>

        {/* Container for the embedded journey */}
        <div
          id="epilot-journey-b2895790-b43f-11f0-aba3-4b60a66e3b8b"
          style={{ width: "100%", textAlign: "left" }}
        />
      </main>
    </div>
  );
}
