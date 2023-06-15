import React from 'react';
import value1 from './values1.svg';
import value2 from './values2.svg';
import value3 from './values3.svg';
import valuesImg from '../../public/assets/valuesImg.svg'
import valuesImg2 from '../../public/assets/valuesImg2.svg'

export default () => (
  <div className="about-value-container">
    <div className="about-value-image-container">
    <img style={{width: 481, height: 525, zIndex: 5}} src={valuesImg} />
    <img className='absolute-img' src={valuesImg2} />
    <svg width="204" height="204" viewBox="0 0 204 204" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="201" height="201" stroke="#196DB7" stroke-width="3"/>
</svg>

    </div>
    <div className="about-value-text-container">
      <div className="about-value-title">
        <h2>MEINE WERTE</h2>
        <h3>Nach diesen Werten lebe und arbeite ich.</h3>
      </div>

      <div className="about-value-text-tiles">
        <div className="about-value-tile">
          <img src={value1} />

          <div className="about-value-text-main">
            <h4>Zuverlässigkeit </h4>
            <p>
              Zuverlässigkeit ist der Schlüssel zu Erfolg und Zufriedenheit.
            </p>
          </div>
        </div>
        <div className="about-value-tile">
        <img src={value2} />

          <div className="about-value-text-main">
            <h4>Qualität </h4>
            <p>Ich schätze Qualität als einen wertvollen Schatz</p>
          </div>
        </div>

        <div className="about-value-tile">
        <img src={value3} />

          <div className="about-value-text-main">
            <h4>Vertrauen </h4>
            <p>Vertrauen ist der Grundpfeiler meines Wertesystems.</p>
          </div>
        </div>
        <a type="button" className="btn btn-arrow">
          JETZT ANFRAGEN
        </a>
      </div>
    </div>
  </div>
);
