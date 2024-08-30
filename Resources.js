import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <p>Explore resources to support mental health and well-being.</p>

      <div className="resource-section">
        <h2>Emergency Contacts</h2>
        <ul>
          <li><strong>National Suicide Prevention Lifeline:</strong> 1-800-273-8255</li>
          <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          <li><strong>Emergency Services:</strong> 911</li>
        </ul>
      </div>

      <div className="resource-section">
        <h2>Online Therapy Platforms</h2>
        <ul>
          <li><a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer">BetterHelp</a></li>
          <li><a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer">Talkspace</a></li>
          <li><a href="https://www.regain.us" target="_blank" rel="noopener noreferrer">ReGain</a> (couples therapy)</li>
        </ul>
      </div>

      <div className="resource-section">
        <h2>Mental Health Information and Support</h2>
        <ul>
          <li><a href="https://www.nami.org" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness (NAMI)</a></li>
          <li><a href="https://www.mentalhealth.gov" target="_blank" rel="noopener noreferrer">MentalHealth.gov</a></li>
          <li><a href="https://www.mhanational.org" target="_blank" rel="noopener noreferrer">Mental Health America (MHA)</a></li>
        </ul>
      </div>

      <div className="resource-section">
        <h2>Support Groups</h2>
        <ul>
          <li><a href="https://www.supportgroupscentral.com" target="_blank" rel="noopener noreferrer">SupportGroupsCentral</a></li>
          <li><a href="https://www.7cups.com" target="_blank" rel="noopener noreferrer">7 Cups</a></li>
          <li><a href="https://www.dailystrength.org" target="_blank" rel="noopener noreferrer">DailyStrength</a></li>
        </ul>
      </div>

      <div className="resource-section">
        <h2>Educational Resources</h2>
        <ul>
          <li><a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">Coursera</a> - Online mental health courses</li>
          <li><a href="https://www.edx.org" target="_blank" rel="noopener noreferrer">edX</a> - Courses from leading institutions</li>
          <li><a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">Udemy</a> - Various mental health courses</li>
        </ul>
      </div>
    </div>
  );
}

export default Resources;
