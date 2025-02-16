import React from 'react';
import styles from './CVPreview.module.css'; // Import module CSS
import { formatDate } from '../../utils/frmatDate';

function CVPreview({ generalInfo, educations, experiences }) {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.name}>{generalInfo.name || "Your Name"}</h1>
        <div className={styles.contactInfo}>
          <p className={styles.contactItem}>
            ✉️ {generalInfo.email || "example@email.com"}
          </p>
          <p className={styles.contactItem}>
            📱 {generalInfo.phone || "+1234567890"}
          </p>
        </div>
      </div>

      {/* Education Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {educations.map((edu) => (
          <div key={edu.id} className={styles.entry}>
            <h3 className={styles.entryTitle}>{edu.schoolName}</h3>
            <p className={styles.entrySubtitle}>{edu.studyTitle}</p>
            <p className={styles.entryDate}>{formatDate(edu.studyDate)}</p>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.timelineItem}>
            <h3 className={styles.entryTitle}>{exp.companyName}</h3>
            <p className={styles.entrySubtitle}>{exp.positionTitle}</p>
            <p className={styles.entryDate}>
              {formatDate(exp.dateFrom)} - {formatDate(exp.dateUntil)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CVPreview;