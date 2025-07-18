// Timeline.jsx
import { motion } from 'framer-motion';
import '../styles/Timeline.css';

const timelineData = [
  {
    title: 'SDE Intern at Bluestock',
    date: 'June 2025 – Present',
    description: 'Working remotely on aligning UI/UX design with functional requirements for fintech modules.',
  },
  {
    title: 'Portfolio Rebuild',
    date: 'May 2025',
    description: 'Scaffolded timeline layout, built hero section with motion effects, added mobile-first responsiveness.',
  },
  {
    title: 'Frontend Debugging Sprint',
    date: 'March 2025',
    description: 'Resolved React warnings, optimized component reusability, and improved backend integration.',
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <h2 className="timeline-title">📌 My Journey</h2>
      <div className="timeline-container">
        {timelineData.map((event, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-dot" />
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
<section id="timeline" className="timeline-section">
  {/* timeline content */}
</section>
export default Timeline;