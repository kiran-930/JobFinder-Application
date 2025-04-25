import React, { useState } from 'react';

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="container mt-5 p-4 shadow rounded bg-light" style={{ maxWidth: '500px' }}>
      <h2 className="text-center text-dark mb-4">Job Application Form</h2>
      {formSubmitted ? (
        <div className="text-center text-success">
          <h4>Thank you for applying!</h4>
          <p>We have received your application.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Cover Letter:</label>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="5"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Resume (PDF only):</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-info w-100">
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}

export default ApplyForm;
