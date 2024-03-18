"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import TestimonialCard from "./components/TestimonialCard";
import SpotLightCard from "./components/SpotlightCard";
import GetInvolved from "./components/ButtonGetInvolved";
import GetInvolvedCard from "./components/GetInvolvedCard";
import FAQ from "./components/FAQ";
import ACMCSHero from "acm-cs-sjsu-hero-component";
import "acm-cs-sjsu-hero-component/dist/styles.css";
import { inherits } from "util";
import Link from "next/link";


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
    <main className="text-center min-h-screen min-w-full flex-col items-center justify-between pt-10 pb-20 px-32">
      <div className="flex place-content-center min-w-full">
        <ACMCSHero/> 
      </div>
      <div className="animate-[fadeIn_2s_ease-in-out] duration-300 flex items-center place-content-center flex grid gap-5 grid-cols-4">     
          <Link style={{}} className="font-semibold transition ease-in-out hover:text-white hover:scale-110 shadow-md flex text-md border-[#b4c9d9] border-2 rounded-3xl py-2 px-4 bg-[#87adcd] text-[#c1d6e6]  transform -translate-y-24" target="_blank" href = "https://discord.gg/Rw85ngkExu">
            <Image className="dark:invert pr-2" src="./icons/discord.svg" width={25} height={25}/>
              Discord
          </Link>

      
           
          <Link className="font-semibold transition ease-in-out hover:text-white hover:scale-110 shadow-md flex text-md border-[#b4c9d9] border-2 rounded-3xl py-2 px-4 bg-[#87adcd] text-[#c1d6e6]  transform -translate-y-24" target="_blank" href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Image className="dark:invert pr-2" src="./icons/Instagram.svg" width={25} height={25}/>
                  Instagram
          </Link>
    


       
           
          <Link className="font-semibold transition ease-in-out hover:text-white hover:scale-110 shadow-md flex text-md border-[#b4c9d9] border-2 rounded-3xl py-2 px-4 bg-[#87adcd] text-[#c1d6e6] transform -translate-y-24" target="_blank" href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <Image className="dark:invert pr-2" src="./icons/LinkedIn.svg" width={25} height={25}/>
                  Linkedin
          </Link>
      

 
          <Link  className="transition font-bold ease-in-out hover:text-white hover:scale-110 shadow-md flex text-md border-[#ecd79c] border-2 rounded-3xl py-2 px-4 bg-[#f3c954] text-white transform -translate-y-24" target="_blank" href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Become a Member
                <Image className="pl-2" src="./icons/right-chevron.svg" width={22} height={22}/>
          </Link>
   

     
      </div>
    

      <div className="animate-[fadeIn_2s_ease-in-out] text-left inline">
        <div className="text-5xl font-[600]">
            We are the largest <span className="inline text-yellow-500"> Computer Science
            </span> organization at <span className="inline text-[#1a6096]">San José State University.</span>
       
        </div>
        
        <div className="mt-7 text-xl font-[600]">
            Thinking about getting <span className="inline text-yellow-500"> involved? </span>
         </div>
      <div className="py-4 text-base font-normal"> Engage with other ACM at SJSU members and elevate your tech journey. Access valuable resources like mock interviews for interview prep, thrilling hackathons, and coding competitions. Connect with industry leaders like Apple, Tesla, and <b>Google</b> for exclusive networking opportunities. 
       </div>
         
         <Link className="flex text-[#1a6096] pb-14" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Become a member >
         </Link>
      </div>

      <div className="border-y-2 place-items-center grid grid-cols-3 grid-rows-1 py-12">
        <Image src="./icons/applelogo.svg" width={95} height={95}/>
        <Image src="./icons/teslalogo.svg" width={95} height={95}/>
        <Image src="./icons/googlelogo.svg" width={95} height={95}/>

      </div>

      <div className="border-y-2 place-items-center py-5">
          <h1 className="!mt-10 text-4xl font-bold">Teams</h1>
          <h2 className="text-1xl font-bold mb-2 pt-3 text-gray-400">
          We have a place for everyone.
          </h2>
        <div className="place-items-center grid grid-flow-col grid-cols-3 grid-rows-1 py-10">
            <div className="text-[#8F69C2] font-semibold stroke-slate-500">
            <Image className="py-3" src="./icons/softwareicon.svg" width={105} height={105}/>
              Software 
            </div>

            <div className="text-[#C28F69] font-bold">
            <Image className="py-3" src="./icons/hardwareicon.svg" width={105} height={105}/>
              Hardware 
            </div>

            <div className="text-[#69C28F] font-bold">
            <Image className="py-3" src="./icons/designicon.svg" width={105} height={105}/>
              Design 
            </div>

          </div>
      </div>

     
        <div className="p-50 pt-16 border-y-2 pb-5">
         <h1 className="text-4xl font-bold">Spotlights</h1>
          <h2 className="text-1xl font-bold pb-10 pt-3 text-gray-400">
           Everywhere you go.
        </h2>
          <div className="flex min-w-fit overflow-scroll grid grid-cols-1 pb-6 gap-8 justify-between">
            <SpotLightCard 
              href=""
              image=""
              title="Test Event"
              description="come learn why computers compute things"
              ctaText="what does this do"
            />

            <SpotLightCard 
              href=""
              image=""
              title="Test Event"
              description="come learn why computers compute things"
              ctaText="what does this do"
            />

            <SpotLightCard 
              href=""
              image=""
              title="Test Event"
              description="come learn why computers compute things"
              ctaText="what does this do"
            />

            <SpotLightCard 
              href=""
              image=""
              title="Test Event"
              description="come learn why computers compute things"
              ctaText="what does this do"
            />

          <SpotLightCard 
              href=""
              image=""
              title="Test Event"
              description="come learn why computers compute things"
              ctaText="what does this do"
            />
          </div>
          <GetInvolved />


        </div>
     

     
      
      <h1 className="pt-16 text-4xl font-bold">Testimonials</h1>
      <h2 className="text-1xl font-bold pb-4 pt-3 text-gray-400">
        From our dedicated members and supportive alumni.
      </h2>
      <div className="p-50 flex min-w-fit overflow-scroll grid grid-cols-1 pb-6 gap-8 justify-between">
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
      <div className="p-50 grid grid-cols-1 sm:grid-cols-3 gap-8 flex justify-between pt-10 ">
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
  );
}
