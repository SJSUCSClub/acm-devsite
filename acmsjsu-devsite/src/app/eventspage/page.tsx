import Image from "next/image";
import CalendarEmbed from "./CalendarEmbed";

// const buttonStyle1: React.CSSProperties = {
//   color: 'Blue',
//   border: '2px solid ',
//   backgroundColor: 'white',
//   padding: '10px 20px',
//   textAlign: 'center',
//   display: 'inline-block',
//   fontSize: 16,
//   margin: '4px 2px',
//   transitionDuration: '0.4s',
//   cursor: 'pointer',
//   borderRadius: 8,
//   position: 'absolute',
//   right: '0px',
//   top: '0px',
//   transform: 'translateY(-50)',
// }
// const buttonStyle2: React.CSSProperties = {
//   color: 'White',
//   border: '2px solid',
//   backgroundColor: 'blue',
//   padding: '11px 23px',
//   textAlign: 'center',
//   display: 'inline-block',
//   fontSize: 16,
//   margin: '4px 2px',
//   transitionDuration: '0.4s',
//   cursor: 'pointer',
//   borderRadius: 8,
//   position: 'absolute',
//   right: '120px',
//   top: '0px',
//   transform: 'translateY(-50)',
// }
// const buttonStyle3: React.CSSProperties = {
//   color: 'Blue',
//   padding: '15px 32px',
//   textAlign: 'center',
//   display: 'inline-block',
//   fontSize: 16,
//   margin: '4px 2px',
//   transitionDuration: '0.4s',
//   cursor: 'pointer',
//   borderRadius: 8,
//   position: 'absolute',
//   right: '220px',
//   top: '0px',
//   transform: 'translateY(-50)',
// }
// const buttonStyle4: React.CSSProperties = {
//   color: 'Blue',
//   padding: '15px 32px',
//   textAlign: 'center',
//   display: 'inline-block',
//   fontSize: 16,
//   margin: '4px 2px',
//   transitionDuration: '0.4s',
//   cursor: 'pointer',
//   borderRadius: 8,
//   position: 'absolute',
//   right: '300px',
//   top: '0px',
//   transform: 'translateY(-50)',
// }
// const buttonStyle5: React.CSSProperties = {
//   color: 'Blue',
//   padding: '15px 32px',
//   textAlign: 'center',
//   display: 'inline-block',
//   fontSize: 16,
//   margin: '4px 2px',
//   transitionDuration: '0.4s',
//   cursor: 'pointer',
//   borderRadius: 8,
//   position: 'absolute',
//   right: '385px',
//   top: '0px',
//   transform: 'translateY(-50)',
// }
// const buttonStyle6: React.CSSProperties = {
//   color: '#196096',
//   padding: '15px 32px',
//   textAlign: 'center',
//   display: 'inline-block',
//   fontSize: 16,
//   margin: '4px 2px',
//   transitionDuration: '0.4s',
//   cursor: 'pointer',
//   borderRadius: 8,
//   position: 'absolute',
//   right: '465px',
//   top: '0px',
//   transform: 'translateY(-50)',
// }
// const headerStyle1: React.CSSProperties = {
//   color: 'black',
//   position: 'absolute',
//   top: '50px',
//   fontSize: '30px',
//   fontWeight: 'bold',
// }
// const headerStyle2: React.CSSProperties = {
//   color: 'black',
//   position: 'absolute',
//   top: '100px',
// }
// const headerStyle3: React.CSSProperties = {
//   color: 'black',
//   position: 'absolute',
//   top: '120px',
//   fontWeight: 'bold',
// }
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
