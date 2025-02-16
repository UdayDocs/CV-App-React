import React, { useState } from 'react';
import styles from './GeneralInfo.module.css';

function GeneralInfo({ data, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
            <h2 className={styles.heading}>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              required
              minLength={2}
              value={data.name}
              onChange={onUpdate}
              className={styles.inputField}
            />
            <label className={styles.inputLabel}>Your Name</label>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={onUpdate}
              className={styles.inputField}
            />
            <label className={styles.inputLabel}>xxxx@mail.com</label>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="phone"
              value={data.phone}
              onChange={onUpdate}
              className={styles.inputField}
            />
            <label className={styles.inputLabel}>+91 xxxxxxxxx</label>
          </div>

          <button type="submit" className={styles.editBtn}>
            Save
          </button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <button 
            onClick={() => setIsEditing(true)}
            className={styles.editBtn}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;














// import React, { useState } from 'react';

// function GeneralInfo({ data, onUpdate }) {
//   // Local flag to switch between edit and display mode
//   const [isEditing, setIsEditing] = useState(false);
  


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {/* <h2>General Information</h2> */}
//       {isEditing ? (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             required
//             minLength={2}
//             value={data.name}
//             placeholder="Your Name"
//             onChange={onUpdate}
//           />
//           <input
//             type="email"
//             name="email"
//             value={data.email}
//             placeholder="xxxx@mail.com"
//             onChange={onUpdate}
//           />
//           <input
//             type="text"
//             name="phone"
//             value={data.phone}
//             placeholder="+91 xxxxxxxxx"
//             onChange={onUpdate}
//           />
//           <button type="submit">Save</button>
//         </form>
//       ) : (
//         <div>
//           <p><strong>Name:</strong> {data.name}</p>
//           <p><strong>Email:</strong> {data.email}</p>
//           <p><strong>Phone:</strong> {data.phone}</p>
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GeneralInfo;
