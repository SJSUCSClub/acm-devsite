import Image from 'next/image'

const buttonStyle1: React.CSSProperties = {
  color: 'Blue',
  border: '2px solid ',
  backgroundColor: 'white',
  padding: '10px 20px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: 16,
  margin: '4px 2px',
  transitionDuration: '0.4s',
  cursor: 'pointer',
  borderRadius: 8,
  position: 'absolute',
  right: '0px',
  top: '0px',
  transform: 'translateY(-50)',
}
const buttonStyle2: React.CSSProperties = {
  color: 'White',
  border: '2px solid',
  backgroundColor: 'blue',
  padding: '11px 23px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: 16,
  margin: '4px 2px',
  transitionDuration: '0.4s',
  cursor: 'pointer',
  borderRadius: 8,
  position: 'absolute',
  right: '120px',
  top: '0px',
  transform: 'translateY(-50)',
}
const buttonStyle3: React.CSSProperties = {
  color: 'Blue',
  padding: '15px 32px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: 16,
  margin: '4px 2px',
  transitionDuration: '0.4s',
  cursor: 'pointer',
  borderRadius: 8,
  position: 'absolute',
  right: '220px',
  top: '0px',
  transform: 'translateY(-50)',
}
const buttonStyle4: React.CSSProperties = {
  color: 'Blue',
  padding: '15px 32px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: 16,
  margin: '4px 2px',
  transitionDuration: '0.4s',
  cursor: 'pointer',
  borderRadius: 8,
  position: 'absolute',
  right: '300px',
  top: '0px',
  transform: 'translateY(-50)',
}
const buttonStyle5: React.CSSProperties = {
  color: 'Blue',
  padding: '15px 32px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: 16,
  margin: '4px 2px',
  transitionDuration: '0.4s',
  cursor: 'pointer',
  borderRadius: 8,
  position: 'absolute',
  right: '385px',
  top: '0px',
  transform: 'translateY(-50)',
}
const buttonStyle6: React.CSSProperties = {
  color: 'Blue',
  padding: '15px 32px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: 16,
  margin: '4px 2px',
  transitionDuration: '0.4s',
  cursor: 'pointer',
  borderRadius: 8,
  position: 'absolute',
  right: '465px',
  top: '0px',
  transform: 'translateY(-50)',
}
const headerStyle1: React.CSSProperties = {
  color: 'black',
  position: 'absolute',
  top: '50px',
  fontSize: '30px',
  fontWeight: 'bold',
}
const headerStyle2: React.CSSProperties = {
  color: 'black',
  position: 'absolute',
  top: '100px',
}
const headerStyle3: React.CSSProperties = {
  color: 'black',
  position: 'absolute',
  top: '120px',
  fontWeight: 'bold',
}
const CalendarPage = () => {
    const embedCode = `<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff" style="border:solid 1px #777" width="700" height="500" frameborder="0" scrolling="no"></iframe>`;
    return (
      <div>
        <h1 style = {headerStyle1}> Upcoming Events</h1>
        <button style={buttonStyle1}> Register</button>
        <button style={buttonStyle2}> Sign In</button>
        <button style={buttonStyle3}> Contact</button>
        <button style={buttonStyle4}> Projects</button>
        <button style={buttonStyle5}> Events</button>
        <button style={buttonStyle6}> About</button>
        <h2 style = {headerStyle2}>
          Our student group organizes a variety of events during each academic semester. Including workshops, informational sessions, community engagement activities, and much more! 
        </h2>
        <h3 style = {headerStyle3}>
          These events are accessible to all those who are interested, irrespective of their major or prior experience.
        </h3>
      <div dangerouslySetInnerHTML={{ __html: embedCode }} /> 
      </div>
    )
}

export default CalendarPage