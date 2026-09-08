export type Session = {
  id: string;
  day: 1 | 2;
  start: string;
  end: string;
  title: string;
};

export const sessions: Session[] = [
  // Day 1
  { id: "d1-s1", day: 1, start: "10:00 AM", end: "11:00 AM", title: "Introduction" },
  { id: "d1-s2", day: 1, start: "11:00 AM", end: "11:15 AM", title: "Tea Break" },
  { id: "d1-s3", day: 1, start: "11:15 AM", end: "01:00 PM", title: "Intro to Quantum Computation & Basic Maths Foundation" },
  { id: "d1-s4", day: 1, start: "01:00 PM", end: "02:00 PM", title: "Lunch Break" },
  { id: "d1-s5", day: 1, start: "02:00 PM", end: "04:00 PM", title: "Hands-on with Qiskit Composer" },
  { id: "d1-s6", day: 1, start: "04:00 PM", end: "05:30 PM", title: "Optional Q&A Session" },
  
  // Day 2
  { id: "d2-s1", day: 2, start: "10:00 AM", end: "11:30 AM", title: "Gamified Learning & Revision" },
  { id: "d2-s2", day: 2, start: "11:30 AM", end: "01:00 PM", title: "Guest Speaker: Quantum Algorithms" },
  { id: "d2-s3", day: 2, start: "01:00 PM", end: "02:00 PM", title: "Lunch Break" },
  { id: "d2-s4", day: 2, start: "02:00 PM", end: "06:00 PM", title: "Interactive Challenges & Hands-on Experience" },
];
