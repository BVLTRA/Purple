import React, { useState, useEffect } from 'react';

export default function CountdownButton({ targetDate, voteUrl = "#" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isLive: false,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="vote-action-container">
      {timeLeft.isLive ? (
        <a href={voteUrl} className="vote-btn active" target="_blank" rel="noreferrer">
          VOTE NOW
        </a>
      ) : (
        <button className="vote-btn disabled" disabled>
          VOTING OPENS SOON
        </button>
      )}

      <div className="countdown-display">
        {timeLeft.isLive ? (
          <span className="live-pill">POLLS OPEN</span>
        ) : (
          <div className="timer-grid">
            <div className="timer-cell"><span>{pad(timeLeft.days)}</span><small>D</small></div>
            <div className="timer-sep">:</div>
            <div className="timer-cell"><span>{pad(timeLeft.hours)}</span><small>H</small></div>
            <div className="timer-sep">:</div>
            <div className="timer-cell"><span>{pad(timeLeft.minutes)}</span><small>M</small></div>
            <div className="timer-sep">:</div>
            <div className="timer-cell"><span>{pad(timeLeft.seconds)}</span><small>S</small></div>
          </div>
        )}
      </div>
    </div>
  );
}