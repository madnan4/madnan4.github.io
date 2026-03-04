import React from "react";
import styles from "./certifications.module.css";
import certifications from "../../data/certifications.json";

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <div className={styles.certs}>
          {certifications.map((cert, id) => (
            <div key={id} className={styles.cert}>
              <div className={styles.certImageContainer}>
                <img src={cert.imageSrc} alt={cert.title} />
              </div>
              <p className={styles.certTitle}>{cert.title}</p>
              <p className={styles.certIssuer}>{cert.issuer}</p>
              <p className={styles.certDate}>{cert.date}</p>
              {cert.status === "in-progress" && (
                <span className={styles.badge}>In Progress</span>
              )}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.credentialLink}
                >
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};