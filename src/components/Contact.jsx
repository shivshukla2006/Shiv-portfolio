// Contact.jsx
import { motion } from 'framer-motion';
import '../styles/Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [toast, setToast] = useState('');

  const handleSend = () => {
    setToast('Message sent successfully!');
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      {toast && <div className="toast">{toast}</div>}

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Connect();
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
          <strong>Email:</strong>{' '}
          <a href="mailto:shivshukla9111@gmail.com">shivshukla9111@gmail.com</a>
        </p>
        <p className="contact-info">
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/shiv-shukla-13835b292/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/shiv-shukla-13835b292
          </a>
        </p>
      </motion.div>

      <motion.div
        className="contact-action"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <button className="send-btn" onClick={handleSend}>
          <span className="send-text">Send Message</span>
          <span className="send-trail">➤</span>
        </button>
      </motion.div>
    </section>
  );
};

export default Contact;