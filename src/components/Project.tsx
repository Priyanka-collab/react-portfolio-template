import React from "react";
import aistory from '../assets/images/ai-story.png';
import cicd from '../assets/images/cicd.png';
import insurance from '../assets/images/insurance.jpg';
import ngrx from '../assets/images/ngrx.jpg';
import ngrxState from '../assets/images/ngrx-state.jpg';
import todo from '../assets/images/Todo.jpg';
import login from '../assets/images/login.png';
import ekart from '../assets/images/bigbasket.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={aistory} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ai-story-buddy.vercel.app" target="_blank" rel="noreferrer"><h2>AI Story Buddy</h2></a>
                <p>AI Story Buddy is a creative, web-based storytelling application designed especially for children aged 3–7 years. It leverages Generative AI and speech technologies to make story creation fun, educational, and interactive. Users can speak a story prompt in their preferred language like English, Telugu and Hindi, and the app uses LLMs (via OpenRouter) to generate a rich, imaginative story. The story is then narrated aloud with relevant AI-generated images.</p>
            </div>
            <div className="project">
                <a  target="_blank" rel="noreferrer"><img src={cicd} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://cicd-generator.vercel.app" target="_blank" rel="noreferrer"><h2>CICD Generator</h2></a>
                <p>CI/CD Generator is a web-based tool that dynamically generates GitLab CI/CD YAML pipelines using AI. Users can select stages like build, test, deploy, and choose tools (e.g., Maven, Gradle). Built with React and OpenRouter LLMs, it simplifies DevOps automation. The app features a sleek UI with dark mode support for better usability.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={insurance} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Priyanka-collab/InsuranceService" target="_blank" rel="noreferrer"><h2>Insurance Services</h2></a>
                <p>InsuranceService is a Java-based backend application built using Node Js, APIs for managing insurance policies and customer data. It follows clean architecture principles, with modular layers for service, and repository. Ideal for enterprise-grade insurance domain solutions.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={ngrx} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Priyanka-collab/angular-reactive-ngrx" target="_blank" rel="noreferrer"><h2>Book Management</h2></a>
                <p>This is basic Angular application integerated with Ngrx. Reactive forms are a model-driven approach to handling form inputs. Unlike template-driven forms, they are more scalable and allow better control over form validation and state. Key Features of Reactive Forms ✅ Strongly typed form controls ✅ Synchronous validation ✅ Dynamically updating form fields ✅ Easier integration with RxJS</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={ngrxState} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Priyanka-collab/Ngrx-state-management" target="_blank" rel="noreferrer"><h2>Ngrx State Management</h2></a>
                <p>This is a simple Reactive Angular application, that shows how state is maintained and how its controlled by actions and reducers. It also covers effects for asynchronous communication from the service. NgRx is a reactive state management library for Angular based on Redux. It uses actions, reducers, and selectors to manage and access state centrally. Effects handle side effects like API calls using RxJS observables. NgRx enables a predictable, scalable, and testable architecture in Angular apps.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={todo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Priyanka-collab/mytodo" target="_blank" rel="noreferrer"><h2>To-Do App</h2></a>
                <p>A simple Todo App built using Angular to manage daily tasks. Users can add, edit, and delete todo items dynamically. The app uses two-way data binding and component-based architecture. Lightweight, responsive, and ideal for learning Angular CRUD operations.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={login} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Priyanka-collab/Angular17-forms-login-signup" target="_blank" rel="noreferrer"><h2>Angular Login/SignUp Form</h2></a>
                <p>A simple Login and Signup form built using Angular with reactive forms. Includes form validations for email, password strength, and required fields. Implements error handling and dynamic feedback for user inputs. Ideal for learning form control, validation, and authentication flow basics.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={ekart} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Priyanka-collab/Angular17-ecommerce-app" target="_blank" rel="noreferrer"><h2>Ecommerce App</h2></a>
                <p>A feature-rich e-commerce website built using Angular, inspired by platforms like BigBasket. Includes modules for product listing, search/filter, shopping cart, and checkout. Implements component-based architecture, routing, and state management for smooth UX. Responsive UI with clean design, ideal for showcasing Angular in real-world e-commerce scenarios.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;