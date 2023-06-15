import React from 'react';
import Logo from './logo';

export default () => (
  <footer className="footer" id="footer">
    <div className="footer__section">
    <div className="footer__details">
      <div className="footer__top">
        <div className="footer__top__left">
          <span>Frage uns jetzt an!</span>
          <h2>Wir freuen uns, Dir Deinen
            <br />
            Traum vom eigenen Pool
            <br />
            zu erfüllen!
          </h2>
          <p>
            Beantworte uns ein paar Fragen, indem Du auf den Button hier unten
            klickst - danach können wir Deine Anfrage bestmöglich bearbeiten und
            melden uns schnellstmöglich bei Dir!
          </p>
              <a type="button" className="btn btn-arrow">
              JETZT ANFRAGEN
              </a>
          </div>
          <div className="footer__top__right">
          <div className="Element"
            style={{
              width: 119,
              height: 119,
              left: 0,
              top: 296,
              borderStyle: "solid",
              borderWidth: 3,
              borderStyle: "solid",
              borderColor: "rgba(25, 109, 183, 1)",
              zIndex: 2,
              marginBottom: 0,
              position: "relative",
            }}
          />
          <img style={{width: 399, borderRadius: 8, zIndex: 6, marginLeft: "-80px", }}
            src="https://i.ibb.co/nkwyr8H/Image-1.png"
          />
        </div>
        </div>
        <div className="divider __white"/>
      <div className="footer__bottom">
         <div className="footer__about">
      <img style={{height: 55 }}
           src="https://i.ibb.co/NVWT71L/nav-logo-mg.png"/>
        <p>
        Matthias Grundmann ist seit 2018 mit seiner eigenen Pool-Firma selbstständig und erfüllt den Traum vom eigenen Pool!
        </p>
         </div>
              <div className="link_group">
        <span>ÜBER UNS</span>
        <a>Über mich</a>
              </div>
              <div className="link_group">
        <span>LEISTUNGEN</span>
        <a>Poolbau</a>
        <a>SPA Bau</a>
        <a>Energieberatung</a>
        <a>Kundenservice</a>
              </div>
              <div className="link_group">
        <span>Wo Sie uns finden</span>
        <a>Facebook</a>
        <a>Instagram</a>
              </div>
              <div className="link_group">
        <span>EMAIL</span>
        <a>info@mg-pools.de</a>
              </div>
      </div>
           <span className="copyright">
          MG Schwimmbadtechnik © 2023
          <br />
          Webdesign by NXT-YOU GmbH
          </span>
      </div>
    </div>;

  </footer>

);
