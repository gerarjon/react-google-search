import React from 'react';
import './style.css';

const Footer = () => {
  return(
    <footer className="page-footer blue-grey darken-4">
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col m9">
              <a className="grey-text text-lighten-4 " href="https://gerarsuaverdez.com" target="_blank" rel="noopener noreferrer">© 2020 Gerar Suaverdez</a>
              <span> | </span>
              <a className="grey-text text-lighten-4" href="https://github.com/gerarjon" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
            <div className="col m3">
              <a className="grey-text text-lighten-4" href="https://developers.google.com/books" target="_blank" rel="noopener noreferrer">Powered by Google Books API</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;