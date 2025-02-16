import React, { useState } from 'react';
import { formatDate } from '../../utils/frmatDate';
import styles from './Education.module.css';

function Education({ entries, onAdd, onDelete }) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [educationEntry, setEducationEntry] = useState({
    schoolName: '',
    studyTitle: '',
    studyDate: '',
  });

  const handleChange = (e) => {
    setEducationEntry({
      ...educationEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!educationEntry.schoolName.trim()) {
      alert('School name is required!');
      return;
    }



    if (editingId) {
      onUpdate(editingId, educationEntry); // Update existing entry
      setEditingId(null);
    } else {
    onAdd(educationEntry);
    }

    setEducationEntry({ schoolName: '', studyTitle: '', studyDate: '' });
    setIsAdding(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Education</h2>
      {entries.map((edu) => (
        <div key={edu.id} className={styles.entryItem}>
          
          <h3>{edu.schoolName}</h3>
          <p>{edu.studyTitle}</p>
          <p>{formatDate(edu.studyDate)}</p>
          <button 
            onClick={() => onDelete(edu.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      ))}
      {isAdding ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="schoolName"
            value={educationEntry.schoolName}
            placeholder="Institution Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="studyTitle"
            value={educationEntry.studyTitle}
            placeholder="Title of Study"
            onChange={handleChange}
          />
          <input
            type="date"
            name="studyDate"
            value={educationEntry.studyDate}
            onChange={handleChange}
            />
          <button type="submit">Add Education</button>
        </form>
      ) : (
        <button onClick={() => setIsAdding(true)}>Add Education</button>
      )}
    </div>
  );
}

export default Education;
