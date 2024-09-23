// Import Nodemailer (as Vercel supports Node.js modules)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vamsijavvadi01@gmail.com',
        pass: 'kpuk lnca bqat etqd', // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: email,
      to: 'vamsijavvadi8@gmail.com', // Your email where the form data will be sent
      subject: subject,
      text: `You received a message from ${name} (${email}):\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send message', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
