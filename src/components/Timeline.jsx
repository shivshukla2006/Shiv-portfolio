// Timeline.jsx
import { motion } from 'framer-motion';
import '../styles/Timeline.css';

const timelineData = [
  {
    title: 'SDE Intern at Bluestock',
    date: 'June 2025 – Present',
    description:
      'Working remotely on aligning UI/UX design with functional requirements for fintech modules.',
  },
  {
    title: 'Portfolio Rebuild',
    date: 'May 2025',
    description:
      'Scaffolded timeline layout, built hero section with motion effects, added mobile-first responsiveness.',
  },
  {
    title: 'Frontend Debugging Sprint',
    date: 'March 2025',
    description:
      'Resolved React warnings, optimized component reusability, and improved backend integration.',
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <motion.h2
        className="timeline-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        📌 My Journey
      </motion.h2>

      <div className="timeline-container">
        {timelineData.map((event, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.div
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            />
            <div className="timeline-content">
              <h3 className="timeline-event">{event.title}</h3>
              <p className="timeline-date">{event.date}</p>
              <p className="timeline-desc">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;