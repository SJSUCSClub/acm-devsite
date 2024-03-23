import React from "react";

const CalendarEmbed = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff"
          style={{ border: "solid 1px #777" }}
          width="700"
          height="500"
        ></iframe>
      </div>
    </>
  );
};

export default CalendarEmbed;
