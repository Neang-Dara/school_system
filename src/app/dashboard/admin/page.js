import Announcements from '@/app/components/Announcements'
import AttendanceChart from '@/app/components/AttendanceChart'
import CountChart from '@/app/components/CountChart'
import EventCalendar from '@/app/components/EventCalendar'
import FinanceChart from '@/app/components/FinanceChart'
import UserCard from '@/app/components/UserCard'
import React from 'react'

const Adminpage = () => {
  return (
    <div className="p-4 flex gap-8 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex-col flex-wrap gap-2">
      {/* UserCard */}
        <div className=" w-full flex gap-4 justify-between ">
            <UserCard type="Student"/>
            <UserCard type="Teacher"/>         
            <UserCard type="Parents"/> 
            <UserCard type="Staff"/> 
        </div>
          {/* Middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
            {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px] mt-4">
              <CountChart/>
          </div>
          {/* Attendance chart */}
          <div className="w-full lg:w2/3 h-[450px]">
            <AttendanceChart/>
          </div>
          </div>
            {/* bottom */}
            <div className="w-full h-[500px]">
              <FinanceChart/>
          </div>
        </div>
      {/* right */}
      <div className="w-full lg:w-1/3  flex flex-col gap-4">
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default Adminpage