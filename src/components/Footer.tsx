import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Priyanka-collab" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/nagasai-priyanka-mallavolu-a4272b113/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p> <a href="https://github.com/Priyanka-collab/react-portfolio-template" target="_blank" rel="noreferrer">Priyanka</a> with 💜</p>
    </footer>
  );
}

export default Footer;