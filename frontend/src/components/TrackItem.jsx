import React, { useState } from 'react';

export default function TrackItem({ trackNumber, title, subtitle, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`track-item ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="track-header">
        <div className="track-label">Issue {trackNumber}:</div>
        <div className="track-title">{title}</div>
        {subtitle && <div className="track-subtitle">{subtitle}</div>}
      </div>
      
      {/* The expanding manifesto content */}
      <div className="track-content">
        <p>{details}</p>
      </div>
    </div>
  );
}