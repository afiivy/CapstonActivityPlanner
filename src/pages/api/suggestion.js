import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { name, suggestion } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        const internalMailOptions = {
            from: process.env.EMAIL_USER, // Your company's email as the sender
            to: process.env.FEEDBACK_EMAIL, // Your company's suggestion email address
            subject: 'New Suggestion Received', // Subject line for internal notification
            text: `
                You've received a new suggestion from your website:
                
                Name: ${name}
                
                Suggestion:
                ${suggestion}
            `, // Plain text body
            html: `
                <p><b>You've received a new suggestion from your website:</b></p>
                <p><b>Name:</b> ${name}</p>
                <p><b>Suggestion:</b><br>${suggestion.replace(/\n/g, '<br>')}</p>
            `, // HTML body
        };

        try {
            // Send the suggestion details to your company
            const internalInfo = await transporter.sendMail(internalMailOptions);
            console.log('Internal suggestion sent: %s', internalInfo.messageId);

            // Respond to the client with a success message
            res.status(200).json({ message: 'Suggestion sent successfully! Thank you for helping our page grow!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send suggestion', error });
        }
    } else {
        // Handle any other HTTP method
        res.status(405).json({ message: 'Method not allowed' });
    }
}
