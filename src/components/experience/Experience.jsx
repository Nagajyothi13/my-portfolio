import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience container">
      <h2 className="experience__heading">Experience</h2>
      <div className="experience__card">
        <h3>Assistant System Engineer</h3>
        <p className="experience__details" style={{color:'orange', fontSize:'17px'}}><b>Tata Consultancy Services[05/2024 – Present]</b></p>
        <h4 className="experience__details">Achievements/Tasks:</h4>
        <ul>
          <li>Learned Java Fullstack development</li>
          <li>Built a website named Rapid Parcel Management System for Officer and customers </li>
          <li style={{color:'orange', fontSize:'17px'}}><b>Got top perfomer badge</b></li>
        </ul>
        <h4 className="experience__details">Skills used: </h4>
        <p>HTML, CSS, JavaScript, Chrome Extension API, Mutation Observers</p>
      </div>
      <div className="experience__card">
        <h3>LinkedIn AI Invitation Assistant</h3>
        <p className="experience__details">Freelance[09/2023 – 11/2023]</p>
        <h4 className="experience__details">Achievements/Tasks:</h4>
        <ul>
          <li>Designed and developed a browser extension to simplify and personalize LinkedIn interactions.</li>
          <li>Enhanced networking and outreach efforts with an intuitive user interface.</li>
          <li>Integrated seamlessly with LinkedIn profiles for generating personalized invitation, thankyou notes, birthday wishes, celebrating certification Achievements, and congratulating for work anniversaries and starting a new job.</li>
        </ul>
        <h4 className="experience__details">Skills used: </h4>
        <p>HTML, CSS, JavaScript, Chrome Extension API, Mutation Observers</p>
      </div>
    </section>
  );
};

export default Experience;
