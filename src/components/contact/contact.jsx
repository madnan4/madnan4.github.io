import React from "react";

import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}> 
          <img src={"https://img.icons8.com/?size=100&id=12580&format=png&color=ffffff"} alt="Email icon" />
          <a href="mailto:adnanmali108@gmail.com">adnanmali108@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"https://img.icons8.com/?size=100&id=13930&format=png&color=ffffff"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/adnanmali" target="_blank" rel="noopener noreferrer">linkedin.com/in/adnanmali</a>
        </li>
        <li className={styles.link}>
          <img src={"https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff"} alt="Github icon" />
          <a href="https://github.com/madnan4" target="_blank" rel="noopener noreferrer">github.com/madnan4</a>
        </li>
      </ul>
    </footer>
  );
};