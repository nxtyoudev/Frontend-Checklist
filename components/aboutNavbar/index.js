import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';


const routes = [
  {
    name: 'Startseite',
    anchor: 'home',
  },
  {
    name: 'Über Mich',
    anchor: 'about',
  },
  {
    name: 'Angebot',
    anchor: 'offer',
  },  
];
const modals = [
  {
    name: 'Zum Angebot',
    anchor: 'inquire',
  },
];
export default () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: '#458FF6' }}>
      <nav className="navbar">
        <div className="navbar__container container">
        
          <button type="button" className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
            {routes.map((route) => (
              <li className="navbar__item">
                <Link className="navbar__link" href={`/${route.anchor}`} onClick={closeMobileMenu}>
                  <span className="navbar__link">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/" onClick={closeMobileMenu}>
            <span><img src="https://i.ibb.co/NVWT71L/nav-logo-mg.png" className="navbar__logo" alt="trafalgar logo" /></span>
          </Link>

          
          {modals.map((trigger) => (
            <button type="button" className="btn primary-btn" href={`/#${trigger.anchor}`} onClick={closeMobileMenu}>
            <span>{trigger.name}</span>
            <svg width="39" height="12" viewBox="0 0 39 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.5303 6.53033C38.8232 6.23744 38.8232 5.76256 38.5303 5.46967L33.7574 0.696699C33.4645 0.403806 32.9896 0.403806 32.6967 0.696699C32.4038 0.989593 32.4038 1.46447 32.6967 1.75736L36.9393 6L32.6967 10.2426C32.4038 10.5355 32.4038 11.0104 32.6967 11.3033C32.9896 11.5962 33.4645 11.5962 33.7574 11.3033L38.5303 6.53033ZM0 6.75H38V5.25H0V6.75Z" fill="white"/>
</svg>

          </button>
          ))}
        </div>
      </nav>
    </IconContext.Provider>
  );
};
