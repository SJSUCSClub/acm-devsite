"use client";
import Hero from "./Hero";
import FAQ from "./components/FAQ";
import "acm-cs-sjsu-hero-component/dist/styles.css";

export default function Home() {
  return (
    <>
      <main className="flex justify-center place-items-center">
        <Hero />
      </main>
      <FAQ />
    </>
  );
}
