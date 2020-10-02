import React from 'react';
// Components
import { FootContainer } from "./main";

export default function Footer() {
  return (
    <FootContainer id="contact">
      <a 
        href="https://linkedin.com/in/emmorais" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a 
        href="https://mailto:esaumorais7@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope-open-text"></i>
      </a>
      <a 
        href="https://www.facebook.com/esau.morais.581" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-square"></i>
      </a>
      <a 
        href="https://instagram.com/esau_morais" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>  
      <p>© edited by Esaú Morais</p>
    </FootContainer>
  )
}
