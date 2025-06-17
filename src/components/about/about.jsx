import React from "react";

import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Hello, I am Adnan Ali. I hold a Bachelor's Degree in Computer Science from the University of Illinois Chicago 
                and have gained valuable experience through internships and projects in software development and related fields.
                I am passionate about applying my technical skills to solve real-world problems and build reliable, 
                efficient software systems. 
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                As a Software Intern at the University of Illinois Chicago, I developed a web scraper in C++ and migrated a 
                schedule optimization program, significantly improving system efficiency. At Murry Ave, I utilized Python, 
                JavaScript, and SQL for backend development and spearheaded the development of an advanced AI chatbot. 
                Additionally, I served as a Teaching Aide, facilitating instruction and providing support to students in a Computer Science course.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                My technical skills include languages such as C++, Python, and JavaScript, and frameworks like Node.js and React.js.
                I have experience with databases like MySQL and MongoDB, and I am proficient in Git and GitHub.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};