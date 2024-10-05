import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .send(
          'service_lb2fybm', // replace with your service ID
          'template_or9xxao', // replace with your template ID
          formData,
          'gnMwDpDEPHmR6eTdk' // replace with your user ID
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.log('Failed to send email:', error.text);
          }
        );
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact">
    <div>
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p style={{ color: 'green' }}>Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
    </section>
  );
}

export default ContactForm;
