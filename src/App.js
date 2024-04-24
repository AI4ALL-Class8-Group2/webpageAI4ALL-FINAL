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
            <br></br>
            <br></br>
            <div className="card-container">
                <AboutUs 
                    name="Connor Morris"
                    position="Developer"
                    imageSrc="https://media.licdn.com/dms/image/D4E03AQHRiZTgCwN2zQ/profile-displayphoto-shrink_400_400/0/1713378491710?e=1719446400&v=beta&t=bLzdpK1XEP9IUJ0UDu-Z_78MLrsYO7tuQlOJcM4ZFoU"
                    githubLink="https://github.com/Bluish1251"
                    instagramLink="https://www.instagram.com/connorm.mp3/"
                    linkedinLink="https://www.linkedin.com/in/connorm1251"
                    />
                <AboutUs
                    name="Insiya Raja"
                    position="Developer"
                    imageSrc="data:image/jpeg;base64,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"
                    githubLink="https://github.com/insiya2414"
                    instagramLink="https://www.instagram.com/johndoe"
                    linkedinLink="https://www.linkedin.com/in/insiya-raja24/"
                    />
                <AboutUs                     
                    name="Beauty Kabore"
                    position="Developer"
                    imageSrc="https://media.licdn.com/dms/image/C4D03AQEvP-00VXwHzQ/profile-displayphoto-shrink_200_200/0/1560354836947?e=1719446400&v=beta&t=BziUYVHaXxRjnBzC4BdbAG51NbAsKZDGEsmbEDN6uDo"
                    githubLink="https://github.com/BeautyKabore"
                    instagramLink="https://www.instagram.com/johndoe"
                    linkedinLink="https://www.linkedin.com/in/darylcartwright/"
                    />
                <AboutUs 
                    name="Arshia Agrawal"
                    position="Developer"
                    imageSrc="data:image/jpeg;base64,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"
                    githubLink="https://github.com/PhoenixThorn3346"
                    instagramLink="https://www.instagram.com/johndoe"
                    linkedinLink="https://www.linkedin.com/in/arshia-agrawal/"
                    />
                <AboutUs                     
                    name="Joe Bernal"
                    position="Developer"
                    imageSrc=""
                    githubLink="https://github.com/joebernal"
                    instagramLink="https://www.instagram.com/johndoe"
                    linkedinLink="https://www.linkedin.com/in/nhu-pham-a50599193/"
                    />
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
        

            <div className="chart-container">
                        <h3>Chart 1: Victim Sex</h3>
                        <Link to="./Chart1">
                        <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/Chart%201.png?raw=true" alt="victim_sex" />
                        </Link>
                        {/* Add your chart component here */}
                    </div>

            <div className="chart-container">
                <h3>Chart 2: Violin Plot</h3>
                <Link to="./Chart2">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/Chart%202.png?raw=true" alt="violin plot" />
                {/* Add your chart component here */}
                </Link>
            </div>
            
            <div className="chart-container">
                <h3>Chart 3: Histograms</h3>
                <Link to="./Chart3">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/Chart%203.png?raw=true" alt="histograms" />
                {/* Add your chart component here */}
                </Link>
            </div>

            
            <div className="chart-container">
                <h3>Chart 4: Victim Age Grouping</h3>
                <Link to="./Chart4">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/Chart%204.png?raw=true" alt="Victim Age Grouping" />
                {/* Add your chart component here */}
                </Link>
            </div>

            
            <div className="chart-container">
                <h3>Chart 5: Decision Tree Visual</h3>
                <Link to="./Chart5">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/decision_tree.png?raw=true" alt="decision tree visual" />
                {/* Add your chart component here */}
                </Link>
            </div>

            
            <div className="chart-container">
                <h3>Plot of ROC & Youden's</h3>
                <Link to="./ROCYOUDEN">
                <img src="https://github.com/AI4ALL-Class8-Group2/Gun-Violence-Incident-Fatality-Predictor/blob/pictures/ROC%20and%20Youdens.png?raw=true" alt="ROC" />
                {/* Add your chart component here */}
                </Link>
            </div>
    </div>
    </>
    );
};

export default App;