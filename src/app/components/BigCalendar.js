"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const events = [
  // Monday, Dec 14, 2025
  {
    title: "Math",
    start: new Date(2025, 11, 14, 8, 0),
    end: new Date(2025, 11, 14, 8, 45),
  },
  {
    title: "English",
    start: new Date(2025, 11, 14, 9, 0),
    end: new Date(2025, 11, 14, 9, 50),
  },

  // Tuesday, Dec 15, 2025
  {
    title: "Biology",
    start: new Date(2025, 11, 15, 8, 0),
    end: new Date(2025, 11, 15, 8, 45),
  },
  {
    title: "Chemistry",
    start: new Date(2025, 11, 15, 9, 0),
    end: new Date(2025, 11, 15, 9, 50),
  },

  // Wednesday, Dec 16, 2025
  {
    title: "History",
    start: new Date(2025, 11, 16, 10, 0),
    end: new Date(2025, 11, 16, 10, 45),
  },
  {
    title: "Geography",
    start: new Date(2025, 11, 16, 11, 0),
    end: new Date(2025, 11, 16, 11, 45),
  },

  // Thursday, Dec 17, 2025
  {
    title: "Physics",
    start: new Date(2025, 11, 17, 8, 0),
    end: new Date(2025, 11, 17, 8, 45),
  },
  {
    title: "Computer Science",
    start: new Date(2025, 11, 17, 9, 0),
    end: new Date(2025, 11, 17, 9, 50),
  },

  // Friday, Dec 18, 2025
  {
    title: "Physical Education",
    start: new Date(2025, 11, 18, 10, 0),
    end: new Date(2025, 11, 18, 10, 45),
  },
  {
    title: "Art",
    start: new Date(2025, 11, 18, 11, 0),
    end: new Date(2025, 11, 18, 11, 45),
  },
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
      style={{ height: "98%"}}
      onView={handleOnChangeView}
      min={new Date(2025, 11, 14, 8, 0)}
      max={new Date(2025, 11, 14, 18, 0)}
    />
  );
};

export default BigCalendar;
