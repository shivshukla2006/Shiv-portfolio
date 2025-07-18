// Projects.jsx
import { motion } from 'framer-motion';
import '../styles/Project.css';

const projectData = [
  {
    title: 'Bluestock Fintech Module',
    description:
      'Developed IPO detail page with functional backend integration, download feature for RHP/DRHP files, and improved UI alignment.',
    tech: ['React', 'Figma', 'Firebase'],
  },
  {
    title: 'Portfolio Website',
    description:
      'Built a motion-rich personal website with Framer Motion, responsive design, and a unique storytelling-driven layout.',
    tech: ['Framer Motion', 'Tailwind', 'Git Bash'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">💼 My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;