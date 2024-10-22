import { motion } from 'framer-motion'
import { useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export default function ProjectShowcase() {
  const navigate = useNavigate();

  const handleButtonClick = (url) => {
    window.open(url, '_blank')
  }

  const projects = [
    {
      title: "Club Gamma Website (React)",
      description: "A modern and responsive website built using Vite and React, showcasing advanced web development skills and design aesthetics.",
      repoName: "club-gamma-frontend",
      buttonText: "Github",
      url: "https://github.com/clubgamma/club-gamma-frontend"
    },
    {
      title: "Club Gamma Website (Node.js)",
      description: "A robust backend for the Club Gamma website, developed using Node.js to handle complex data processing and ensure smooth operation.",
      repoName: "club-gamma-backend",
      buttonText: "Github",
      url: "https://github.com/clubgamma/club-gamma-backend"
    },
    {
      title: "Internet Speed-Tester (React)",
      description: "A React-based application to test internet speed, demonstrating proficiency in frontend development and user interface design.",
      repoName :"Internet-Speed-Tester",
      buttonText: "Github",
      url: "https://github.com/clubgamma/Internet-Speed-Tester"
    },
    {
      title: "Weather Web App (Frontend)",
      description: "This project creates a weather web app using HTML, CSS, and JavaScript, providing real-time weather updates and forecasts.",
      repoName: "Weather-Web-App-2024",
      buttonText: "Github",
      url: "https://github.com/clubgamma/Weather-Web-App-2024"
    },
    {
      title: "Air Quality Index Analysis (AI/ML)",
      description: "This project utilizes machine learning to predict AQI levels in Delhi during winter, employing SMOTE to improve data balance and accuracy.",
      repoName: "Air-Quality-Index-Analysis",
      buttonText: "Github",
      url: "https://github.com/clubgamma/Air-Quality-Index-Analysis"
    },
    {
      title: "Summarize papers (AI/ML)",
      description: "This project develops an application that summarizes research papers using NLP techniques like NLTK and spaCy for essential information extraction.",
      repoName: "Summarize-papers",
      buttonText: "Github",
      url: "https://github.com/clubgamma/Summarize-papers"
    },
    {
      title: "Sudoku (C)",
      description: "This project implements a Sudoku game in C, allowing users to play, solve puzzles, and validate their solutions.",
      repoName: "Sudoku",
      buttonText: "Github",
      url: "https://github.com/clubgamma/Sudoku"
    },
    {
      title: "Ticket Booking (C)",
      description: "This project features a menu-driven ticket booking system in C, enabling users to book, cancel, and view tickets easily.",
      repoName: "Ticket-Booking",
      buttonText: "Github",
      url: "https://github.com/clubgamma/Ticket-Booking"
    }
  ];

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <div className="min-h-[70vh] py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          variants={statVariants}
          animate={inView ? "visible" : "hidden"}
        >
          <h1 className="text-4xl font-extrabold font-poppins text-white mb-12">
            Our Projects 🧑‍💻
          </h1>
        </motion.div>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={statVariants}>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                repoName={project.repoName}
                buttonText={project.buttonText}
                onButtonClick={() => handleButtonClick(project.url)}
                onContributorsClick={() => navigate(`/contributors/${project.repoName}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, buttonText, onButtonClick,onContributorsClick }) {
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = window.innerWidth <= 768;

  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden font-dm-sans shadow-lg bg-gradient-to-br from-[#644f4f] to-[#5e4545] transition-all duration-150 ease-in-out transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={isMobile ? () => setIsHovered(!isHovered) : null}
    >
      <a onClick={isMobile && onButtonClick}>

      <div className="p-6">
        <motion.h2
          className="text-2xl font-bold mb-2 text-white"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
          >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0.7 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered || isMobile ? 1 : 0,
            y: isHovered || isMobile ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
        >
        <div className="flex justify-between">
            <button
              onClick={onContributorsClick}
              className="bg-blue-500 flex hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
            >
              Contributors
              <BiRightArrowAlt size={24} />
            </button>
            
          <button
            onClick={onButtonClick}
            className="bg-red-500 flex hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
            >
          {buttonText}
          <BiRightArrowAlt size={24} />
          </button>
        </div>
        </motion.div>
      </div>
      </a>
    </motion.div>
  )
}