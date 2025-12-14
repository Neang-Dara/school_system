export let role = "admin";
// export let role = "student";
// export let role = "teacher";
// export let role = "parent";
export const teacherData = [
  {
    id: 1,
    teacherId: "TCH-001",
    name: "Neang Dara",
    email: "dara.sok@example.com",
    photo: "/photos/image.png",
    subjests: ["Math", "Physics"],
    classes: ["M1", "M2"],
    phone: "012345678",
    address: "123 Main St, Phnom Penh",
    faculty: "Engeering",
    department: "ITE"
  },
  {
    id: 2,
    teacherId: "TCH-002",
    name: "Chan Sreyna",
    email: "sreyna.chan@example.com",
    photo: "/photos/t6.jpg",
    subjests: ["Khmer", "History"],
    classes: ["M3", "A1"],
    phone: "098765432",
    address: "124 Main St, Phnom Penh",
    faculty: "Science",
    department: "Biology"
  },
  {
    id: 3,
    teacherId: "TCH-003",
    name: "Kim Rith",
    email: "rith.kim@example.com",
    photo: "/photos/t2.jpg",
    subjests: ["Biology", "Chemistry"],
    classes: ["A1"],
    phone: "096112233",
    address: "125 Main St, Phnom Penh",
    faculty: "Engeering",
    department: "ITE"
  },
  {
    id: 4,
    teacherId: "TCH-004",
    name: "Ly Mey",
    email: "mey.ly@example.com",
    photo: "/photos/t3.jpg",
    subjests: ["English"],
    classes: ["M1", "A1"],
    phone: "015556677",
    address: "126 Main St, Phnom Penh",
    faculty: "Science",
    department: "Biology"
  },
  {
    id: 5,
    teacherId: "TCH-005",
    name: "Sokhun Vutha",
    email: "vutha.sokhun@example.com",
    photo: "/photos/t4.jpg",
    subjests: ["Computer Science"],
    classes: ["M3", "M1"],
    phone: "017998877",
    address: "127 Main St, Phnom Penh",
    faculty: "Engeering",
    department: "ITE"
  }
];

