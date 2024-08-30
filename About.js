import React, { useState } from 'react';
import './About.css';
import logo from './1.png';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <img src={logo} alt="Our Logo" className="about-logo" />
        <p>
          Welcome to our organization dedicated to promoting mental health awareness and support. Our mission is to provide resources, education, and a supportive community for individuals experiencing mental health challenges.
        </p>
      </div>
      
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to break the stigma surrounding mental health by providing accessible resources and support to individuals and communities. Mental health is as important as physical health, and everyone deserves access to the help they need.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Empathy:</strong> Approach every individual with understanding and compassion.</li>
          <li><strong>Inclusivity:</strong> Provide support to people of all backgrounds, identities, and experiences.</li>
          <li><strong>Education:</strong> Believe in the power of knowledge to transform lives and communities.</li>
          <li><strong>Advocacy:</strong> Work to change policies and perceptions around mental health.</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <p>
          Composed of dedicated professionals from various backgrounds, including mental health experts, counselors, educators, and advocates. United by passion for improving mental health support and awareness.
        </p>
      </div>

      <div className="about-section">
        <h2>Get Involved</h2>
        <p>
          We welcome you to join us in our mission. Whether you want to volunteer, donate, or participate in our events, there are many ways to get involved and make a difference.
        </p>
        <button onClick={handleLearnMoreClick} className="about-button">
          {showMore ? 'Show Less' : 'Learn More'}
        </button>
      </div>

      {showMore && (
        <div className="about-section">
          <h2>More About Us</h2>
          <ul>
            <li><strong>History:</strong> Founded in 1999, dedicated to mental health advocacy for over two decades.</li>
            <li><strong>Programs:</strong> Offer workshops, support groups, and educational seminars.</li>
            <li><strong>Partnerships:</strong> Collaborate with schools, businesses, and non-profits to expand reach.</li>
            <li><strong>Research:</strong> Support and conduct research to improve treatment outcomes and influence policies.</li>
            <li><strong>Impact:</strong> Helped thousands through improved mental health, awareness, and support networks.</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default About;
