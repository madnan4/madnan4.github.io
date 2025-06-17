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
          <img src={"https://img.icons8.com/?size=100&id=12580&format=png&color=000000"} alt="Email icon" />
          <a href="mailto:adnanmali108@gmail.com@email.com">Adnanmali108@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"https://img.icons8.com/?size=100&id=13930&format=png&color=000000"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/adnan-ali-0312b8251">linkedin.com/in/adnan-ali-0312b8251</a>
        </li>
        <li className={styles.link}>
          <img src={"https://img.icons8.com/?size=100&id=62856&format=png&color=000000"} alt="Github icon" />
          <a href="https://github.com/madnan4">github.com/madnan4</a>
        </li>
      </ul>
    </footer>
  );
};