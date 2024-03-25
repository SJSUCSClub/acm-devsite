"use client";
import Image from "next/image";
import Hero from "./Hero";
import FAQ from "./components/FAQ";
import TestimonialCard from "./components/TestimonialCard";
import SpotLightCard from "./components/SpotlightCard";
import GetInvolved from "./components/ButtonGetInvolved";
import GetInvolvedCard from "./components/GetInvolvedCard";
import ACMCSHero from "acm-cs-sjsu-hero-component";
import "acm-cs-sjsu-hero-component/dist/styles.css";
import { inherits } from "util";
import Link from "next/link";
import { useState } from "react";

const spotlights: ISpotlight[] = [
  {
    type: "TECH TALK",
    image: "./placeholders/googlecloud.png",
    title: "ACM x Tesla Tech Talk",
    description:
      "Guest speaker Phuc Ngo, an NLP and Senior Data Engineer at Tesla, talks about his experiences and journey in the industry.",
    key: 1,
  },
  {
    type: "EVENT",
    image: "./photos/events/googlealumni.jpg",
    title: "Fall 2023 Google Alumni Panel",
    description:
      "ACM hosted a Q&A panel with SJSU alumni who are now working at Google. Members had the opportunity to gain insight into the technical interview process and what a typical workday at Google looks like, as well as network with panelists.",
    key: 2,
  },

  {
    type: "EVENT",
    image: "./placeholders/googlecloud.png",
    title: "Google Cloud Hero 2023",
    description:
      "Cloud Hero gets a room full of people competing head-to-head, with a live play-by-play leaderboard and lots of prizes. To date, over 1,000 players have played Cloud Hero at 12 public events like Google Cloud Next and Google Cloud Summits—with more venues on the way!",
    key: 3,
  },
];

interface ISpotlight {
  type: string;
  image: string;
  title: string;
  description: string;
  key: number;
}

const testimonial1 = {
  text: '"The hands-on experience I gained from the club\'s workshops has been invaluable for my software development skills."',
  name: "JOHNSON",
  job: "Full Stack Developer at Shopify",
};

const testimonial2 = {
  text: '"I never knew how many opportunities were available in tech until I attended the club\'s career events. Truly eye-opening!"',
  name: "SAMANTHA RUIZ",
  job: "Data Analyst at Microsoft",
};

const testimonial3 = {
  text: '"The mentorship I\'ve received as a club member has really improved my coding skills but also my confidence in problem solving"',
  name: "ELIJAH SMITH",
  job: "Systems Engineer at IBM",
};

const freePlan = {
  plan: "Free Plan",
  price: "$0.00",
  description: "You can get involved without a free.",
  priceStyling: "text-5xl font-bold text-gray-400",
  textList: [
    "Access to free events, workshops, hackathons, and coding competitions",
    "Networking opportunities with industry leaders and alumni.",
  ],
  buttonText: "Register",
  buttonStyling:
    "rounded-full bg-white-500 hover:bg-blue-500 hover:text-white border border-blue-500 no-underline text-blue-500 font-bold py-3 px-6 cursor-pointer",
};

const semesterPlan = {
  plan: "Semester Plan",
  price: "$19.95/sem.",
  description: "Take advantage of member perks today!",
  priceStyling: "text-5xl font-bold text-yellow-500",
  textList: [
    "All benefits of the Free Membership.",
    "Access to exclusive member-only events and workshops.",
    "Priority registration for hackathons and coding competitions.",
    "Complementary club merchandise.",
  ],
  buttonText: "Choose This Plan > ",
  buttonStyling:
    "rounded-full bg-yellow-500 hover:bg-yellow-600 no-underline text-white font-bold py-3 px-6 cursor-pointer",
};

const annualPlan = {
  plan: "Annual Plan",
  price: "$29.95/yr.",
  description: "Year-Round Advantages",
  priceStyling: "text-5xl font-bold text-blue-500",
  textList: [
    "All benefits of the Semester Membership for a full year.",
    "Additional savings over the semesterly rate.",
  ],
  buttonText: "Choose This Plan > ",
  buttonStyling:
    "rounded-full bg-[#1a6096] hover:bg-[#0c4e7e] no-underline text-white font-bold py-3 px-6 cursor-pointer",
};

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
