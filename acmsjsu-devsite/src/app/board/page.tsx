import OfficerCard, { Officer } from "../components/about/OfficerCard";

const execBoard: Officer[] = [
  {
    pfp: "/pfps/tiffany-huynh.png",
    name: "Tiffany Huynh",
    position: "President",
  },
  {
    pfp: "/pfps/edwin-yue.jpeg",
    name: "Edwin Yue",
    position: "Vice President",
  },
  {
    pfp: "/pfps/timothy-kim.jpeg",
    name: "Timothy Kim",
    position: "Treasurer",
  },
  {
    pfp: "/pfps/amy-okuma.jpeg",
    name: "Amy Okuma",
    position: "Secretary",
  },
];

const eventCoordinators: Officer[] = [
  {
    pfp: "/pfps/sukirth-chanda.jpeg",
    name: "Sukirth Chanda",
  },
  {
    pfp: "/pfps/saahi-venkatraghavan.jpeg",
    name: "Saahi Venkatraghavan",
  },
  {
    pfp: "/pfps/amogh-makam.jpg",
    name: "Amogh Makam",
  },
  {
    pfp: "/pfps/lan-liang.jpeg",
    name: "Lan Liang",
  },
];

const outreachCoordinators: Officer[] = [
  {
    pfp: "/pfps/nathan-durrant.jpeg",
    name: "Nathan Durrant",
  },
];

const hackathonCoordinators: Officer[] = [
  {
    pfp: "/pfps/akshay-kamath.jpeg",
    name: "Akshay Kamath",
  },
];

const workshopCoordinators: Officer[] = [
  {
    pfp: "/pfps/anishka-chauhan.JPG",
    name: "Anishka Chauhan",
  },
  {
    pfp: "/pfps/ayush-madhukar.jpg",
    name: "Ayush Madhukar",
  },
  {
    pfp: "/pfps/yug-amol-more.jpg",
    name: "Yug Amol More",
  },
  {
    pfp: "/pfps/naya-singhania.jpg",
    name: "Naya Singhania",
  },
];

const socialMediaCoordinators: Officer[] = [
  {
    pfp: "/pfps/allyson-wong.jpg",
    name: "Allyson Wong",
  },
  {
    pfp: "/pfps/ramjot-dhillon.jpg",
    name: "Ramjot Dhillon",
  },
];

const page = () => {
  return (
    <div className="about text-text my-10 px-[15%] space-y-10">
      <h1 className="text-4xl font-bold text-center">Meet the Board</h1>
      <div className="space-y-5">
        <h3 className="text-2xl text-center font-bold">Executive Board</h3>
        <div className="flex flex-col items-center justify-center gap-16 sm:gap-8 mx-[-10%]">
          <div className="sm:flex sm:flex-wrap gap-x-10 items-center justify-center">
            {execBoard.map((officer, index) => (
              <OfficerCard key={index} {...officer} />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl text-center font-bold">Event Coordinators</h3>
        <div className="flex flex-col items-center justify-center gap-16 sm:gap-8 mx-[-10%]">
          <div className="sm:flex sm:flex-wrap gap-x-10 items-center justify-center">
            {eventCoordinators.map((officer, index) => (
              <OfficerCard key={index} {...officer} />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl text-center font-bold">
          Workshop Coordinators
        </h3>
        <div className="flex flex-col items-center justify-center gap-16 sm:gap-8 mx-[-10%]">
          <div className="sm:flex sm:flex-wrap gap-x-10 items-center justify-center">
            {workshopCoordinators.map((officer, index) => (
              <OfficerCard key={index} {...officer} />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl text-center font-bold">
          Social Media Coordinators
        </h3>
        <div className="flex flex-col items-center justify-center gap-16 sm:gap-8 mx-[-10%]">
          <div className="sm:flex sm:flex-wrap gap-x-10 items-center justify-center">
            {socialMediaCoordinators.map((officer, index) => (
              <OfficerCard key={index} {...officer} />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl text-center font-bold">
          Outreach Coordinators
        </h3>
        <div className="flex flex-col items-center justify-center gap-16 sm:gap-8 mx-[-10%]">
          <div className="sm:flex sm:flex-wrap gap-x-10 items-center justify-center">
            {outreachCoordinators.map((officer, index) => (
              <OfficerCard key={index} {...officer} />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl text-center font-bold">
          Hackathon Coordinators
        </h3>
        <div className="flex flex-col items-center justify-center gap-16 sm:gap-8 mx-[-10%]">
          <div className="sm:flex sm:flex-wrap gap-x-10 items-center justify-center">
            {hackathonCoordinators.map((officer, index) => (
              <OfficerCard key={index} {...officer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