export const studentData = [
  {
    id: 1,
    studentId: "STD-001",
    name: "Sophea Chan",
    email: "sophea.chan@example.com",
    photo: "/photos/t5.jpg",
    phone: "012345678",
    class: "M1",
    address: "123 Main St,Phnom Penh",
    faculty: "Engeering",
    department: "ITE"
  },
  {
    id: 2,
    studentId: "STD-002",
    name: "Rith Kim",
    email: "rith.kim@example.com",
    photo: "/photos/t4.jpg",
    phone: "098765432",
    class: "M2",
    address: "124 Main St,Phnom Penh",
    faculty: "Science",
    department: "Biology"
  },
  {
    id: 3,
    studentId: "STD-003",
    name: "Chea Charlie",
    email: "charlie.chea@example.com",
    photo: "/photos/t2.jpg",
    phone: "096112233",
    class: "M3",
    address: "125 Main St,Phnom Penh",
    faculty: "Science",
    department: "Biology"
  },
  {
    id: 4,
    studentId: "STD-004",
    name: "Vuthy Sok",
    email: "vuthy.sok@example.com",
    photo: "/photos/t3.jpg",
    phone: "015556677",
    class: "A1",
    address: "125 Main St,Phnom Penh",
    faculty: "Engeering",
    department: "ITE"
  },
  {
    id: 5,
    studentId: "STD-005",
    name: "Chenda Meas",
    email: "chenda.meas@example.com",
    photo: "/photos/t6.jpg",
    phone: "017998877",
    grade: "8",
    class: "8C",
    address: "125 Main St,Phnom Penh",
    faculty: "Engeering",
    department: "ITE"
  }
];
export const parentData = [
  {
    id: 1,
    name: "Sok Dara",
    students: ["Sok Chan", "Sok Kim"],
    phone: "012345678",
    photo: "/photos/image.png",
    email: "dara.sok@example.com",
    address: "Phnom Penh",
  },
  {
    id: 2,
    name: "Chan Tola",
    students: ["Chan Ly"],
    photo: "/photos/t4.jpg",
    phone: "098765432",
    email: "chan.tola@example.com",
    address: "Battambang"
  },
  {
    id: 3,
    name: "Doung Mean",
    students: ["Doung Sok", "Doung Meas"],
    phone: "096112233",
    photo: "/photos/t2.jpg",
    email: "doung.mean@example.com",
    address: "Siem Reap"
  },
  {
    id: 4,
    name: "Kim Rith",
    students: ["Kim Chan"],
    photo: "/photos/t3.jpg",
    phone: "015556677",
    email: "rith.kim@example.com",
    address: "Kandal"
  },
  {
    id: 5,
    name: "Sokhun Vutha",
    students: ["Sokhun Sok"],
    photo: "/photos/t6.jpg",
    phone: "017998877",
    email: "vutha.sokhun@example.com",
    address: "Takeo"
  }
];
export const subjectData = [
  {
    id:1,
    subjectName: "Mathematics",
    teachers: ["Sok Dara", "Vuthy Sok"]
  },
  {
    id:2,
    subjectName: "Physics",
    teachers: ["Sok Dara"]
  },
  {
    id:3,
    subjectName: "Chemistry",
    teachers: ["Kim Rith"]
  },
  {
    id:4,
    subjectName: "Biology",
    teachers: ["Kim Rith"]
  },
  {
    id:5,
    subjectName: "English",
    teachers: ["Ly Mey", "Chan Sreyna"]
  },
  {
    id:6,
    subjectName: "Khmer",
    teachers: ["Chan Sreyna"]
  },
  {
    id:7,
    subjectName: "History",
    teachers: ["Chan Sreyna"]
  },
  {
    id:8,
    subjectName: "IT",
    teachers: ["Sokhun Vutha"]
  },
  {
    id:9,
    subjectName: "Computer Science",
    teachers: ["Sokhun Vutha"]
  }
];
export const classData = [
  {
    id: 1,
    className: "M1",
    capacity: 30,
    department: "ITE",
    faculty: "Engineering",
    teacher: ["Sok Dara", "Nun Tola"],
    session: "Morning"
  },
  {
    id: 2,
    className: "M2",
    capacity: 28,
    department: "CS",
    faculty: "Engineering",
    teacher: ["Chan Sreyna", "Ly Mey"],
    session: "Afternoon"
  },
  {
    id: 3,
    className: "M3",
    capacity: 32,
    department: "Physics",
    faculty: "Science",
    teacher: ["Kim Rith"],
    session: "Morning"
  },
  {
    id: 4,
    className: "M4",
    capacity: 25,
    department: "Biology",
    faculty: "Science",
    teacher: ["Sokhun Vutha"],
    session: "Afternoon"
  },
  {
    id: 5,
    className: "M5",
    capacity: 27,
    department: "Mathematics",
    faculty: "Science",
    teacher: ["Sok Dara"],
    session: "Morning"
  },
  {
    id: 6,
    className: "M6",
    capacity: 30,
    department: "English",
    faculty: "Arts",
    teacher: ["Ly Mey", "Chan Sreyna"],
    session: "Afternoon"
  },
  {
    id: 7,
    className: "M7",
    capacity: 29,
    department: "History",
    faculty: "Arts",
    teacher: ["Chan Sreyna"],
    session: "Morning"
  },
  {
    id: 8,
    className: "M8",
    capacity: 26,
    department: "IT",
    faculty: "Engineering",
    teacher: ["Sokhun Vutha"],
    session: "Afternoon"
  },
  {
    id: 9,
    className: "M9",
    capacity: 31,
    department: "Chemistry",
    faculty: "Science",
    teacher: ["Kim Rith"],
    session: "Morning"
  },
  {
    id: 10,
    className: "M10",
    capacity: 24,
    department: "Physics",
    faculty: "Science",
    teacher: ["Sok Dara"],
    session: "Afternoon"
  }
];

