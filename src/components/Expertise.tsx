import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "Angular",
    "HTML5",
    "CSS3",
    "SASS",
    "Postman"
];

const labelsSecond = [
    "Java",
    "Spring Boot",
    "Spring Rest",
    "Maven",
    "PostMan",
    "Git",
    "Docker",
    "AWS", 
    "SQL",
    "MongoDB",
    "CICD" 
];

const labelsThird = [
    "OpenAI",
    "OpenRouter",
    "LangChain",
    "langGraph",
    "Vercel",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
    "LLM's"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

            <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend Developer</h3>
                    <p>As a backend developer, my core expertise lies in Java with the Spring Boot ecosystem. I have designed and developed RESTful APIs using Spring REST, Spring Data JPA, and Spring Security, along with Maven for build and dependency management. I follow best practices for writing code, and adhering to SOLID principles. I have worked extensively with relational databases (e.g., DB2, MySQL), caching mechanisms (e.g., Redis). I am also experienced in securing APIs with OAuth2/JWT and integrating CI/CD pipelines for automated testing and deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Web Development</h3>
                    <p>I have extensive experience in frontend development, having built and maintained a web applications using React and Angular. My work emphasizes clean, modular architecture, reusable component design, and effective state management using tools such as Redux and RxJS. I am proficient in integrating RESTful APIs, handling asynchronous operations, and ensuring accessibility and cross-browser compatibility. I also focus on optimizing user experiences through thoughtful UI/UX design, mobile responsiveness, and performance tuning techniques.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I have a growing interest and foundational expertise in the field of Generative AI. I am familiar with concepts like prompt engineering, fine-tuning, and Retrieval-Augmented Generation (RAG), and have applied them in building AI-powered prototypes such as intelligent chatbots, story generation tools, and voice-enabled applications. My experience also includes integrating LLM APIs into web applications and experimenting with open-source models via platforms like Hugging Face and OpenRouter.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;