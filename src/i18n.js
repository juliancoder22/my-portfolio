// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      about: "About",
      contact: "Contact",
      email: "Email",
      websiteCreated: "Website Created by",
      scroll: "[SCROLL]",
      hey: "Hey! I'm",
      profession: "I'm a",
      letsTalk: "Let’s talk",
      name: "Julian Aquino",
      professionTitle: "web developer",
      whatCanIDo: "What can I do?",
      frontend: "Frontend",
      backend: "Backend",
      frontendDescription:
        "Proficient in React, Redux, and Redux Toolkit for building interactive and dynamic user interfaces. Experience using TypeScript to enhance code frontend solidity and scalability. Experience with testing frameworks like Jest or Vitest for comprehensive frontend testing.",
      backendDescription:
        "Proficient in Node.js, Express, and databases like MongoDB and PostgreSQL for creating robust backend services. Familiar with GraphQL for efficient data querying and RESTful API design.",
      languages: "Languages",
      frameworks: "Frameworks",
      tools: "Tools",
      html: "HTML",
      css: "CSS",
      javascript: "Javascript",
      typescript: "Typescript",
      java: "Java",
      react: "React",
      redux: "Redux",
      reduxToolkit: "Redux Toolkit",
      spring: "Spring",
      jest: "Jest",
      vitest: "Vitest",
      vitejs: "ViteJS",
      sass: "SASS",
      experience: "Experience",
      projectsDone: "What projects have I done?",
      loop3: "Loop3",
      aboutTitle: "About me",
      whoAmI: "Who am I?",
      hello: "Hello, I’m Julian Aquino!",
      selfTaught: "I’m a self-taught front-end developer",
      basedIn: "based in Buenos Aires, Argentina.",
      responsiveWebsites:
        "I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.",
      passion:
        "Transforming my creativity and knowledge into websites has been my passion for over a year. I always strive to learn about the newest technologies and frameworks.",
      contact: "Contact",
      letsWorkTogether: "Let's work together!",
      openToOpportunity:
        "I am open to any job opportunity. However, if you have any other request or question, please feel free to contact me.",
      anthos: {
        title: "Frontend and Backend Developer",
        projectName: "Anthos",
        date: "2023 - 2024",
        content:
          "I developed and managed the entire frontend of Forge, a comprehensive micro-service for Anthos. I led the design and implementation of the user interface, ensuring an intuitive and seamless user experience. I collaborated closely with the backend development team to effectively integrate functionalities and ensure product consistency. I participated in planning meetings and code reviews to ensure quality and meet deadlines.",
      },
      madcave: {
        title: "Frontend Developer",
        projectName: "Madcave",
        date: "2024",
        content:
          "I contributed to the development of MadCave, a comic reading platform, focusing on frontend development. I designed and developed key features of the user interface to enhance accessibility and reading experience. I worked closely with the design team to ensure visual consistency and overall usability of the product. I conducted thorough testing to identify and fix errors, thereby improving system stability and performance.",
      },
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
      websiteCreated: "Website Created by",
    },
  },
  es: {
    translation: {
      home: "Inicio",
      skills: "Habilidades",
      experience: "Experiencia",
      about: "Acerca de",
      contact: "Contacto",
      email: "Correo",
      websiteCreated: "Sitio web creado por",
      scroll: "[DESPLAZARSE]",
      hey: "¡Hola! Soy",
      profession: "Soy un",
      letsTalk: "Contáctame",
      name: "Julian Aquino",
      professionTitle: "desarrollador",
      whatCanIDo: "¿Qué puedo hacer?",
      frontend: "Frontend",
      backend: "Backend",
      frontendDescription:
        "Competente en React, Redux y Redux Toolkit para construir interfaces de usuario interactivas y dinámicas. Experiencia usando TypeScript para mejorar la solidez y escalabilidad del código frontend. Experiencia con frameworks de prueba como Jest o Vitest para pruebas frontend exhaustivas.",
      backendDescription:
        "Competente en Node.js, Express y bases de datos como MongoDB y PostgreSQL para crear servicios backend robustos. Familiarizado con GraphQL para consultas de datos eficientes y diseño de API RESTful.",
      languages: "Lenguajes",
      frameworks: "Frameworks",
      tools: "Herramientas",
      html: "HTML",
      css: "CSS",
      javascript: "Javascript",
      typescript: "Typescript",
      java: "Java",
      react: "React",
      redux: "Redux",
      reduxToolkit: "Redux Toolkit",
      spring: "Spring",
      jest: "Jest",
      vitest: "Vitest",
      vitejs: "ViteJS",
      sass: "SASS",
      experience: "Experiencia",
      projectsDone: "¿Qué proyectos he hecho?",
      loop3: "Loop3",
      aboutTitle: "Sobre mí",
      whoAmI: "¿Quién soy?",
      hello: "¡Hola, soy Julian Aquino!",
      selfTaught: "Soy un desarrollador front-end autodidacta",
      basedIn: " nacido en Buenos Aires, Argentina.",
      responsiveWebsites:
        "Puedo desarrollar sitios web responsivos desde cero y elevarlos a experiencias web modernas y amigables para el usuario.",
      passion:
        "Transformar mi creatividad y conocimiento en sitios web ha sido mi pasión durante más de un año. Siempre me esfuerzo por aprender sobre las tecnologías y frameworks más nuevos.",
      contact: "Contacto",
      letsWorkTogether: "¡Trabajemos juntos!",
      openToOpportunity:
        "Estoy abierto a cualquier oportunidad laboral. Sin embargo, si tienes alguna otra solicitud o pregunta, no dudes en contactarme.",
      anthos: {
        title: "Desarrollador Frontend y Backend",
        projectName: "Anthos",
        date: "2023 - 2024",
        content:
          "Desarrollé y gestioné todo el frontend de Forge, un microservicio integral para Anthos. Lideré el diseño e implementación de la interfaz de usuario, asegurando una experiencia intuitiva y sin problemas para el usuario. Colaboré estrechamente con el equipo de desarrollo backend para integrar funcionalidades de manera efectiva y garantizar la consistencia del producto. Participé en reuniones de planificación y revisiones de código para asegurar la calidad y cumplir con los plazos.",
      },
      madcave: {
        title: "Desarrollador Frontend",
        projectName: "Madcave",
        date: "2024",
        content:
          "Contribuí al desarrollo de MadCave, una plataforma de lectura de cómics, enfocándome en el desarrollo frontend. Diseñé y desarrollé características clave de la interfaz de usuario para mejorar la accesibilidad y la experiencia de lectura. Trabajé en estrecha colaboración con el equipo de diseño para garantizar la consistencia visual y la usabilidad general del producto. Realicé pruebas exhaustivas para identificar y corregir errores, mejorando así la estabilidad y el rendimiento del sistema.",
      },

      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Correo",
      websiteCreated: "Sitio web creado por",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // idioma predeterminado
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
