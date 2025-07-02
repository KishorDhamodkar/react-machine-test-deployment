import styles from "./Function.module.css";
import arrow from "../../assets/arrow.png"; 

const steps = [
  {
    number: "01",
    title: "Set disbursement Instructions",
    desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
  },
  {
    number: "02",
    title: "Assembly retrieves funds from your account",
    desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
  },
  {
    number: "03",
    title: "Assembly initiates disbursement",
    desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
  },
  {
    number: "04",
    title: "Customer receives funds payment",
    desc: "Get your blood tests delivered at home collect a sample from your blood tests.",
  },
];

export default function Function() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.label}>WHAT’S THE FUNCTION</p>
        <h2 className={styles.title}>Let’s see how it works</h2>
      </div>

      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepWrapper}>
            <div className={styles.step}>
              <div className={styles.circle}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>

            {index < steps.length - 1 && (
              <img
                src={arrow}
                alt="arrow"
                className={`${styles.arrow} ${
                  index % 2 === 1 ? styles.arrowDown : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
