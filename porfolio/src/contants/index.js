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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  import Lemonaed from '../assets/Lemonaed.png'
  import TravelBuddy from '../assets/Travel Buddy.png'
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
  
 
  const projects = [
    {
      name: "Lemonaed",
      description:
        "Lemonaed, my flagship e-commerce venture, embodies the intersection of vintage aesthetics and cutting-edge technology. This immersive online store, powered by the robust MERN stack (MongoDB, Express.js, React, and Node.js), ensures a secure and seamless shopping experience. With JWT (JSON Web Token) for user authentication and Stripe for efficient checkout, Lemonaed showcases my commitment to web development excellence and user-centric design.",
      tags: [
        {
          name: "react",
          color: "bg-gradient-to-r from-blue-500 to-blue-700",
        },
        {
          name: "mongodb",
          color: "bg-gradient-to-r from-green-400 to-green-600",
        },
        {
          name: "tailwind",
          color: "bg-gradient-to-r from-sky-400 to-sky-600",
        },
        {
          name: "Express",
          color: "bg-gradient-to-r from-gray-100 to-gray-300",
        },
        {
          name: "Node Js",
          color: "bg-gradient-to-r from-amber-200 to-amber-400",
        },
        {
          name: "Stripe",
          color: "bg-gradient-to-r from-orange-400 to-orange-600",
        },
      ],
      image: Lemonaed,
      userCredentials : { email: "user@gmail.com", password: "User@1234" },
      AdminCredentials : { email: "admin@gmail.com", password: "Admin@1234" }, 
      source_code_link: "https://github.com/Pratham-Panthari/Lemonaed",
      liveSite: "https://lemonaed-client.onrender.com/"
    },
    {
      name: "Travel Buddy",
      description:
        "Introducing Travel Buddy, the user-friendly hotel booking application powered by the MERN stack and secured with JWT authentication. Our platform simplifies the process of finding and reserving accommodations in popular cities, offering a seamless experience for travelers to browse curated hotel selections and make informed reservations, whether it's a quick weekend escape or an extended vacation. Travel Buddy is your trusted partner for hassle-free hotel bookings.",
      tags: [
        {
          name: "react",
          color: "bg-gradient-to-r from-blue-500 to-blue-700",
        },
        {
          name: "mongodb",
          color: "bg-gradient-to-r from-green-400 to-green-600",
        },
        {
          name: "tailwind",
          color: "bg-gradient-to-r from-sky-400 to-sky-600",
        },
        {
          name: "Express",
          color: "bg-gradient-to-r from-gray-100 to-gray-300",
        },
        {
          name: "Node Js",
          color: "bg-gradient-to-r from-amber-200 to-amber-400",
        },
      ],
      image: TravelBuddy,
      userCredentials : { email: "user@gmail.com", password: "User@1234" },
      source_code_link: "https://github.com/Pratham-Panthari/travel-buddy-backend",
      liveSite: "https://travel-buddy-client.onrender.com/"
    },
  ];
  
  export { services, technologies, projects };