import React, { useState } from "react";
import styles from "./PricingPlans.module.css";


const PricingPlans = () => {
  const [activePlan, setActivePlan] = useState("monthly");

  return (
    <section className={styles.section}>
      <h5 className={styles.subheading}>Pricing Plan</h5>
      <h2 className={styles.heading}>Choose your pricing policy</h2>

      <div className={styles.toggle}>
        <button
          className={`${styles.toggleButton} ${activePlan === "monthly" ? styles.active : ""}`}
          onClick={() => setActivePlan("monthly")}
        >
          Monthly Plan
        </button>
        <button
          className={`${styles.toggleButton} ${activePlan === "annual" ? styles.active : ""}`}
          onClick={() => setActivePlan("annual")}
        >
          Annual Plan
        </button>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.planTitle}>Free Plan</h3>
          <p className={styles.planSubtitle}>For Small teams or office</p>
          <ul className={styles.features}>
            <li>✅ Ultimate access to all course, exercises and assessments</li>
            <li>✅ Free access for all kind of exercise corrections with downloads</li>
            <li>✅ Total assessment corrections with free download access system</li>
            <li className={styles.disabled}>❌ Unlimited download of courses on the mobile app contents</li>
            <li className={styles.disabled}>❌ Download and print courses and exercises in PDF</li>
          </ul>
          <button className={styles.button}>Start free trial</button>
        </div>

        <div className={`${styles.card} ${styles.recommended}`}>
          <div className={styles.priceInfo}>
            <h3 className={styles.planTitle}>Premium</h3>
            <p className={styles.planSubtitle}>For startup enterprise</p>
            <p className={styles.price}>49.99<span>/mo</span></p>
          </div>
          <ul className={styles.features}>
            <li>✅ Ultimate access to all course, exercises and assessments</li>
            <li>✅ Free access for all kind of exercise corrections with downloads</li>
            <li>✅ Total assessment corrections with free download access system</li>
            <li>✅ Unlimited download of courses on the mobile app contents</li>
            <li>✅ Download and print courses and exercises in PDF</li>
          </ul>
          <button className={styles.button}>Subscribe Now</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
