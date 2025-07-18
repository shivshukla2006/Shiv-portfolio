// Contact.jsx
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        📬 Get In Touch
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Whether you have a question, a project idea, or just want to say hi—feel free to reach out!
      </motion.p>

      <motion.div
        className="contact-details"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="contact-info">
          <strong>Email:</strong> <a href="mailto:shivshukla9111@gmail.com">shivshukla9111@gmail.com</a>
        </p>
        <p className="contact-info">
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/shiv-shukla-13835b292/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/shiv-shukla-13835b292
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;