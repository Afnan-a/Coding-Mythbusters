import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
/*calendar is not working on my end and this goes inbetween div 
 * <Calendar apiKey={API_KEY} calendars={calendars} /> 
 */

const API_KEY = "AIzaSyCdHNRkr_QK6ygtZlKS8tPk9ytMRrxkykE";
let calendars = [
  {calendarId: "8jm76932d028s5p2jnrinj50q0@group.calendar.google.com"},
  {
    calendarId: "8jm76932d028s5p2jnrinj50q0@group.calendar.google.com",
    color: "#B241D1" //optional, specify color of calendar 2 events
  }
];

const calendar = () => {
  
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} /> 
      </div>
    )
}
export default calendar