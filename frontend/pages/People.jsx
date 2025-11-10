import React from 'react'
import Navbar from './Navbar';
import Section from '@/components/ui/section';

const phd = [
  {
    name: "Anurag Kumar",
    image: "/images/anurag.jpg",
    title: "High Performance Fibers",
    description: "Joint Doctoral Student - Deakin University Australia",
    coSupervisor: "Dr. Maryam Naebe (Deakin University)",
  },
  {
    name: "Mohammed Arif Khan",
    image: "/images/arif.jpg",
    title: "Modulated dual drug release from nanocellulose for mediated dressing",
    description: "Project Associate",
  },
  {
    name: "Aszad Alam",
    image: "/images/aszad.jpg",
    title: "Actuated drug delivery systems",
    description: "IITH-SUT joint doctoral student",
    coSupervisor: "Dr. Aimin Yu (Associate Professor, SUT)",
  },
  {
    name: "Peddapappanagari Kalyani",
    image: "/images/PPG_Kalyani.jpg",
    title:
      "Bacterial cellulose composites and in situ modifications for food packaging and drug delivery",
    sponsor: "Waycool Pvt. Ltd",
  },
  {
    name: "Samuel Kaki",
    image: "/images/samuel.jpg",
    title:
      "Tunable Nanofibrous depth filters: design and application in air and liquid filtration",
    description: "Interdisciplinary joint student",
    coSupervisor: "Dr. Seetha N.",
  },
  {
    name: "Sukesh Kumar",
    image: "/images/sukesh.jpg",
    title: "Conducting polymer-based actuators and sensors",
    description: "IITH-SUT joint doctoral student",
    coSupervisor: "Dr. Aimin Yu (Associate Professor, SUT)",
  },
  {
    name: "Najathulla BC",
    image: "/images/najathulla.jpg",
    title: "Conducting composites for actuator, drug delivery",
    coSupervisor: "Dr. Atul S. Deshpande",
  },
  {
    name: "Vikram Kishore Bharti",
    image: "/images/vikram.jpg",
    title: "Prime Minister Research Fellow",
    description: "Bacterial Cellulose derived carbon for energy storage",
    coSupervisor: "Dr. Chandra Shekhar Sharma",
  },
];


const mtech = [
  {
    name: "Partha Pratim Das",
    image: "/images/partha.jpg",
    title: "Biodegradable food packaging for fresh produce: Shelf life extension",
  },
  {
    name: "Ashish Priyam Goswami",
    image: "/images/ashish.jpg",
    title:
      "Bacterial cellulose based functionalized carbon nano fibres as electrode for metal sulphur batteries",
    coSupervisor: "Dr. Chandra S. Sharma",
  },
  {
    name: "Saritha",
    image: "/images/saritha.jpg",
    title:
      "Microfluidics aided patterned nanofibrous materials based on bacterial cellulose",
    coSupervisor: "Dr. Suhanya Duraiswamy",
  },
  {
    name: "Aditya Burla",
    image: "/images/aditya.jpg",
    title: "Antifouling materials based on high entropy alloys",
    coSupervisor: "Dr. Mayur Vaidya",
  },
  {
    name: "Apurva Anjan",
    image: "/images/apurva.jpg",
    title: "Bacterial cellulose-based batteries",
    coSupervisor: "Dr. Chandra S. Sharma",
  },
];

