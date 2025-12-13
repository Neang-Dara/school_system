"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Math",
    allDay: false,
    start: new Date(2025, 10, 16, 8, 0),
    end: new Date(2025, 10, 16, 8, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2025, 10, 16, 8, 0),
    end: new Date(2025, 10, 16, 8, 45),
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
      style={{ height: 500 }}
      onView={handleOnChangeView}
      min={new Date(2025, 10, 16, 8, 0)}
      max={new Date(2025, 10, 16, 18, 0)}
    />
  );
};

export default BigCalendar;
