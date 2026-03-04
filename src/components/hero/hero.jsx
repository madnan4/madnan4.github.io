import React from "react";

import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Adnan Ali</h1>
        <p className={styles.description}>
          CS Graduate | CCNA Certified | Aspiring SOC Analyst
        </p>
        <div className={styles.btnGroup}>
          <a href="mailto:adnanmali108@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="./hero/Adnan_Ali_IT_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Adnan_Ali_IT_Resume.pdf"
            className={styles.resumeBtn}
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={"./hero/hero.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
