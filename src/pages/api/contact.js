// pages/api/contact.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle the POST request (e.g., process the form data)
      const { name, email, message } = req.body;
  
      // sends the data to a database or email service
      console.log({ name, email, message });
  
      res.status(200).json({ message: 'Message sent successfully!' });
    } else {
      // Handle any other HTTP method
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  