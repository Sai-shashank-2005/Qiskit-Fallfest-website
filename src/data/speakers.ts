export type Speaker = {
  id: string;
  name: string;
  role: string;
  organization: string;
  image: string;
  linkedin?: string;
};

export const speakers: Speaker[] = [
  {
    id: "sp1",
    name: "Jayakumar Vaithiyashankar, PhD",
    role: "Founder / CEO",
    organization: "Anuthantra | IBM Quantum Educator",
    image: "/speakers/speaker.png",
    linkedin: "https://www.linkedin.com/in/jayakumar-vaithiyashankar/"
  }
];
