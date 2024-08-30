import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., validation, sending data)
    // Placeholder for demonstration
    alert('Form submitted!'); // Replace with actual submission logic
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Get in touch with us here.</p>

      <div className="contact-section">
        <h2>Child Abuse Hotline</h2>
        <ul>
          <li>
            <strong>US National Child Abuse Hotline:</strong>{' '}
            <a href="tel:18004224453">1-800-422-4453</a>
          </li>
          <li>
            <strong>UK NSPCC Child Protection Helpline:</strong>{' '}
            <a href="tel:08088005000">0808 800 5000</a>
          </li>
          <li>
            <strong>Child Helpline International:</strong> Visit{' '}
            <a
              href="https://www.childhelplineinternational.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Child Helpline International
            </a>{' '}
            for local helplines worldwide.
          </li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Philippines Contacts</h2>
        <ul>
          <li>
            <strong>Child Helpline Philippines:</strong>{' '}
            <a href="tel:180018884673">1-800-1-888-4673 (HOPE)</a>
          </li>
          <li>
            <strong>Philippine National Police (PNP):</strong>{' '}
            <a href="tel:117">117</a> or visit your nearest police station
          </li>
          <li>
            <strong>Department of Social Welfare and Development (DSWD):</strong>{' '}
            Visit{' '}
            <a
              href="https://www.dswd.gov.ph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DSWD
            </a>{' '}
            for local offices and services.
          </li>
          <li>
            <strong>National Center for Mental Health (NCMH):</strong>
            <ul>
              <li>
                <strong>Address:</strong> Nueve de Pebrero St., Mandaluyong
                City, Metro Manila, Philippines
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a href="tel:025319001">02 531-9001</a> to 30 /{' '}
                <a href="tel:025319001">02 531-9001 local 2801</a> (Information
                Desk)
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:ncmh.medical@gmail.com">
                  ncmh.medical@gmail.com
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>General Contact Information</h2>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@davaomentalhealth.org">
              info@davaomentalhealth.org
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <a href="tel:+63821234567">+63 82 123 4567</a>
          </li>
          <li>
            <strong>Address:</strong> Unit 201, Mindanao Wellness Plaza,
            Ecoland, Davao City, Philippines
          </li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Feedback and Support</h2>
        <p>If you have any feedback or need support, please reach out to us:</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
