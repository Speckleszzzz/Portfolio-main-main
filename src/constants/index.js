import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    figma,
    starbucks,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  export const services = [
    {
      title: "Game Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Unity Developer",
      company_name: "Back to the future",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov-2023",
      points: [
        "Participated in an international level hackathon (Flow Hackathon) to showcase innovation and creativity in game development using blockchain technology.",
        "Specializing in the development of isometric games using Unity Engine and Flow blockchain technology.",
        "Collaborating closely with a dedicated team of friends proficient in animation, design, and blockchain integration to deliver immersive gaming experiences.",
        "Implementing responsive design principles and ensuring seamless cross-browser compatibility to enhance accessibility and user engagement.",
      ],
    },
    {
      title: "Open-Weaver No Code Platform",
      company_name: "Otaku Hub",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov-2023",
      points: [
        "Developed a user friendOtaku Hub, leveraging the OpenWeaver platform to craft a user-friendly anime website.",
        "Engineered a responsive front-end design coupled with a robust backend infrastructure utilizing OpenWeaver tools.",
        "Integrated advanced AI functionalities to dynamically generate content descriptions and implement a personalized recommendation system based on user preferences.",
        "Achieved recognition as the runner-up in a prestigious hackathon counducted in Loyola-Icam College of Engineering and Technology, securing a cash prize of 9000 INR for the innovative implementation of Otaku Hub.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Cafe Simulator",
      description:
        "A Unity Engine Simulator based game, where the player finds that his grand father owned a cafe, We find the cafe where we rebuild it and run a top class cafe",
      tags: [
        {
          name: "Unity Engine",
          color: "blue-text-gradient",
        },
        {
          name: "C-Sharp",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Anime Hub",
      description:
        "Mobile application which connects Anime watchers and Manga reader in a interactive platform where they share and view content with artificial intelegence Algorithms",
      tags: [
        {
          name: "react Native",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "An appealing portfolio, crafted with Three.js, showcases my projects, achievements, while also highlighting my front-end skills effectively.",
      tags: [
        {
          name: "Three.js",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "V-Tuber Hub",
      description:
        "Developed a front-end product tailored for Vtubers and 3D model designers/animators, fostering seamless collaboration and connection between the two communities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { technologies, experiences, projects };