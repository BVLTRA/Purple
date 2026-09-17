import React from 'react';
import './App.css';
import TrackItem from './components/TrackItem';
import PledgeAction from './components/PledgeAction';
import heroImage from './assets/image.png'; 
import CountdownButton from './components/CountdownButton';
import bvltraLogo from './assets/bvltra-logo.svg';

export default function App() {
  return (
    <div className="campaign-container">
      
      <header className="site-header">
        <div className="header-titles">
          <h1>
            Gender Based Violence <br />
            <span className="accent-text">AWARENESS</span>
          </h1>
        </div>
        <div className="header-disclaimer">
          <p>
            STRICTLY not affiliated with the OW SC campaign. I'm just taking my stand against this issue.
          </p>
        </div>
      </header>

      <div className="intro-block">
        <p>
          South Africa faces a <span className="frank-highlight">severe femicide crisis</span>, with rates estimated to be significantly higher than the global average. As of now, police are investigating the alarming recovery of multiple women's bodies around the OR Tambo International Airport area near Johannesburg and Pretoria, sparking widespread public fear, protests, and concerns over potential serial targeting.
        </p>
      </div>

      <div className="hero-section">
        <div className="hero-border"></div>
        <img 
          src={heroImage} 
          alt="Tshedza Mosehane" 
          className="hero-image"
        />
      </div>

      <div className="tracklist">
        <TrackItem 
          trackNumber="01"
          title="Statistics & Awareness"
          subtitle=""
          details="Over the last five years, 5 million dockets were closed without resolution due to 'insufficient leads'—which included 76,655 murders and 61,740 rapes. The SAPS detective branch faces a critical shortage of over 8,500 personnel, severely impacting their ability to investigate and solve cases."
        />
        <TrackItem 
          trackNumber="02"
          title="Prosecutorial Failures"
          details="The National Prosecuting Authority (NPA) frequently rejects files, returning 1.8 million incomplete or weak dockets back to the police. Systemic delays mean hundreds of gender-based violence (GBV) cases are routinely struck off court rolls entirely due to administrative inefficiencies or lost evidenc"
        />
        <TrackItem 
          trackNumber="03"
          title="Flawed Protection Order System"
          details=" A protection order frequently requires the victim to track down the perpetrator to serve the legal papers themselves, which exposes women to further, often fatal, retaliatory violence."
        />
        <TrackItem 
          trackNumber="04"
          title="Secondary Victimisation"
          details="Up to 85% of women surveyed report police incompetence or insensitivity when reporting crimes. Victims are regularly dismissed at police stations, told to 'settle things privately,' or treated with skepticism, forcing a culture of silence."
        />
        <TrackItem 
          trackNumber="05"
          title="Severe Shelter Underfunding"
          details="While the government outlines strategic safety nets, the National Shelter Movement of South Africa notes that safe houses are left underfunded, overcrowded, and strained past their limits because slow court timelines prevent victims from safely transitioning back into society."
        />
      </div>

      {/* THE NEW CONTEXT PARAGRAPH */}
      <div className="awareness-paragraph">
        <p>
          This is not just about posting a hashtag and moving on. It requires an active, 
          daily refusal to accept this violence as our normal. The stopwatch below marks 
          the continuous time we've lived in the wake of the discovery of the first victim on July 15th 2026. 
          The large number represents individuals who <span className="frank-highlight">refuse to be silent</span>.
        </p>
      </div>

      <footer className="site-footer">
        <PledgeAction startDate="2026-07-15T00:00:00" />
      </footer>

      {/* BVLTRA SUB-FOOTER */}
      <aside className="bvltra-footer">
        <div className="bvltra-brand">
          <img src={bvltraLogo} alt="BVLTRA Logo" className="bvltra-logo" />
          <p className="bvltra-desc">
            BVLTRA is an overarching ecosystem and digital studio by Tshedza Mosehane.
          </p>
        </div>

        <div className="bvltra-links">
          <a 
            href="https://bvltra.com" 
            target="_blank" 
            rel="noreferrer" 
            className="portfolio-link"
          >
            Visit PORTFOLIO 
          </a>
          <span className="copyright">
            © {new Date().getFullYear()} BVLTRA. ALL RIGHTS RESERVED.
          </span>
        </div>
      </aside>
      
    </div>
  );
}