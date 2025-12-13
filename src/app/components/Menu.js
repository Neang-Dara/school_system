"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { SignOutButton, useUser } from '@clerk/nextjs';

const menuItems = [
    {
        title:"MENU",
        items: [
            {
                icon:"/icons/Home.png",
                label:"Home",
                href:"/dashboard/admin",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon:"/icons/faculty.png",
                label:"Faculty",
                href:"/dashboard/list/faculties",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon:"/icons/department.png",
                label:"Department",
                href:"/dashboard/list/departments",
                visible:["admin","teacher"],   
            },
            {
                icon:"/icons/Teacher.png",
                label:"Teachers",
                href:"/dashboard/list/teachers",
                visible:["admin","teacher"],   
            },
            {
                icon:"/icons/parent.png",
                label:"Parents",
                href:"/dashboard/list/parents",
                visible:["admin", "teacher"],
            },
            {
                icon:"/icons/student.png",
                label:"Students",
                href:"/dashboard/list/students",
                visible:["admin","teacher"],
            },
            {
                icon:"/icons/class.png",
                label:"Classes",
                href:"/dashboard/list/classes",
                visible:["admin","teacher"],
            },
            {
                icon:"/icons/attendance.png",
                label:"Attendances",
                href:"/dashboard/list/attendances",
                visible:["admin","teacher","student","parent"],
            },
            {
                icon:"/icons/subject.png",
                label:"Subjects",
                href:"/dashboard/list/subjects",
                visible: ["admin"],
            }, 
            {
                icon:"/icons/lesson.png",
                label:"Lessons",
                href:"/dashboard/list/lessons",
                visible:["admin","teacher"],
            },
            {
                icon:"/icons/assignment.png",
                label:"Assignments",
                href:"/dashboard/list/assignments",
                visible:["admin","teacher","student","parent"],
            },
            {
                icon:"/icons/exam.png",
                label:"Exams",
                href:"/dashboard/list/exams",
                visible:["admin","teacher","student","parent"],
            }, 
            {
                icon:"/icons/result.png",
                label:"Results",
                href:"/dashboard/list/results",
                visible:["admin","teacher","student","parent"],
            },
            {
                icon:"/icons/calendar.png",
                label:"Events",
                href:"/dashboard/list/events",
                visible:["admin", "teacher", "student", "parent"],
            },
            {
                icon:"/icons/announcement.png",
                label:"Announcement",
                href:"/dashboard/list/announcements",
                visible: ["admin", "teacher", "student", "parent"]
            },
            {
                icon:"/icons/Message.png",
                label:"Reports",
                href:"/dashboard/list/reports",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title:"OTHER",
        items: [
            // {
            //     icon:"/icons/profile.png",
            //     label:"Profile",
            //     href:"/profile",
            //     visible: ["admin","teacher","student","parent"]
            // },
            // {
            //     icon:"/icons/setting.png",
            //     label:"settings",
            //     href:"/settings",
            //     visible:["admin","teacher","student","parent"],   
            // },
            {
                icon: "/icons/logout.png",
                label: "Logout",
                href: "http://localhost:3000/",
                visible: ["admin", "teacher", "student", "parent"]
            }
        ],
    },
];

const Menu = () => {
  const { user } = useUser(); 
  const userRole = user?.publicMetadata?.role || "student"; 

  // 👈 HOME ACTIVE BY DEFAULT
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <div className="mt-1 text-sm">
      {menuItems.map(section => (
        <div className="flex flex-col gap-2" key={section.title}>

          <span className="hidden lg:block text-yellow-200 font-light my-2">
            {section.title}
          </span>

          {section.items
            .filter(item => item.visible.includes(userRole))
            .map(item => {

              const isActive = activeItem === item.label;

              const baseClasses = `flex items-center gap-4 py-1 px-3 w-full transition rounded-xl`;
              const activeClasses = "md:bg-gray-100 text-black";
              const hoverClasses = "text-gray-500 md:hover:bg-gray-100 hover:text-black";

              if (item.label === "Logout") {
                return (
                  <SignOutButton redirectUrl="http://localhost:3000/" key={item.label}>
                    <button
                      onClick={() => setActiveItem(item.label)}
                      className={`${baseClasses} ${isActive ? activeClasses : hoverClasses}`}
                    >
                      <Image src={item.icon} alt={item.label} width={20} height={20} />
                      <span className="hidden lg:block">{item.label}</span>
                    </button>
                  </SignOutButton>
                );
              }

              return (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={() => setActiveItem(item.label)}
                  className={`${baseClasses} ${isActive ? activeClasses : hoverClasses}`}
                >
                  <Image src={item.icon} alt={item.label} width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
