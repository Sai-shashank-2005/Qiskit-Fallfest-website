export type Session = {
  id: string;
  day: 1 | 2;
  start: string;
  end: string;
  title: string;
};

export const sessions: Session[] = [
  // Day 1
  { id: "d1-s1", day: 1, start: "09:00", end: "09:30", title: "Registration & Breakfast" },
  { id: "d1-s2", day: 1, start: "09:30", end: "10:30", title: "Introduction to Quantum Computing" },
  { id: "d1-s3", day: 1, start: "10:45", end: "12:15", title: "Mathematical Foundation (Linear Algebra, Complex Numbers)" },
  { id: "d1-s4", day: 1, start: "13:15", end: "14:45", title: "Intro to Quantum Computation" },
  { id: "d1-s5", day: 1, start: "15:00", end: "16:30", title: "Quantum Circuits & Gates" },
  { id: "d1-s6", day: 1, start: "16:45", end: "17:30", title: "Hands-on Lab with Qiskit" },
  { id: "d1-s7", day: 1, start: "17:30", end: "18:00", title: "Q&A / Discussion" },
  
  // Day 2
  { id: "d2-s1", day: 2, start: "09:00", end: "09:30", title: "Recap & Briefing" },
  { id: "d2-s2", day: 2, start: "09:30", end: "12:30", title: "Hackathon – Build with Qiskit" },
  { id: "d2-s3", day: 2, start: "12:30", end: "13:30", title: "Lunch Break" },
  { id: "d2-s4", day: 2, start: "13:30", end: "16:30", title: "Hackathon – Continue Building" },
  { id: "d2-s5", day: 2, start: "16:00", end: "17:30", title: "Project Presentations" },
  { id: "d2-s6", day: 2, start: "17:30", end: "18:30", title: "Prize Distribution & Closing" },
  { id: "d2-s7", day: 2, start: "18:30", end: "19:00", title: "Networking & Group Photos" },
];
