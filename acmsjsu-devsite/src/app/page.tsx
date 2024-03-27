"use client"
import Image from "next/image";
import Hero from "./Hero";
import "acm-cs-sjsu-hero-component/dist/styles.css";


export default function Home() {


  return (
    <main className="flex justify-center items-center">
      <Hero />
    </main>


  );
}
