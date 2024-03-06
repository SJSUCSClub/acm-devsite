import CalendarEmbed from "./CalendarEmbed";

const CalendarPage = () => {
  return (
    <>
      <div className="flex gap-10 items-center justify-end mr-20 mt-4 font-bold">
        <button className="text-[#196096]"> About</button>
        <button className="text-[#196096]"> Events</button>
        <button className="text-[#196096]"> Projects</button>
        <button className="text-[#196096]"> Contact</button>
        <button className="rounded-full bg-[#196096] text-white font-bold py-2 px-4">Register</button>
        <button className=" border-2 border-[#196096] rounded-full text-[#196096] font-bold py-2 px-4"> Sign In</button>
      </div>
      <div className="flex flex-col  ml-40 space-y-4">
      <h1 className="font-bold text-4xl"> Upcoming Events</h1>
      <h2>
      Our student group organizes a variety of events during each academic semester, including workshops, informational sessions, community engagement activities, and much more!
      </h2>
      <h3 className="font-bold">
        These events are accessible to all those who are interested,
        irrespective of their major or prior experience.
      </h3>

      </div>
      <CalendarEmbed />
    </>
  );
};

export default CalendarPage;
