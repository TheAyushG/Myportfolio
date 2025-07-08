// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import skitlogo from './assets/education_logo/skit_logo.png'

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png'; //d
import csprepLogo from './assets/work_logo/cs_prep.png'; //b
import movierecLogo from './assets/work_logo/movie_rec.png'; //e
import npmLogo from './assets/work_logo/npm.png'; //f
import cmLogo from './assets/work_logo/cm.png'; //a
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';//g
import emsLOGO from './assets/work_logo/EMSLOGO.png' //c
import swiggyLOGO from './assets/work_logo/swiggyClone.png' //c
import ExpenseTrackerLOGO from './assets/work_logo/Expense Tracker1.png'
import todoLOGO from './assets/work_logo/todo.png'





export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Mongo DB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "",
      company: " ",
      date: "",
      desc: "",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "",
      company: "",
      date: "",
      desc: "",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "",
      company: "",
      date: "",
      desc: "",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: skitlogo,
      school: "Final Year Student at swami keshvanand institute of technology, jaipur",
      date: "Nov 2022 - 2026",
      grade: "",
      desc: "I am a final-year Computer Science student at SKIT College with a strong foundation in programming, software development, and core CS principles. I’ve completed key courses including Data Structures, Algorithms, OOP, DBMS, Web Development, and Software Engineering. Active participation in workshops and technical events has further strengthened my skills and contributed to my professional growth.",
      degree: "Bachelor of Technology in Computer Science and Engineering",
    },
  ];
  
  export const projects = [

    {
      id: 0,
      title: "ToDo List App",
      description:
        "This is a responsive Todo app that enables users to add, edit, delete, and mark tasks as complete, built with a clean UI to streamline daily productivity.",
      image: todoLOGO,
      tags: ["React js", "Tailwind CSS"],
      github: "https://github.com/TheAyushG/ToDo",
      webapp: "https://to-do-five-vert-92.vercel.app/",
    },

    {
      id: 1,
      title: "Expense Tracker",
      description:
        "A simple and intuitive application to record, categorize, and monitor daily expenses, helping users manage their finances effectively in real time.",
      image: ExpenseTrackerLOGO,
      tags: [ "React JS", "styled compenent"],
      github: "https://github.com/TheAyushG/Expense-Tracker",
      webapp: "https://expense-tracker-eosin-pi.vercel.app/",
    },

    {
      id: 2,
      title: "Employee Management System",
      description:
        "I built an Employee Management System using React, where an admin can assign tasks to employees. The application uses localStorage to manage data and includes task status tracking with categories like New Task, Accepted Task, Completed Task, and Failed Task.",
      image: emsLOGO,
      tags: [ "React JS", "API"],
      github: "https://github.com/TheAyushG/ems_project",
      webapp: "ems-project-two.vercel.app",
    },
    
  ];