import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    creator,
    tailwind,
    nodejs,
    mongodb,
    git,
    starbucks,
    tesla,
    shopify,
    placeKeeper,
    Travel,
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
    {
      id: "Resume",
      title: "Resume",
    },
    {
      id: "LinkedIn",
      title: "LinkedIn",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "FrontEnd Developer",
      icon: mobile,
    },
    {
      title: "BackEnd Developer",
      icon: backend,
    },
    {
      title: "ReactNative Developer",
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
      name: "git",
      icon: git,
    },
  
  ];
  
  const experiences = [
    {
      title: "Internship",
      company_name: "Circl",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2023 _ Present",
      points: [
        "Developing a mobile e-commerce application using React Native and Expo,ensuring seamless user experiences..",
        "Integrated Firebase for real-time data updates and user authentication",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Manual Tester",
      company_name: "XTRABONE IT SOLUTIONS PVT LTD",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mar 2020 _ Oct 2022",
      points: [
        "Expertise in test case identification, design, and preparation for thorough testcoverage.",
        "Proficiency in manual test execution across various testing types forcomprehensive quality assurance.",
        "Efficient test case management using JIRA for improved organization and trackingof testing activities.",
        "Solid understanding of SDLC, Software Test Life Cycle, and Defect Life Cycle foreffective coordination with development teams.",
      ],
    },
    {
      title: "Project Engineer",
      company_name: "WIPRO TECHNOLOGIES",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2015 _ Jun 2017",
      points: [
        "Demonstrated proficiency in hardware knowledge and technical support, ensuringsmooth computer system functioning.",
        "Installed and troubleshooted Outlook and Outlook Express, minimizing email disruptions.",
        "Conducted maintenance and assembly for optimized system performance.",
        "Strengthened security through antivirus installation and updates. Provided efficientremote support using TeamViewer, Bomgar, and Skype.",
      ],
    },
     ];
  

  const projects = [
    {
      name: "My Placekeeper",
      description:
        "My PlaceKeeper is a cutting-edge location-based web application designed to revolutionize how users save, organize, and cherish their favourite places.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: placeKeeper,
      source_code_link: "https://myplacekeeper.netlify.app/",
    },
    {
      name: "Travel Tales Hub",
      description:
      "Welcome to Travel Tales Hub – your go-to web-based platform to discover enchanting tourist destinations across Europe.Join us in exploring the wonders of Europe.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Travel,
      source_code_link: "https://travel-tales-hub.netlify.app/",
    },
        ];

      

  
  export { services, technologies, experiences, projects };