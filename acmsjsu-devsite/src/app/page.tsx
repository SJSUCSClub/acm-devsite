import Image from "next/image";
import Hero from "./components/Hero";
import TestimonialCard from "./components/TestimonialCard";
import SpotLightCard from "./components/SpotlightCard";
import GetInvolved from "./components/ButtonGetInvolved";
import GetInvolvedCard from "./components/GetInvolvedCard";
import FAQ from "./components/FAQ";

const spotlightCloudHero = {
  type: "EVENT",
  title: "Google Cloud Hero 2023",
  description:
    "Cloud Hero gets a room full of people competing head-to-head, with a live play-by-play leaderboard and lots of prizes. To date, over 1,000 players have played Cloud Hero at 12 public events like Google Cloud Next and Google Cloud Summits—with more venues on the way!",
};
const spotlightRestAPI = {
  type: "PAST WORKSHOP",
  title: "REST API Tutorial",
  description:
    "Learn how to create and implement REST API’s into your programs.",
};

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
    "rounded-full bg-yellow-500 hover:bg-yellow-600 hover:text-yellow-700 no-underline text-white font-bold py-3 px-6 cursor-pointer",
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
    "rounded-full bg-blue-500 hover:bg-blue-600 hover:text-blue-700 no-underline text-white font-bold py-3 px-6 cursor-pointer",
};

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <GetInvolved />
        <div className="w-3/4 h-px bg-black my-20"></div>
        <h1 className="!mt-10 text-4xl font-bold">Testimonials</h1>
        <h2 className="text-1xl font-bold mb-2 pt-3 text-gray-500">
          From our dedicated members and supportive alumni.
        </h2>
        <div className="p-50 grid grid-cols-1 sm:grid-cols-3 gap-8 flex justify-between pt-10">
          <TestimonialCard
            text={testimonial1.text}
            name={testimonial1.name}
            job={testimonial1.job}
          />
          <TestimonialCard
            text={testimonial2.text}
            name={testimonial2.name}
            job={testimonial2.job}
          />
          <TestimonialCard
            text={testimonial3.text}
            name={testimonial3.name}
            job={testimonial3.job}
          />
        </div>
        <h1 className="!mt-10 text-4xl font-bold pt-10">Get Involved</h1>
        <h2 className="text-1xl font-bold mb-2 pt-3 text-gray-500">
          Become a member and take advantage of member perks today!
        </h2>
        <div className="p-50 grid grid-cols-1 sm:grid-cols-3 gap-8 flex justify-between pt-10">
          <GetInvolvedCard
            plan={freePlan.plan}
            price={freePlan.price}
            description={freePlan.description}
            priceStyling={freePlan.priceStyling}
            textList={freePlan.textList}
            buttonText={freePlan.buttonText}
            buttonStyling={freePlan.buttonStyling}
          />
          <GetInvolvedCard
            plan={semesterPlan.plan}
            price={semesterPlan.price}
            description={semesterPlan.description}
            priceStyling={semesterPlan.priceStyling}
            textList={semesterPlan.textList}
            buttonText={semesterPlan.buttonText}
            buttonStyling={semesterPlan.buttonStyling}
          />
          <GetInvolvedCard
            plan={annualPlan.plan}
            price={annualPlan.price}
            description={annualPlan.description}
            priceStyling={annualPlan.priceStyling}
            textList={annualPlan.textList}
            buttonText={annualPlan.buttonText}
            buttonStyling={annualPlan.buttonStyling}
          />
        </div>
      </main>
      <div className="relative bg-black w-full h-[650px]">
        <FAQ />
      </div>
    </>
  );
}
