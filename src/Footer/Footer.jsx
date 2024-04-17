import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Asegúrate de que la ruta a tu CSS es correcta

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Manejo del envío del formulario de contacto
    console.log('Enviando contacto', { email, message });
    // Aquí agregarías lógica para resetear campos o mostrar un mensaje de éxito
  };

  return (
    <footer className="footer">
      <div className='Content-primary'>
        <h5 style={{fontSize:"30px"}}>Contáctanos</h5>
      <div className="footer-content">
        <div className="footer-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Tu mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
        <div className="footer-section info-section">
          <img src="https://i.postimg.cc/pdySgz8q/JANUSZ-LOGO.png" alt="Logotipo de la Empresa" className="footer-logo" />
          <p className='direccion'>Direccion: Av Siempre Viva 742</p>
          <p className="contact-number">Número de contacto: +1 (123) 456-7890</p>
          <div className="social-media-icons">
            <a className='facebook-icon' href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className='twiter-icon' href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className='instagram-icon' href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
