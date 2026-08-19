export type Speaker = {
  id: string;
  name: string;
  role: string;
  organization: string;
  image: string;
  linkedin?: string;
  bio?: string;
};

export const speakers: Speaker[] = [
  {
    id: "sp1",
    name: "Jayakumar Vaithiyashankar, PhD",
    role: "Founder / CEO - Anuthantra ⚛ | IBM Quantum Educator",
    organization: "Anuthantra | IBM",
    image: "/speakers/speaker.png",
    linkedin: "https://www.linkedin.com/in/jayakumar-vaithiyashankar/",
    bio: "Founder & CEO of Anuthantra Private Limited and an IBM & AWS Accredited Quantum Educator. Specializing in applied quantum computing and skill development, conducting over 350+ quantum trainings, workshops, and seminars across prestigious institutions in India. Committed to the IBM Qiskit Advocates Program to nurture practical expertise and advance the quantum field globally."
  }
];
