import React, { useState } from "react";
import styles from "./FAQ.module.css";

const faqData = [
  {
    question: "How to contact with riders emergency ?",
    answer: "You can contact riders via the emergency support section in the app. Tap 'Help' > 'Emergency' and you’ll be connected to a support agent immediately.",
  },
  {
    question: "App installation failed, how to update system information?",
    answer: "Please ensure your system is updated to the latest version. Reinstall the app after clearing cache.",
  },
  {
    question: "Website response taking time, how to improve?",
    answer: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    question: "New update fixed all bug and issues",
    answer: "Yes, the recent update resolved login issues, UI glitches, and improved performance.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <p className={styles.subtitle}>FREQUENT QUESTION</p>
      <h2 className={styles.title}>Do you have any question</h2>

      <div className={styles.faqList}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span className={styles.icon}>
                {activeIndex === index ? "−" : "+"}
              </span>
              <span>{faq.question}</span>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
