import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SatateFarm</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, IBM</h4>
            <p>
            Developed and maintained microservices-based applications using Java, Spring Boot, and REST APIs for customer-facing campaign management system. Worked on Rosa Migrations using MERNA.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Internal POC's</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, IBM</h4>
            <p>
              Participated in WatsonX and AWS Agentsphere hackathons on RAG and Ember to React JS code conversions. Implemented Poc's on AI Story Buddy and AI CICD Generator.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AMEX</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, IBM</h4>
            <p>
            Designed and implemented Spring Boot microservices for credit notification system. Implemented complex business logic for credit eligibility validation.Built automated unit and integration tests for ensuring system reliability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Internal ADG</h3>
            <h4 className="vertical-timeline-element-subtitle">Infosys, Chennai</h4>
            <p>
            Architected two full-stack applications using different technology <br></br>
            Stack 1: Angular, Spring Boot, MySQL for user authentication system.<br></br>
            Stack 2: Angular, Node.js, MongoDB for cloud service configuration platform.<br></br>
            Implemented secure user authentication and authorization systems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Walmart</h3>
            <h4 className="vertical-timeline-element-subtitle">Infosys, Chennai</h4>
            <p>
            Developed responsive front-end components using Angular 4+ and TypeScript.Implemented RESTful services using Spring Boot with latest Java features.
            </p>
          </VerticalTimelineElement>
          
          
        </VerticalTimeline>
        
      </div>
    </div>
  );
}

export default Timeline;