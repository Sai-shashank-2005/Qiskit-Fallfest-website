export type Speaker = {
  id: string;
  name: string;
  role: string;
  organization: string;
  image: string;
};

export const speakers: Speaker[] = [
  {
    id: "sp1",
    name: "Dr. Sarah Kaiser",
    role: "Research Scientist",
    organization: "IBM Quantum",
    image: "/speakers/sarah.jpg"
  },
  {
    id: "sp2",
    name: "Dr. Jay Gambetta",
    role: "Fellow",
    organization: "IBM Quantum",
    image: "/speakers/jay.jpg"
  },
  {
    id: "sp3",
    name: "Prof. M. Sasikumar",
    role: "Professor",
    organization: "IIT Madras",
    image: "/speakers/sasikumar.jpg"
  }
];
