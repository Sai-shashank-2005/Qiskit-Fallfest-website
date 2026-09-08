export type Session = {
  id: string;
  day: 1 | 2;
  start: string;
  end: string;
  title: string;
};

export const sessions: Session[] = [
  // Day 1
  { id: "d1-s1", day: 1, start: "09:00 AM", end: "09:30 AM", title: "Registration and Check-in" },
  { id: "d1-s2", day: 1, start: "09:30 AM", end: "10:00 AM", title: "Opening Ceremony" },
  { id: "d1-s3", day: 1, start: "10:00 AM", end: "10:30 AM", title: "Event Orientation" },
  { id: "d1-s4", day: 1, start: "10:30 AM", end: "11:15 AM", title: "Quantum Computing Fundamentals - I" },
  { id: "d1-s5", day: 1, start: "11:15 AM", end: "11:30 AM", title: "Break" },
  { id: "d1-s6", day: 1, start: "11:30 AM", end: "12:30 PM", title: "Quantum Computing Fundamentals - II" },
  { id: "d1-s7", day: 1, start: "12:30 PM", end: "01:30 PM", title: "Lunch" },
  { id: "d1-s8", day: 1, start: "01:30 PM", end: "02:15 PM", title: "Introduction to Qiskit" },
  { id: "d1-s9", day: 1, start: "02:15 PM", end: "03:30 PM", title: "Hands-on Workshop - I" },
  { id: "d1-s10", day: 1, start: "03:30 PM", end: "03:45 PM", title: "Break" },
  { id: "d1-s11", day: 1, start: "03:45 PM", end: "04:45 PM", title: "Hands-on Workshop - II" },
  { id: "d1-s12", day: 1, start: "04:45 PM", end: "05:15 PM", title: "Day 1 Review and Discussion" },
  
  // Day 2
  { id: "d2-s1", day: 2, start: "09:30 AM", end: "10:00 AM", title: "Day 1 Recap and Orientation" },
  { id: "d2-s2", day: 2, start: "10:00 AM", end: "11:00 AM", title: "Advanced Quantum Computing" },
  { id: "d2-s3", day: 2, start: "11:00 AM", end: "11:15 AM", title: "Break" },
  { id: "d2-s4", day: 2, start: "11:15 AM", end: "12:30 PM", title: "Quantum Algorithms" },
  { id: "d2-s5", day: 2, start: "12:30 PM", end: "01:30 PM", title: "Lunch" },
  { id: "d2-s6", day: 2, start: "01:30 PM", end: "02:45 PM", title: "Advanced Qiskit Operations - I" },
  { id: "d2-s7", day: 2, start: "02:45 PM", end: "03:30 PM", title: "Advanced Qiskit Operations - II" },
  { id: "d2-s8", day: 2, start: "03:30 PM", end: "03:45 PM", title: "Break" },
  { id: "d2-s9", day: 2, start: "03:45 PM", end: "04:30 PM", title: "Q&A / Ask the Experts" },
  { id: "d2-s10", day: 2, start: "04:30 PM", end: "05:15 PM", title: "Community Interaction and Closing" },
];
