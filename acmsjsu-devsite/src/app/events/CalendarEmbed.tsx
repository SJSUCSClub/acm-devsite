const CalendarEmbed = () => {
  return (
    <>
      <iframe
        className="top-8"
        src="https://calendar.google.com/calendar/embed?src=c_73d483091e5e5ada401c3525257e3f41c324e3109afe2ce11eeadec17f8580f6%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        style={{ border: "solid 1px #777" }}
        width="700"
        height="500"
      ></iframe>
    </>
  );
};

export default CalendarEmbed;
