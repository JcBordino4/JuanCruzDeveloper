import project1 from "../assets/projects/juancruzDeveloper.webp";
import project2 from "../assets/projects/clinicaDental.webp";
import project3 from "../assets/projects/formula1.webp";
import project4 from "../assets/projects/backendProject.webp";

export const HERO_CONTENT = `I am a passionate software developer with a strong focus on building efficient and scalable applications. With hands-on experience in various programming languages and frameworks such as Java, Spring Boot, and JavaScript (React, Node.js), I have developed a solid foundation in both front-end and back-end development. I am particularly interested in microservices architecture and the implementation of robust database systems using MySQL. My aim is to apply my skills in software development and problem-solving to deliver impactful solutions that enhance user experiences and contribute to business success.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Student",
    company: "Universidad Tecnológica Nacional",
    description: `Currently in the 4th year of the Systems Information Engineering degree at Universidad Tecnológica Nacional, Faculty of Regional Córdoba.`,
    technologies: ["Java", "Spring Boot", "React", "Tailwind", "Sequelize", "Express"],
  },
  {
    year: "2025",
    role: "Java Development Student",
    company: "UDEMY",
    description: `Completed the "Universidad Java - Cero a Experto" course (+150 hours) on UDEMY. Gained deep knowledge in Java development, covering Jakarta EE, Spring Boot, JSF, and Servlets. This comprehensive course enhanced my skills in backend development using Java frameworks and technologies.`,
    technologies: ["Java", "Jakarta EE", "Spring Boot", "JSF", "Servlets"],
  },
  {
    year: "2020",
    role: "Web Development Student",
    company: "UDEMY",
    description: `Completed the "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL" course on UDEMY. This 82.5-hour course provided a comprehensive understanding of web development, including front-end and back-end technologies, AJAX, and MySQL databases.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "AJAX", "PHP", "MySQL"],
  },
  {
    year: "2016 - 2021",
    role: "High School Graduate",
    company: "Instituto Secundario Doctor Raúl Loza",
    description: `Graduated with a Bachelor in Economics and Accounting Sciences from Instituto Secundario Doctor Raúl Loza. This academic background provided a strong foundation in economic principles and accounting practices, enhancing my analytical and problem-solving skills.`,
    technologies: ["Economics", "Accounting", "Mathematics"],
  },
];




export const PROJECTS = [
  {
    title: "Personal Website",
    image: project1,
    description:
      "Developed my personal website (juancruzbordino.com) from scratch, showcasing my projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Tailwind"],
  },
  {
    title: "Dental Clinic Website",
    image: project2,
    description:
      "Redesigned and optimized clinicadentalcordoba.com, a website for a dental clinic, ensuring a responsive design and improved user experience.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "ABMC System (Academic Project - UTN FRC - DDS (Software Development))",
    image: project3,
    description:
      "Created a basic ABMC (Alta, Baja, Modificación, Consulta) system in a responsive website using React, Tailwind, Sequelize, and Express.",
    technologies: ["React", "Bootstrap", "Nodejs", "Sequelize", "Express"],
  },
  {
    title: "Microservices Backend (Academic Project - UTN FRC - BDA (Backend))",
    image: project4,
    description:
      "Developed a microservices-based backend for an automotive agency. Implemented features like user notifications for zone violations, report generation, and authentication using Spring Security and Keycloak.",
    technologies: ["Java", "Spring Boot", "Spring Security", "Keycloak"],
  },
];


export const CONTACT = {
  address: "Juan del Campillo 367, Cofico, Cordoba",
  phoneNo: "+54 3573 435961",
  email: "juancruzbordino@gmail.com",
};