export const lessonsData = [
  {
    id: 1,
    lesson: "Algebra Basics",
    subjectName: "Mathematics",
    className: "M1",
    teacher: "Mr. Sok Dara",
    session: "Morning"
  },
  {
    id: 2,
    lesson: "Introduction to Programming",
    subjectName: "Computer Science",
    className: "M2",
    teacher: "Ms. Chan Sreyna",
    session: "Afternoon"
  },
  {
    id: 3,
    lesson: "Newton's Laws of Motion",
    subjectName: "Physics",
    className: "M3",
    teacher: "Mr. Kim Rith",
    session: "Morning"
  },
  {
    id: 4,
    lesson: "Cell Structure",
    subjectName: "Biology",
    className: "M4",
    teacher: "Mr. Sokhun Vutha",
    session: "Afternoon"
  },
  {
    id: 5,
    lesson: "Linear Equations",
    subjectName: "Mathematics",
    className: "M5",
    teacher: "Mr. Sok Dara",
    session: "Morning"
  },
  {
    id: 6,
    lesson: "English Grammar: Tenses",
    subjectName: "English",
    className: "M6",
    teacher: "Ms. Ly Mey",
    session: "Afternoon"
  },
  {
    id: 7,
    lesson: "World History: Ancient Civilizations",
    subjectName: "History",
    className: "M7",
    teacher: "Ms. Chan Sreyna",
    session: "Morning"
  },
  {
    id: 8,
    lesson: "Database Fundamentals",
    subjectName: "IT",
    className: "M8",
    teacher: "Mr. Sokhun Vutha",
    session: "Afternoon"
  },
  {
    id: 9,
    lesson: "Chemical Reactions",
    subjectName: "Chemistry",
    className: "M9",
    teacher: "Mr. Kim Rith",
    session: "Morning"
  },
  {
    id: 10,
    lesson: "Kinematics Problems",
    subjectName: "Physics",
    className: "M10",
    teacher: "Mr. Sok Dara",
    session: "Afternoon"
  }
];

export const examsData = [
  {
    id: 1,
    subjectName: "Mathematics",
    className: "M1",
    teacher: "Mr. Sok Dara",
    date: "2025-01-12"
  },
  {
    id: 2,
    subjectName: "Physics",
    className: "M2",
    teacher: "Ms. Chan Sreymom",
    date: "2025-02-03"
  },
  {
    id: 3,
    subjectName: "Biology",
    className: "M3",
    teacher: "Mr. Kim Piseth",
    date: "2025-01-20"
  },
  {
    id: 4,
    subjectName: "Khmer Literature",
    className: "M4",
    teacher: "Ms. Phorn Navy",
    date: "2025-03-15"
  },
  {
    id: 5,
    subjectName: "Chemistry",
    className: "M5",
    teacher: "Mr. Lim Ratha",
    date: "2025-02-28"
  },
  {
    id: 6,
    subjectName: "History",
    className: "M6",
    teacher: "Ms. Sokheng",
    date: "2025-01-10"
  },
  {
    id: 7,
    subjectName: "English",
    className: "M7",
    teacher: "Mr. John Smith",
    date: "2025-03-01"
  },
  {
    id: 8,
    subjectName: "Geography",
    className: "M8",
    teacher: "Ms. Mean Rotha",
    date: "2025-02-17"
  },
  {
    id: 9,
    subjectName: "Computer Science",
    className: "M9",
    teacher: "Mr. Dara Sen",
    date: "2025-04-10"
  },
  {
    id: 10,
    subjectName: "Physical Education",
    className: "M10",
    teacher: "Coach Vutha",
    date: "2025-01-25"
  }
];

export const assignmentsData = [
  {
    id: 1,
    subjectName: "Mathematics",
    className: "M1",
    teacher: "Mr. Sok Dara",
    dueDate: "2025-12-10"
  },
  {
    id: 2,
    subjectName: "Computer Science",
    className: "M2",
    teacher: "Ms. Chan Sreyna",
    dueDate: "2025-12-11"
  },
  {
    id: 3,
    subjectName: "Physics",
    className: "M3",
    teacher: "Mr. Kim Rith",
    dueDate: "2025-12-12"
  },
  {
    id: 4,
    subjectName: "Biology",
    className: "M4",
    teacher: "Mr. Sokhun Vutha",
    dueDate: "2025-12-13"
  },
  {
    id: 5,
    subjectName: "Mathematics",
    className: "M5",
    teacher: "Mr. Sok Dara",
    dueDate: "2025-12-14"
  },
  {
    id: 6,
    subjectName: "English",
    className: "M6",
    teacher: "Ms. Ly Mey",
    dueDate: "2025-12-15"
  },
  {
    id: 7,
    subjectName: "History",
    className: "M7",
    teacher: "Ms. Chan Sreyna",
    dueDate: "2025-12-16"
  },
  {
    id: 8,
    subjectName: "IT",
    className: "M8",
    teacher: "Mr. Sokhun Vutha",
    dueDate: "2025-12-17"
  },
  {
    id: 9,
    subjectName: "Chemistry",
    className: "M9",
    teacher: "Mr. Kim Rith",
    dueDate: "2025-12-18"
  },
  {
    id: 10,
    subjectName: "Physics",
    className: "M10",
    teacher: "Mr. Sok Dara",
    dueDate: "2025-12-19"
  }
];

