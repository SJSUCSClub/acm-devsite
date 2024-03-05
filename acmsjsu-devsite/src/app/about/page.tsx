import Image from "next/image";
import TextWithImage from "../components/about/TextWithImage";

const officerData = [
  {
    pfp: "/pfps/Karthik.png",
    name: "Karthik",
    position: "President",
    linkedin: "https://www.linkedin.com/in/karthikmanishankar/",
  },

  {
    pfp: "/pfps/shirleyli.png",
    name: "Shirley Li",
    position: "Vice President",
    linkedin: "www.linkedin.com/in/shirley-shuhua-li",
  },

  {
    pfp: "/pfps/angela.png",
    name: "Angela Huang",
    position: "Secretary",
    linkedin: "",
  },

  {
    pfp: "/pfps/bineet.png",
    name: "Bineet Anand",
    position: "Social Media",
    linkedin: "https://www.linkedin.com/in/bineet-anand/",
  },

  {
    pfp: "/pfps/annemai.png",
    name: "Anne Mai",
    position: "Event Chair",
    linkedin: "",
  },
];
const page = () => {
  return (
    <div className="about text-text my-20 px-[15%]">
      <div className="intro space-y-4">
        <h1 className="text-4xl font-bold">
          What is <span className="text-primary">ACM</span> at{" "}
          <span className="text-secondary">SJSU?</span>
        </h1>
        <h2 className="font-bold text-xl">Who we are.</h2>
        <p>
          The ACM Club at San Jose State University (SJSU) is the premier
          student chapter of the Association for Computing Machinery (ACM) in
          the heart of Silicon Valley. At ACM SJSU, we are dedicated to
          fostering a vibrant community of technology enthusiasts and
          innovators.
        </p>
        <p>
          Our inclusive club welcomes students from all backgrounds and skill
          levels, whether you&apos;re a seasoned coder or just starting your
          journey in the world of computing. We believe in the power of
          collaboration and the endless possibilities offered by computer
          science.
        </p>
        <h2 className="font-bold text-xl">What we do.</h2>
        <p>
          We provide opportunities for San José students from all majors. As a
          member, youll have access to excluesive events, workshops, hackathons,
          projects, and many more.
        </p>
        <p>
          Believe it or not, this very website was created by students, just
          like you! Our projects cover a wide range of topics, from web
          development to hardware engineering, bot development and much more!
        </p>

        <h1 className="!mt-10 text-4xl font-bold">How do I get involved?</h1>
        <TextWithImage
          imagePath="/about/info1.png"
          imageAlt="Students on a computer"
        >
          <h2 className="font-bold text-xl">Become a Member</h2>
          <p>
            Join ACM SJSU and elevate your tech journey. Access valuable
            resources like mock interviews for interview prep, thrilling
            hackathons, and coding competitions. Connect with industry leaders
            like <span className="font-bold">Apple</span>,{" "}
            <span className="font-bold">Tesla</span>, and{" "}
            <span className="font-bold">Google</span> for exclusive networking
            opportunities.
          </p>
        </TextWithImage>
        <TextWithImage
          reverse={true}
          imagePath="/about/info2.png"
          imageAlt="Phone screen on ACM's instagram"
        >
          <h2 className="font-bold text-xl">Stay Connected on Social Media</h2>
          <p>
            Stay in the loop and connected with our community through our
            various social media channels. Follow us on platforms like{" "}
            <a href="https://www.instagram.com/sjsuacm/">Instagram</a>,{" "}
            <a href="https://discord.gg/yHky9bXRdE">Discord</a>, and{" "}
            <a href="https://www.linkedin.com/company/sjsu-computer-science-club/">
              LinkedIn
            </a>{" "}
            to stay updated on our latest events, projects, and initiatives.
          </p>
        </TextWithImage>
        <TextWithImage
          imagePath="/about/info3.png"
          imageAlt="Students on computer"
        >
          <h2 className="font-bold text-xl">Become a Mentor/Mentee</h2>
          <p>
            Join our community and connect with experienced mentors who are
            eager to share their knowledge and insights. As a mentee,
            you&apos;ll gain valuable guidance to navigate your academic and
            career journey successfully.
          </p>
          <p>
            If you&apos;re an experienced professional looking to give back and
            make a meaningful impact, consider becoming a mentor and providing
            guidance to the next generation of tech enthusiasts.
          </p>
        </TextWithImage>
      </div>

      <hr className="border-neutral my-10"></hr>

      <div className="teams space-y-4">
        <h1 className="text-4xl text-center font-bold">Meet Our Teams</h1>
        <p>
          We’re dedicated to making the ACM Club a place for every student. Our
          teams provide a gateway for students into new fields and industries.
          You can join any of our teams to explore your interests and develop
          new skills as a member of the club.
        </p>
        <TextWithImage
          reverse={true}
          logo={true}
          imagePath="/about/software.png"
          imageAlt=""
        >
          <p>
            This group is committed to providing students with the chance to
            delve into technology through practical projects and interactive
            activities. The development branch concentrates on acquainting
            students with software development and the diverse range of
            technology stacks prevalent in the industry.
          </p>
        </TextWithImage>
        <TextWithImage logo={true} imagePath="/about/hardware.png" imageAlt="">
          <p>
            This team is committed to immersing students in the world of
            hardware by engaging them in tangible projects and experiments. We
            concentrate on imparting knowledge about electronics, circuit
            design, and the hardware tools and devices that are integral to
            technological innovation in the industry.
          </p>
        </TextWithImage>
        <TextWithImage
          reverse={true}
          logo={true}
          imagePath="/about/design.png"
          imageAlt=""
        >
          <p>
            Our design squad is focused on guiding students through the creative
            aspects of technology by offering hands-on experience in design
            projects. We emphasize the principles of user interface (UI) and
            user experience (UX) design, along with the various design tools and
            methodologies adopted by professionals in the tech field.
          </p>
        </TextWithImage>
      </div>
      <hr className="border-neutral my-10"></hr>
      <div className="officers space-y-6">
        <h1 className="text-4xl text-center font-bold">Officers</h1>
        <h2 className="text-neutral text-xl text-center font-bold">
          The crew behind the ship.
        </h2>
        <div className="grid grid-cols-6"></div>
      </div>
    </div>
  );
};

export default page;
