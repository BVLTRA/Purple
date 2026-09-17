import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot, updateDoc, increment } from 'firebase/firestore';

export default function PledgeAction({ startDate }) {
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [pledgeCount, setPledgeCount] = useState(842); // Fallback until Firebase loads
  const [hasPledged, setHasPledged] = useState(false);

  // Firestore reference: collection 'campaign', document 'stats'
  const statsRef = doc(db, 'campaign', 'stats');

  useEffect(() => {
    if (localStorage.getItem('hasPledged_purple')) {
      setHasPledged(true);
    }

    // Real-time listener: updates the UI instantly when anyone, anywhere pledges
    const unsubscribe = onSnapshot(statsRef, (docSnap) => {
      if (docSnap.exists()) {
        setPledgeCount(docSnap.data().count);
      }
    });

    const calculateTime = () => {
      const difference = new Date() - new Date(startDate);
      if (difference > 0) {
        setTimeElapsed({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    
    return () => {
      clearInterval(timer);
      unsubscribe(); // Cleanup Firebase listener
    };
  }, [startDate]);

  const handlePledge = async () => {
    if (!hasPledged) {
      setHasPledged(true);
      localStorage.setItem('hasPledged_purple', 'true');
      setPledgeCount(prev => prev + 1); 
      
      await updateDoc(statsRef, {
        count: increment(1)
      });
    } else {
      setHasPledged(false);
      localStorage.removeItem('hasPledged_purple');
      setPledgeCount(prev => prev - 1); 
      
      await updateDoc(statsRef, {
        count: increment(-1)
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Purple Awareness',
      text: 'I stand against gender-based violence and femicide. Add your voice.',
      url: window.location.href
    };

    // Use native mobile share sheet if available, otherwise copy to clipboard
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="pledge-container">
      
      {/* COUNT-UP STOPWATCH */}
      <div className="stopwatch-display">
        <div className="timer-label">TIME SINCE JULY 15 (1st victim):</div>
        <div className="timer-grid">
          <div className="timer-cell"><span>{pad(timeElapsed.days)}</span><small>D</small></div>
          <div className="timer-sep">:</div>
          <div className="timer-cell"><span>{pad(timeElapsed.hours)}</span><small>H</small></div>
          <div className="timer-sep">:</div>
          <div className="timer-cell"><span>{pad(timeElapsed.minutes)}</span><small>M</small></div>
          <div className="timer-sep">:</div>
          <div className="timer-cell"><span>{pad(timeElapsed.seconds)}</span><small>S</small></div>
        </div>
      </div>

      {/* THE PLEDGE COUNTER */}
      <div className="pledge-count-display">
        <div className="count-number">{pledgeCount.toLocaleString()}</div>
        <div className="count-label">
          PEOPLE WHO STAND WITH WOMEN AND ARE ACTIVELY AGAINST THIS PROBLEM
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="action-group">
        <button 
        className={`pledge-btn ${hasPledged ? 'pledged' : 'active'}`} 
        onClick={handlePledge}
      >
        {hasPledged ? "YOU HAVE TAKEN A STAND" : "I STAND AGAINST THIS SILENCE"}
      </button>

        <button className="share-btn" onClick={handleShare}>
          SHARE THE CAMPAIGN 
        </button>
      </div>

      {/* THE REALITY / VICTIMS SECTION */}
      <div className="memorial-section">
        <div className="memorial-names">
          <h4 className="memorial-header">SAY THEIR NAMES.</h4>
          <ul className="memorial-list">
            <li>Elizabeth "Tsontso" Moselakgomo 38</li>
            <li>Itumeleng Kekana 32</li>
            <li>And the 7 other unidentified women found, between ages 20 to 38</li>
          </ul>
        </div>
        
        <div className="memorial-stats">
          <p>
            Between April and June this year alone, <strong>569 women</strong> were murdered in South Africa. 
            In that same single quarter, <strong>8,814 women and children</strong> were victims of reported rape. 
            These are not just numbers. They are our family, our friends, and our community.
          </p>
          <a 
            href="https://www.saps.gov.za/services/crimestats.php" 
            target="_blank" 
            rel="noreferrer" 
            className="stats-citation"
          >
            — Source: SAPS 1st Quarter Crime Statistics (April - June 2026) 
          </a>
        </div>
      </div>

    </div>
  );
}