export const resultsData = [
  {
    id: 1,
    subjectName: "Mathematics",
    student: "Sok Chanthorn",
    score: 89,
    teacher: "Mr. Sok Dara",
    class: "M1",
    date: "2025-02-10"
  },
  {
    id: 2,
    subjectName: "English",
    student: "Ly Sreynich",
    score: 92,
    teacher: "Ms. Linda",
    class: "M1",
    date: "2025-02-11"
  },
  {
    id: 3,
    subjectName: "Biology",
    student: "Vann Rith",
    score: 76,
    teacher: "Mr. Kim Piseth",
    class: "M3",
    date: "2025-02-09"
  },
  {
    id: 4,
    subjectName: "Chemistry",
    student: "Chan Sokha",
    score: 88,
    teacher: "Mr. Lim Ratha",
    class: "M5",
    date: "2025-02-12"
  },
  {
    id: 5,
    subjectName: "History",
    student: "Srey Pov",
    score: 81,
    teacher: "Ms. Sokheng",
    class: "M6",
    date: "2025-02-08"
  },
  {
    id: 6,
    subjectName: "Physics",
    student: "Dara Rith",
    score: 95,
    teacher: "Ms. Chan Sreymom",
    class: "M2",
    date: "2025-02-10"
  },
  {
    id: 7,
    subjectName: "Khmer Literature",
    student: "Men Sophea",
    score: 90,
    teacher: "Ms. Phorn Navy",
    class: "M4",
    date: "2025-02-10"
  }
];

export const eventsData = [
  {
    id: 1,
    title: "Science Fair",
    class: "NICC",
    startTime: "2025-01-15 08:00 AM",
    teacher: "Mr. Sok Dara",
    endTime: "2025-01-15 11:00 AM"
  },
  {
    id: 2,
    title: "Mathematics Workshop",
    class: "Smart room",
    startTime: "2025-01-20 09:00 AM",
    teacher: "Ms. Chan Sreymom",
    endTime: "2025-01-20 12:00 PM"
  },
  {
    id: 3,
    title: "Sports Day",
    class: "NICC",
    startTime: "2025-02-02 07:30 AM",
    teacher: "Coach Vutha",
    endTime: "2025-02-02 04:00 PM"
  },
];
export const announcementsData = [
  {
    id: 1,
    title: "School Reopening",
    class: "NICC",
    date: "2025-01-10",
    action: "View"
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    class: "NICC",
    date: "2025-01-15",
    action: "View"
  },
  {
    id: 3,
    title: "Sports Day",
    class: "Smart classroom",
    date: "2025-02-01",
    action: "View"
  },
];
export const attendanceData = [
  {
    id: 1,
    student: "Sok Dara",
    className: "M1",
    department: "ITE",
    faculty: "Engineering",
    session: "Morning",
    date: "2025-12-01",
    status: "Present",
    teacher: "Ms. Chan Sreymom",
    remarks: "None"
  },
  {
    id: 2,
    student: "Chan Sreyna",
    className: "M2",
    department: "CS",
    faculty: "Engineering",
    session: "Afternoon",
    date: "2025-12-01",
    status: "Absent",
    teacher: "Ly Mey",
    remarks: "Sick"
  },
  {
    id: 3,
    student: "Kim Rith",
    className: "M3",
    department: "Physics",
    faculty: "Science",
    session: "Morning",
    date: "2025-12-01",
    status: "Late",
    teacher: "Kim Rith",
    remarks: "Traffic"
  },
  {
    id: 4,
    student: "Ly Mey",
    className: "M4",
    department: "Biology",
    faculty: "Science",
    session: "Afternoon",
    date: "2025-12-01",
    status: "Present",
    teacher: "Sokhun Vutha",
    remarks: "None"
  },
  {
    id: 5,
    student: "Sokhun Vutha",
    className: "M5",
    department: "Mathematics",
    faculty: "Science",
    session: "Morning",
    date: "2025-12-01",
    status: "Present",
    teacher: "Sok Dara",
    remarks: "None"
  },
  {
    id: 6,
    student: "Phorn Navy",
    className: "M6",
    department: "English",
    faculty: "Arts",
    session: "Afternoon",
    date: "2025-12-01",
    status: "Absent",
    teacher: "Ly Mey",
    remarks: "Family reason"
  },
  {
    id: 7,
    student: "Sokheng",
    className: "M7",
    department: "History",
    faculty: "Arts",
    session: "Morning",
    date: "2025-12-01",
    status: "Present",
    teacher: "Chan Sreyna",
    remarks: "None"
  },
  {
    id: 8,
    student: "John Smith",
    className: "M8",
    department: "IT",
    faculty: "Engineering",
    session: "Afternoon",
    date: "2025-12-01",
    status: "Late",
    teacher: "Sokhun Vutha",
    remarks: "Traffic"
  },
  {
    id: 9,
    student: "Kim Piseth",
    className: "M9",
    department: "Chemistry",
    faculty: "Science",
    session: "Morning",
    date: "2025-12-01",
    status: "Present",
    teacher: "Kim Rith",
    remarks: "None"
  },
  {
    id: 10,
    student: "Ly Chan",
    className: "M10",
    department: "Physics",
    faculty: "Science",
    session: "Afternoon",
    date: "2025-12-01",
    status: "Absent",
    teacher: "Sok Dara",
    remarks: "Sick"
  }
];

