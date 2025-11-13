'use client';

import Image from "next/image";
import Link from "next/link";


export default function Home() {
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
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Testumgebung
          </h1>
          <nav>
            <a href="/funktionstest" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/funktionstest';
                }}>Funktionstest
            </a>
          </nav>
          <p className="max-w-sm text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Diese Applikation dient zum Testen der Schnittstellen.
          </p>
        </div>
      </main>
    </div>
  );
}
