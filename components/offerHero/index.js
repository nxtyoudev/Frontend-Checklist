import React from "react";

export default () => (
  <div className="offer-hero-container">
    <div className="offer-hero-title">
      <h2>
        Wir liefern wir
        <br /> unvergessliche Sommer
      </h2>
      <h3>pünktlich – hochwertig – verlässlich – kundenorientiert</h3>
    </div>

    <div className="offer-stats-wrapper">
      <div className="offer-stats-container">
        <div className="stats-text">
          <h2>
            <span>+</span>300
          </h2>
          <h3>glückliche Kunden</h3>
        </div>
        <div className="stats-text">
          <h2>
            20<span>J</span>
          </h2>
          <h3>Erfahrung</h3>
        </div>
        <div className="stats-text">
          <h2>
            <span>+</span>50
          </h2>
          <h3>neu gebaute Pools</h3>
        </div>
      </div>
      <svg
        className="offer-stats-svg"
        width="284"
        height="281"
        viewBox="0 0 284 281"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1.5"
          width="281"
          height="278"
          stroke="#196DB7"
          stroke-width="3"
        />
      </svg>
    </div>
  </div>
);
