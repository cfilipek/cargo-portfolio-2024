// Eyes.js
import React, { useEffect, useState } from 'react';
import './Eyes.css'; // CSS for styling

const Eyes = () => {
  const [pupils, setPupils] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }]);
  const eyeDiameter = 40; // Diameter of the eye
  const pupilDiameter = 10; // Diameter of the pupil
  const maxOffset = (eyeDiameter - pupilDiameter) / 2; // Maximum offset for pupils

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Center positions for the eyes
      const eyePositions = [
        { x: window.innerWidth / 2 - 60, y: window.innerHeight / 2 }, // Left eye position
        { x: window.innerWidth / 2 + 60, y: window.innerHeight / 2 }, // Right eye position
      ];

      const newPupils = eyePositions.map((eyePosition) => {
        const offsetX = Math.max(-maxOffset, Math.min(maxOffset, clientX - eyePosition.x));
        const offsetY = Math.max(-maxOffset, Math.min(maxOffset, clientY - eyePosition.y));
        return { x: offsetX, y: offsetY };
      });

      setPupils(newPupils);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes">
      <div className="eye">
        <div
          className="pupil"
          style={{
            transform: `translate(${pupils[0].x}px, ${pupils[0].y}px)`,
          }}
        />
      </div>
      <div className="eye">
        <div
          className="pupil"
          style={{
            transform: `translate(${pupils[1].x}px, ${pupils[1].y}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Eyes;
