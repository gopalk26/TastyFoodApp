import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
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
      name: '',
      message: ''
    });
  };

  return (
    <div className="contact-form flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <img className="mx-auto mb-6" src='https://media.istockphoto.com/id/1441262452/photo/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email.webp?b=1&s=170667a&w=0&k=20&c=FtxQlZeGn__5ZHpc5zi9tx0GVTDZuZQoQcHT7mxDY4Q=' alt="Contact Image" loading="lazy" />
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Contact Us</h1>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Send Email</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input 
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-4">
              <input 
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                name="name" 
                placeholder="Enter Your Name" 
                value={formData.name} 
                onChange={handleChange}  
              />
            </div>
            <div className="mb-6">
              <textarea
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                name="message"
                placeholder="Message Body"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
