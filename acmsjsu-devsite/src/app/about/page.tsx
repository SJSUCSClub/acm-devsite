import Image from "next/image";

const page = () => {
  return (
    <div className="about text-text mt-20 px-[15%]">
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
        <div className="flex items-center gap-20">
          <div className="space-y-4 shrink">
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
          </div>
          <div className="relative min-w-[330px] h-[222px]">
            <Image
              src="/info1.png"
              fill
              alt="Image of students on computers"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-20 text-right">
          <div className="space-y-4 shrink">
            <h2 className="font-bold text-xl">
              Stay Connected on Social Media
            </h2>
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
          </div>
          <div className="relative min-w-[330px] h-[222px]">
            <Image
              src="/info2.png"
              fill
              alt="Image of students on computers"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex items-center gap-20">
          <div className="space-y-4 shrink">
            <h2 className="font-bold text-xl">Become a Mentor/Mentee</h2>
            <p>
              Join our community and connect with experienced mentors who are
              eager to share their knowledge and insights. As a mentee,
              you&apos;ll gain valuable guidance to navigate your academic and
              career journey successfully.
            </p>
            <p>
              If you&apos;re an experienced professional looking to give back
              and make a meaningful impact, consider becoming a mentor and
              providing guidance to the next generation of tech enthusiasts.
            </p>
          </div>
          <div className="relative min-w-[330px] h-[222px]">
            <Image
              src="/info3.png"
              fill
              alt="Image of students on computers"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <hr className="border-neutral my-10"></hr>

      <div className="teams"></div>

      <div className="officers"></div>
    </div>
  );
};

export default page;
