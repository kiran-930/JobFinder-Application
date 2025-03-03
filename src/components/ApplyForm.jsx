import React, { useState } from 'react';
import './applyform.css'

function ApplyForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null,
      });
    
      const [formSubmitted, setFormSubmitted] = useState(false);
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Handle file upload
      const handleFileChange = (e) => {
        setFormData({
          ...formData,
          resume: e.target.files[0],
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    
        // Here you would typically send formData to a server
        // For now, we’ll just display a success message
        setFormSubmitted(true);
      };
    

  return (
    <>
    <div className="container w-50 ">
      <h2 className="heading">Job Application Form</h2>
      {formSubmitted ? (
        <div className="thankYouMessage">
          <h3>Thank you for applying!</h3>
          <p>We have received your application.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label className="label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <div className="formGroup">
            <label className="label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <div className="formGroup">
            <label className="label">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <div className="formGroup">
            <label className="label">Cover Letter:</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="5"
              className="textarea"
            />
          </div>

          <div className="formGroup">
            <label className="label">Resume (PDF only):</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="input"
            />
          </div>

          <button type="submit" className="button">Submit Application</button>
        </form>
      )}
    </div>
    </>
  )
}

export default ApplyForm