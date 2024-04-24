/* Developed by Insiya Raja and Connor Morris */

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; 
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom"
import Navbar from './components/Navbar';

const AboutUs = ({ name, position, imageSrc, githubLink, instagramLink, linkedinLink }) => {
    return(
        
        <div className="card">
            <div className="thumb">
                <img src={imageSrc} alt={name} /> 
                <div className="name-position">
                    <h2>{name}</h2>
                    <p>{position}</p>
                </div>
            </div>
            <div className="social">
                <a href={githubLink} className="share-icon">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={instagramLink} className="share-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={linkedinLink} className="share-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>


    );
}; 

const App = () => {
    return (
        <>
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <div>
<div className="company-container">
  <img src="https://cdn.filestackcontent.com/resize=width:600,height:315,fit:max/quality=value:90/1tIALmlJTpab7D6jw4z8" alt="Company Logo" className="company-logo" />
</div>
<br></br>
<br></br>



            <div className="about-us-container">

            <div className="about-us-header">

            <h1>About Us</h1>
            <p>

            <span>Hello!</span> We're a team passionate about Machine Learning and AI, proud participants of <strong>AI4ALL</strong>. As part of AI4ALL Ignite, a no-cost virtual accelerator, we have the opportunity to work on an <strong>AI/ML portfolio project</strong> with mentorship and guidance from industry experts. Join us on this educational journey as we merge our skills to create innovative solutions in AI and machine learning.
            
         </p>
            </div>
            </div>
        <div className="project-title-container">
        <h2>Project Title: Gun Violence Incident Fatality Predictor</h2>
        </div>
        <br></br>
        <div>
        <h3 className="project-subtitle-container">This project seeks to determine the fatality of gun violence incidents. The initial dataset comprised of data from 22 Police Departments across the United States.</h3>
        <a href="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor" target="_blank"className="github-button"><strong>Github</strong> Project Repository <br /> <FontAwesomeIcon icon={faGithub} /></a>
        <br></br>
        <a href="https://github.com/AI4ALL-Class8-Group2" target="_blank" className="github-button2"><strong>Github</strong> Group Page <br /> <FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <br></br>
        <br></br>
        

            {/* <div className="chart-container">
                        <h3>Chart 1: Victim Sex</h3>
                        <Link to="./Chart1">
                        <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/Chart%201.png?raw=true" alt="victim_sex" />
                        </Link> */}
                        {/* Add your chart component here */}
                    {/* </div> */}

            {/* <div className="chart-container">
                <h3>Chart 2: Violin Plot</h3>
                <Link to="./Chart2">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/Chart%202.png?raw=true" alt="violin plot" /> */}
                {/* Add your chart component here */}
                {/* </Link>
            </div> */}
            
            {/* <div className="chart-container">
                <h3>Chart 3: Histograms</h3>
                <Link to="./Chart3">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/Chart%203.png?raw=true" alt="histograms" />
                {/* Add your chart component here */}
                {/* </Link>
            </div> */}

            
            {/* <div className="chart-container">
                <h3>Chart 4: Victim Age Grouping</h3>
                <Link to="./Chart4">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/Chart%204.png?raw=true" alt="Victim Age Grouping" /> */}
                {/* Add your chart component here */}
                {/* </Link>
            </div> */}

            
            {/* <div className="chart-container">
                <h3>Chart 5: Decision Tree Visual</h3>
                <Link to="./Chart5">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/decision_tree.png?raw=true" alt="decision tree visual" /> */}
                {/* Add your chart component here */}
                {/* </Link>
            </div> */}

{/*             
            <div className="chart-container">
                <h3>Plot of ROC & Youden's</h3>
                <Link to="./ROCYOUDEN">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/ROC%20and%20Youdens.png?raw=true" alt="ROC" /> */}
                {/* Add your chart component here */}
                {/* </Link>
            </div> */} 
<div style={{ marginTop: '20px' }}>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vQwaUjMhnCKok20xEPOEHivel0GqN78Wlsv9driQ4sV-k5tz1Q_BzSPxjkLjIGnJt6uSGUEsbqS3Ntt/embed?start=false&loop=false&delayms=3000"
                    frameBorder="0"
                    width="100%"
                    height="650" // Adjust the height as needed
                    allowFullScreen="true"
                    mozAllowFullScreen="true"
                    webkitAllowFullScreen="true"
                    title="Google Slides Embed"
                ></iframe>
            </div>
            <br></br>
            <br></br>
    </div>
    </>
    );
};

export default App;