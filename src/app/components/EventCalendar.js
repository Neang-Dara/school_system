'use client'
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Image from 'next/image';

// Temporary
const event = [
  {
    id: 1,
    title: "Technology",
    time: "7:00 Am - 8:00 Am",
    descriptioin: "Tech is a broad term that refers to technology, which is the application of scientific knowledge for practical purposes"
  },
  {
    id: 2,
    title: "Research",
    time: "9:00 Pm - 10:00 Pm",
    descriptioin: "Research is the systematic investigation into a subject to discover new information"
  },
  {
    id: 3,
    title: "AI",
    time: "7:00 Pm - 8:00 Pm",
    descriptioin: "AI is a broad field of computer science that involves creating systems"
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='bg-white p-4 rounded-md shadow-xl'>
      <Calendar onChange={onChange} value={value} />

      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src="/icons/more.png" alt="" width={20} height={20} />
      </div>

      <div className='flex flex-col gap-4'>
        {event.map((event) => (
          <div
            className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-[#C3EBFA] even:border-t-[#CFCEFF]'
            key={event.id}
          >
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-gray-600'>{event.title}</h1>
              <span className='text-gray-300 text-xs'>{event.time}</span>
            </div>

            <p className='mt-2 text-gray-400 text-sm'>{event.descriptioin}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
