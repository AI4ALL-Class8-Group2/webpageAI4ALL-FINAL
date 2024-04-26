import React from 'react';
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from './components/Navbar';

const AboutUs = ({ name, position, imageSrc, githubLink, instagramLink, linkedinLink }) => {
    return (
        <>
        <Navbar></Navbar>
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
        </>
    );
};

const App = () => {
    return (
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
                githubLink="https://github.com/PhoenixThorn3346"
                instagramLink="https://www.instagram.com/johndoe"
                linkedinLink="https://www.linkedin.com/in/arshia-agrawal/"
            />
            <AboutUs                     
                name="Joe Bernal"
                position="Developer"
                imageSrc="C:\Users\rajai\Downloads\WhatsApp Image 2024-04-24 at 15.50.26_36f0e3db.jpg.png"
                githubLink="https://github.com/joebernal"
                instagramLink="https://www.instagram.com/johndoe"
                linkedinLink="https://www.linkedin.com/in/nhu-pham-a50599193/"
            />
        </div>
    );
}; 

export default App;
