// import { FaArrowRight } from "react-icons/fa";
import clothingWebsite from "../images/clothing-website.jpeg";
import stockMarketApp from "../images/stock-market-app.jpeg";
import frenchWeb from "../images/french-web.jpeg";
import aiLessonPlanner from "../images/ai-lesson-planner.jpeg";
import advanceTodo from "../images/todo-list.jpeg";
import starialApp from "../images/starial-app.jpeg";
// import bgChanger from "../images/bg-changer.jpeg";

// const projects = [
//   {
//     title: "Location Flow Web App",
//     link: "https://github.com/ArpitaHalvi/location-address-app",
//     desc: "A web application that allows users to search, select, and save locations using the MapTiler API for map rendering. Users can drag a marker to update their location dynamically or search for an address through a form. Saved addresses are categorized into Home, Friends, and Office for easy access. The app also includes authentication features for log-in and log-out, ensuring a personalized experience.",
//   },
//   {
//     title: "ToDo Application using Redux-Toolkit and Local Storage",
//     link: "https://github.com/ArpitaHalvi/advance-todo-list",
//     desc: "A fully responsive to-do list application with a dark theme, built using Redux Toolkit for state management and local storage for data persistence. Users can log in and log out, add tasks, mark them as completed, delete individual tasks, or clear all tasks using the 'Delete All' button. The intuitive UI ensures a seamless task management experience across different devices.",
//   },
//   {
//     title: "Stock Market Web Application",
//     link: "https://github.com/ArpitaHalvi/stock-market-app",
//     desc: "A fully responsive web application that provides real-time stock market data, including opening and closing prices, high and low values, percentage changes, and absolute changes. It features interactive charts for visualizing stock trends and a search bar for quickly finding specific stocks. The design adapts seamlessly across different devices and consoles, ensuring an optimal user experience.",
//   },
//   {
//     title: "React Portfolio",
//     link: "https://github.com/ArpitaHalvi/react-portfolio",
//     desc: "A simple and responsive portfolio that highlights key sections, including About, Skills, and Projects. It provides a structured overview of expertise and work, offering visitors an intuitive way to explore the content. The portfolio also includes contact links for Email, LinkedIn, Instagram, GitHub, and other platforms, making it easy to connect.",
//   },
//   {
//     title: "Clothing Website Landing Page",
//     link: "https://github.com/ArpitaHalvi/react-landing-page",
//     desc: "A minimal and professional clothing website landing page with a fully responsive design. It features three main categories: Men, Women, and Kids, each showcasing its own set of products. The layout is designed for easy navigation and a seamless user experience across all devices.",
//   },
// ];

const images = [
  clothingWebsite,
  stockMarketApp,
  aiLessonPlanner,
  // bgChanger,
  frenchWeb,
  advanceTodo,
  starialApp,
];

export default function Projects() {
  return (
    <section className="project-section" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {/* {projects.map((project, index) => {
          const { title, desc, link } = project;
          return (
            <div className="card" key={index}>
              <div>
                <h5 className="title">{title}</h5>
                <a href={link} className="link">
                  Visit Project <FaArrowRight />
                </a>
              </div>
              <p className="desc">{desc}</p>
            </div>
          );
        })} */}
        {images.map((img, index) => {
          return (
            <div className="card" key={index}>
              <img src={img} alt="Image" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