export const facultiesData = [
  {
    id: 1,
    name: "Science",
    description: "Faculty of Science",
    head: "Dr. Sok Dara",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-10"
  },
  {
    id: 2,
    name: "Arts",
    description: "Faculty of Arts and Humanities",
    head: "Ms. Chan Sreymom",
    createdAt: "2025-01-02",
    updatedAt: "2025-01-12"
  }
];
export const departmentsData = [
  {
    id: 1,
    name: "Physics",
    faculty: "Science", // Science
    head: "Ms. Chan Sreymom",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-10"
  },
  {
    id: 2,
    name: "Chemistry",
    faculty: "Science",
    head: "Mr. Lim Ratha",
    createdAt: "2025-01-02",
    updatedAt: "2025-01-12"
  },
  {
    id: 3,
    name: "ITE",
    faculty: "Engeering",
    head: "Ms. Phorn Navy",
    createdAt: "2025-01-03",
    updatedAt: "2025-01-13"
  }
];
export const adminReportsData = [
  {
    id: 1,
    reporter: "Ms. Chan Sreymom",
    reporterRole: "teacher",
    subject: "Student Absence",
    content: "Student Sok Dara was absent today due to illness.",
    targetClass: "Grade 10 - A",
    targetStudent: "Sok Dara",
    date: "2025-12-05 09:00",
    status: "Pending",
    priority: "Medium"
  },
  {
    id: 2,
    reporter: "Parent Sokheng",
    reporterRole: "parent",
    subject: "Request for Leave",
    content: "My child will be absent tomorrow for a family event.",
    targetClass: "Grade 8 - B",
    targetStudent: "Kim Piseth",
    date: "2025-12-05 07:30",
    status: "Pending",
    priority: "Low"
  },
  {
    id: 3,
    reporter: "Mr. Lim Ratha",
    reporterRole: "teacher",
    subject: "Classroom Issue",
    content: "Projector in classroom 11B is not working.",
    targetClass: "Grade 11 - B",
    targetStudent: "",
    date: "2025-12-04 14:00",
    status: "Reviewed",
    priority: "High"
  },
  {
    id: 4,
    reporter: "Student Phorn Navy",
    reporterRole: "student",
    subject: "Lost Item",
    content: "I lost my textbook in the classroom today.",
    targetClass: "Grade 12 - A",
    targetStudent: "Phorn Navy",
    date: "2025-12-05 15:00",
    status: "Resolved",
    priority: "Low"
  }
];
export const calenderEvents = [
  {
    title: "Math",
    start: new Date(2025, 9, 16, 8, 0),
    end: new Date(2025, 9, 16, 8, 45),
  },
  {
    title: "English",
    start: new Date(2025, 7, 12, 8, 0),
    end: new Date(2025, 7, 12, 8, 45),
  },
];

