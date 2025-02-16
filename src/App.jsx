import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import CVPreview from './components/CVPreview/CVPreview';
import './styles/App.css'

function App() {
  // General Info state as an object
  const [generalInfo, setGeneralInfo] = useState({});

  // Education state as an array (for multiple entries)
  const [educations, setEducations] = useState([]);

  // Experience state as an array (for multiple entries)
  const [experiences, setExperiences] = useState([]);

  // Callback to update general information (could be used on every keystroke)
  const handleGeneralUpdate = (e) => {
    setGeneralInfo({
      ...generalInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for adding a new education entry
  const handleAddEducation = (newEducation) => {
    // Optionally add an ID here for later editing/deleting
    setEducations([...educations, { id: Date.now(), ...newEducation }]);
  };


  const handleDeleteEducation = (id) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };




  // Handler for adding a new experience entry
  const handleAddExperience = (newExperience) => {
    setExperiences([...experiences, { id: Date.now(), ...newExperience }]);
  };

  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter( exp => exp.id!=id))
  }




  return (
    <div className="app-container">
      <nav className="app-nav">
      <h1 className= "heading" >CV Application</h1>
      </nav>
      <main className="app-main">
      <section className="form-section">
      {/* General Info section */}
      <GeneralInfo
        data={generalInfo}
        onUpdate={handleGeneralUpdate}
      />

      {/* Education section */}
      <Education
        entries={educations}
        onAdd={handleAddEducation}
        onDelete={handleDeleteEducation}
      />

      {/* Experience section */}
      <Experience
        entries={experiences}
        onAdd={handleAddExperience}
        onDelete={handleDeleteExperience}
      />
      </section>
      <aside className="cv-preview-section cv-glass">
        <CVPreview
          generalInfo={generalInfo}
          educations={educations}
          experiences={experiences}
        />

      </aside>
      </main>
      <footer className="app-footer">
        Uday</footer>

    </div>
  );
}

export default App;
