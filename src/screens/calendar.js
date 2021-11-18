import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyCdHNRkr_QK6ygtZlKS8tPk9ytMRrxkykE";
let calendars = [
  {calendarId: "8jm76932d028s5p2jnrinj50q0@group.calendar.google.com"},
  {
    calendarId: "8jm76932d028s5p2jnrinj50q0@group.calendar.google.com",
    color: "#B241D1" //optional, specify color of calendar 2 events 
  }
];

function calendar() {

  return (
    <div style={{ marginRight:80 }}>
      <Calendar apiKey={API_KEY} calendars={calendars} />
    </div>
  );
}
export default calendar