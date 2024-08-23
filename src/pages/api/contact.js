// pages/api/contact.js

// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Extract the feedback data from the request body
        const { name, email, message } = req.body;

        // Create a transporter using SMTP settings
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        // Set up email options to send an acknowledgment to the customer
        const customerMailOptions = {
            from: process.env.EMAIL_USER, // Your company's email as the sender
            to: email, // Customer's email address (extracted from req.body.email)
            subject: 'Thank you for your feedback!', // Subject line for the customer
            text: `Dear ${name},\n\nThank you for your feedback! We appreciate your input and will get back to you if necessary.\n\nBest regards,\nNightOut Navigator Team`, // Plain text body
            html: `<b>Dear ${name},</b><br><br>Thank you for your feedback! We appreciate your input and will get back to you if necessary.<br><br>Best regards,<br>NightOut Navigator Team`, // HTML body
        };

        // Set up email options to send the feedback to your company
        const internalMailOptions = {
            from: process.env.EMAIL_USER, // Your company's email as the sender
            to: process.env.FEEDBACK_EMAIL, // Your company's feedback email address
            subject: 'New Feedback Received', // Subject line for internal notification
            text: `
                You've received new feedback from your website:
                
                Name: ${name}
                Email: ${email}
                
                Message:
                ${message}
            `, // Plain text body
            html: `
                <p><b>You've received new feedback from your website:</b></p>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b><br>${message.replace(/\n/g, '<br>')}</p>
            `, // HTML body
        };

        try {
            // Send the acknowledgment email to the customer
            const customerInfo = await transporter.sendMail(customerMailOptions);
            console.log('Customer acknowledgment sent: %s', customerInfo.messageId);

            // Send the feedback details to your company
            const internalInfo = await transporter.sendMail(internalMailOptions);
            console.log('Internal feedback sent: %s', internalInfo.messageId);

            // Respond to the client with a success message
            res.status(200).json({ message: 'Feedback sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send feedback', error });
        }
    } else {
        // Handle any other HTTP method
        res.status(405).json({ message: 'Method not allowed' });
    }
}
