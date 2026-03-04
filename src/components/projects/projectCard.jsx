import React from "react";

import styles from "./projectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={imageSrc}
        alt={`Project Image`}
        onError={(e) => { e.target.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; }}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      {source && (
        <div className={styles.links}>
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Source
          </a>
        </div>
      )}
    </div>
  );
};