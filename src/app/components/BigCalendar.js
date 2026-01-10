"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

// All events shifted to 2026-01-05 (January 5, 2026)
const events = [
  // Day 5
  { title: "Math", start: new Date(2026, 0, 5, 8, 0), end: new Date(2026, 0, 5, 8, 45) },
  { title: "Biology", start: new Date(2026, 0, 5, 10, 0), end: new Date(2026, 0, 5, 10, 45) },
  { title: "Chemistry", start: new Date(2026, 0, 5, 11, 0), end: new Date(2026, 0, 5, 11, 50) },
  { title: "History", start: new Date(2026, 0, 5, 12, 0), end: new Date(2026, 0, 5, 12, 45) },
  { title: "Geography", start: new Date(2026, 0, 5, 13, 0), end: new Date(2026, 0, 5, 13, 45) },

  // Day 6
  { title: "English", start: new Date(2026, 0, 6, 9, 0), end: new Date(2026, 0, 6, 9, 50) },
  { title: "Physics", start: new Date(2026, 0, 6, 14, 0), end: new Date(2026, 0, 6, 14, 45) },
  { title: "Computer Science", start: new Date(2026, 0, 6, 15, 0), end: new Date(2026, 0, 6, 15, 50) },

  // Day 7
  { title: "Physical Education", start: new Date(2026, 0, 7, 8, 0), end: new Date(2026, 0, 7, 8, 45) },
  { title: "Art", start: new Date(2026, 0, 7, 9, 0), end: new Date(2026, 0, 7, 9, 45) },
  { title: "Math", start: new Date(2026, 0, 7, 10, 0), end: new Date(2026, 0, 7, 10, 45) },

  // Day 8
  { title: "English", start: new Date(2026, 0, 8, 8, 0), end: new Date(2026, 0, 8, 8, 50) },
  { title: "Biology", start: new Date(2026, 0, 8, 9, 0), end: new Date(2026, 0, 8, 9, 45) },
  { title: "Chemistry", start: new Date(2026, 0, 8, 10, 0), end: new Date(2026, 0, 8, 10, 45) },

  // Day 9
  { title: "History", start: new Date(2026, 0, 9, 8, 0), end: new Date(2026, 0, 9, 8, 45) },
  { title: "Geography", start: new Date(2026, 0, 9, 9, 0), end: new Date(2026, 0, 9, 9, 45) },
  { title: "Physics", start: new Date(2026, 0, 9, 10, 0), end: new Date(2026, 0, 9, 10, 45) },
  { title: "Computer Science", start: new Date(2026, 0, 9, 11, 0), end: new Date(2026, 0, 9, 11, 50) },
  { title: "Physical Education", start: new Date(2026, 0, 9, 12, 0), end: new Date(2026, 0, 9, 12, 45) },
];


const BigCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}

      // Show correct day
      defaultDate={new Date(2026, 0, 5)}

      // Set min/max to cover your events
      min={new Date(2026, 0, 5, 8, 0)}
      max={new Date(2026, 0, 5, 18, 0)}
    />
  );
};

export default BigCalendar;
