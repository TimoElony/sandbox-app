'use client';
 
import { useEffect } from "react";

declare global {
  interface Window {
    __epilot?: {
      init: (config: any) => void;
      [key: string]: any;
    };
  }
} 

export default function Hausanschluss() {
  useEffect(() => {
    // Only run on client
    const script = document.createElement("script");
    script.src = "https://embed.journey.epilot.io/bundle.js";
    script.async = true;
    script.dataset.epInit = "false";

    script.onload = () => {
      if (window.__epilot) {
        console.log("epilot loaded - hausanschluss");
        window.__epilot.init([
          {
            journeyId: "401af390-d112-11f0-a873-a53e35356ed1",
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div
          id="epilot-journey-401af390-d112-11f0-a873-a53e35356ed1"
          style={{ width: "100%", textAlign: "left" }}
        />
      </main>
    </div>
  );
}