const alumni = [
  {
    name: "Dr. Siju C. R.",
    contribution: "Post Doctoral",
  },
  {
    name: "Dr. Shivakalyani Adepu",
    contribution: "Post Doctoral (Drug delivery, antimicrobial materials)",
    current:
      "Project Investigator, BIRAC Biotechnological Ignition Grant Incubated i-TIC, IIT Hyderabad",
  },
  {
    name: "Dr. Urbashi Mahanta",
    contribution:
      "Ph.D (Wettability tuning, Hydrophobic coatings, antimicrobial surfaces)",
  },
  {
    name: "Dr. Illa Mani Pujitha",
    contribution: "Ph.D (Bacterial cellulose based carbon anode for lithium ion batteries)",
    current: "Institute Post-doctoral Fellow, IIT Bombay",
  },
  {
    name: "Pintu Maity",
    contribution: "M.Tech (conducting polymer based monolithic actuators)",
    current: "Doctoral candidate, IIT Kharagpur",
  },
  {
    name: "Dr. Divya Anand",
    contribution: "M.Tech (conducting composites)",
    current:
      "Technological Environment Maintenance Specialist, Nippon Paint Holdings Co Ltd, Japan",
  },
  {
    name: "Dr. Manohar Kakunuri",
    contribution: "Post-Doc Fellow (electrospun materials for energy, health & environment)",
    current:
      "Assistant Professor, Dept of Chemical Engineering, National Institute of Technology, Warangal",
  },
  {
    name: "Mr. Palash Chandra Maity",
    contribution: "M.Tech (conducting composites)",
    current: "Pursuing PhD at IIT Roorkee",
  },
  {
    name: "Mr. Debabrata Palai",
    contribution: "M.Tech (depth filters)",
    current: "Pursuing PhD at Tokyo Institute of Technology",
  },
  {
    name: "Ms. Anju P. V.",
    contribution: "M.Tech (In situ composites for scaffolds, packaging, filtration)",
    current: "Offered PhD at Hokkaido University",
  },
  {
    name: "Mukul Choudhary",
    contribution: "M.Tech (Microfluidic devices based on bacterial cellulose)",
  },
  {
    name: "Aditya Burla",
    contribution: "M.Tech (Antifouling materials based on high entropy alloys)",
  },
  {
    name: "Apurva Anjan",
    contribution: "M.Tech (Bacterial cellulose-based batteries)",
  },
];

const collaborators = [
  {
    name: "Dr. Atul S. Deshpande",
    image: "/images/atul.jpg",
    title:
      "Associate Professor, Dept. of Materials Science and Metallurgical Engineering, IIT Hyderabad",
  },
  {
    name: "Dr. Chandra Shekhar Sharma",
    image: "/images/chandrashekhar.jpg",
    title: "Associate Professor, Dept. of Chemical Engineering, IIT Hyderabad",
  },
  {
    name: "Dr. Arunasree M. Kalle",
    image: "/images/unkown.jpg",
    title: "Associate Professor, School of Life Sciences, University of Hyderabad",
  },
  {
    name: "Dr. Mayur Vaidya",
    image: "/images/mayur.jpg",
    title:
      "Assistant Professor, Dept. of Materials Science and Metallurgical Engineering, IIT Hyderabad",
  },
  {
    name: "Dr. Aimin Yu",
    image: "/images/unkown.jpg",
    title:
      "Associate Professor, Dept. of Chemistry and Biotechnology, Swinburne University of Technology, Australia",
  },
  {
    name: "Dr. Veda Krishnan",
    image: "/images/unkown.jpg",
    title:
      "Scientist, Biochemistry Department, Indian Agricultural Research Institute, New Delhi",
  },
  {
    name: "Prof. Stephen Eichhorn",
    image: "/images/stephen.jpg",
    title: "Bristol, Composites Institute, University of Bristol, UK",
  },
  {
    name: "Dr. Bharat B. Panigrahi",
    image: "/images/unkown.jpg",
    title:
      "Associate Professor, Dept. of Materials Science And Metallurgical Engineering, IIT Hyderabad",
  },
  {
    name: "Prof. Seeram Ramakrishna",
    image: "/images/unkown.jpg",
    title: "Dept. of Mechanical Engineering, National University of Singapore",
  },
  {
    name: "Prof. Peter Kingshott",
    image: "/images/unkown.jpg",
    title: "Professor of Surface Engineering, Swinburne University, Australia",
  },
  {
    name: "Prof. Stevan Langford",
    image: "/images/unkown.jpg",
    title:
      "Professor of Chemistry, Associate Dean Research, School of Science, Computing and Engineering Technologies, Swinburne University of Technology",
  },
  {
    name: "Dr. Seetha N",
    image: "/images/unkown.jpg",
    title: "Associate Professor, Department of Civil Engineering, IIT Hyderabad",
  },
  {
    name: "Dr. Suhanya Duraiswamy",
    image: "/images/unkown.jpg",
    title:
      "Assistant Professor, Department of Chemical Engineering, IIT Hyderabad",
  },
];


const People = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Section title="PhD" people={phd} />
        <Section title="M.Tech" people={mtech} />
        <Section title="Alumni" people={alumni} />
        <Section title="Collaborators" people={collaborators} />
      </div>
    </>
  );
};

export default People;