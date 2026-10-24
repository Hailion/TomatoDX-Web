import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const faqData = [
  {
    question: "How accurate is the TomatoDx diagnosis?",
    answer: "On a held-out test set of 15,253 images (separate from training), the classifier reached 91.65% overall accuracy, with a macro F1 of 0.8892 and a weighted F1 of 0.9147 across 10 disease classes plus an Unknown class. This evaluation used curated dataset images, not farmer-captured field photos. Real-world performance has not yet been measured, and TomatoDx is a decision-support tool rather than a laboratory diagnosis."
  },
  {
    question: "Does the app really work without internet?",
    answer: "Yes. Inference runs entirely on the phone with TensorFlow.js. Once the app is installed, photos never leave the device unless you choose to share them, and no data connection is required for diagnosis."
  },
  {
    question: "Is the app available in local Ethiopian languages?",
    answer: "Absolutely. We support English, Amharic (አማርኛ), and Afaan Oromoo so farmers and extension workers can use the tool without language barriers. Dates can also be shown with the Ethiopian calendar."
  },
  {
    question: "How can I contribute my own data or samples?",
    answer: "We are always looking to improve our model. You can join our Telegram channel or contact us via email to share feedback or high-quality photos of local tomato disease cases."
  },
  {
    question: "Is there a cost to use the application?",
    answer: "No, TomatoDx is a research-driven project aimed at social impact. The application is completely free for farmers, researchers, and NGO workers."
  },
  {
    question: "What are the current limitations?",
    answer: "The model has not yet been field-tested on farmer photos. It is weaker on visually similar diseases such as Tomato Mosaic Virus and Early Blight, can lean toward Unknown on ambiguous images, and reported confidence scores have not been separately calibrated. Always confirm critical decisions with local extension services."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      initial={false}
      onClick={onClick}
      style={{
        marginBottom: '1rem',
        backgroundColor: 'var(--bg-card)',
        borderRadius: '16px',
        border: isOpen ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: isOpen ? '0 4px 20px rgba(46, 125, 50, 0.1)' : 'var(--shadow-sm)',
        transition: 'border 0.3s ease, box-shadow 0.3s ease'
      }}
      whileHover={{ y: -2, boxShadow: 'var(--shadow-md)' }}
    >
      <div style={{
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: '600',
          margin: 0,
          color: isOpen ? 'var(--color-primary)' : 'var(--color-dark)',
          transition: 'color 0.3s ease',
          textAlign: 'left'
        }}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          style={{
            color: isOpen ? 'var(--color-primary)' : 'var(--color-text-light)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div style={{
              padding: '0 1.5rem 1.5rem',
              color: 'var(--color-text-light)',
              lineHeight: '1.7',
              fontSize: '1rem',
              textAlign: 'left',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '1rem',
              marginTop: '-0.5rem'
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(46, 125, 50, 0.1)',
              color: 'var(--color-primary)',
              marginBottom: '1rem'
            }}
          >
            <HelpCircle size={28} />
          </motion.div>
          <h2 className="section-title" style={{ display: 'block', marginBottom: '1rem', left: 'auto', transform: 'none', color: 'var(--color-dark)' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
            Everything you need to know about the TomatoDx app and mission.
          </p>
        </div>

        <div>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>Still have questions?</p>
          <a href="#contact" className="btn btn-secondary">
            <MessageCircle size={18} /> Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
