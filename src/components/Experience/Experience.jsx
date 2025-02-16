import React, { useState } from 'react';
import { formatDate } from '../../utils/frmatDate';
import styles from './Experience.module.css';


function Experience({ entries, onAdd, onDelete }) {
  const [isAdding, setIsAdding] = useState(false);
  const [experienceEntry, setExperienceEntry] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });

  const handleChange = (e) => {
    setExperienceEntry({
      ...experienceEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();


  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(experienceEntry);
    setExperienceEntry({
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateFrom: '',
      dateUntil: '',
    });
    setIsAdding(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Experience</h2>
      {entries.map((exp) => (
        <div key={exp.id} className={styles.timelineItem} >
          <h3>{exp.companyName}</h3>
          <p>{exp.positionTitle}</p>
          <p>{exp.responsibilities}</p>
          <p className={styles.dateRange}>
            {formatDate(exp.dateFrom)} - {formatDate(exp.dateUntil)}
          </p>
          < button onClick= {() => onDelete(exp.id) }
          className="delete-btn"
          >Delete</button>
        </div>
      ))}
      {isAdding ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            value={experienceEntry.companyName}
            placeholder="Company Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="positionTitle"
            value={experienceEntry.positionTitle}
            placeholder="Position Title"
            onChange={handleChange}
          />
          <input
            type="text"
            name="responsibilities"
            value={experienceEntry.responsibilities}
            placeholder="Main Responsibilities"
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateFrom"
            value={experienceEntry.dateFrom}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateUntil"
            value={experienceEntry.dateUntil}
            onChange={handleChange}
          />
          <button type="submit">Add Experience</button>
        </form>
      ) : (
        <button onClick={() => setIsAdding(true)}>Add Experience</button>
      )}
    </div>
  );
}

export default Experience;
