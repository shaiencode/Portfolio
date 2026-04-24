import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles.css";

function Contact() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <motion.div 
      className="contact-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-container">
        <h1 className="contact-main-header">Contact me</h1>

        <div className="contact-content-grid">
          <div className="contact-details">
            <div className="contact-info-block">
              <p className="contact-label">Location</p>
              <p className="contact-text">Orlando, Florida</p>
            </div>

            <div className="contact-info-block">
              <p className="contact-label">Available Hours</p>
              <p className="contact-text">Monday - Friday<br />11 AM - 5 PM</p>
            </div>
            
            <div className="contact-footer-info">
              <p className="contact-email">shairajeancc@gmail.com</p>
              <p className="contact-phone">(754) 900-5628</p>
            </div>

            <div className="contact-socials">
              <a href="https://www.instagram.com/chu.ienn/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://www.linkedin.com/in/shaira-jean-cayubit-257870256/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name (required)</label>
                  <input 
                    type="text" 
                    placeholder="Your first name" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>

              <div className="form-group">
                <label>Service</label>
                <select>
                  <option value="">Select a service...</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="graphic">Graphic Design</option>
                  <option value="social">Social Media Strategy</option>
                </select>
              </div>

              <div className="form-group">
                <label>Email (required)</label>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Project description</label>
                <textarea placeholder="Tell me about your project..." rows="4"></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;