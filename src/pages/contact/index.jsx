import React, { useState } from 'react';
import Header from '@/components/Header';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Header />
      <div className='contact'>
        <h2>Contact Us</h2>
        <div>
          <h3>Customer Service</h3>
          <p>If you have general questions or concerns about Nightout Navigator, please contact us at</p>
          <p>Email: customerservice@nightoutnavigator.com</p>
          <p>Telephone: 123-456-7890</p>
        </div>
        <div>
          <h3>Partnership and Sponsorship Requests</h3>
          <p>If you have an exciting partnership or sponsorship you’d like us to consider, please send a detailed overview of the opportunity and your information to</p>
          <p>Email: partnerships@nightoutnavigator.com</p>
        </div>
        <div className='feedback-form'>
          <h3>Send Us Your Feedback</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
