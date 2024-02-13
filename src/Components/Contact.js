import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Reset form fields
    setFormData({
      email: '',
      subject: '',
      message: ''
    });
  };
  

  return (
    <div className="contact-form">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="form-container">
        <h2>Send Email</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Email Subject" 
            value={formData.subject} 
            onChange={handleChange}  
          />
          <textarea
            name="message"
            placeholder="Message Body"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
