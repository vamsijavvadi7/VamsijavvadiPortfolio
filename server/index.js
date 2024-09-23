import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// Get the __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Allow Vite during development

// Serve Vite production files from "dist"
app.use(express.static(resolve(__dirname, '../dist')));

// POST route to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Nodemailer setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vamsijavvadi01@gmail.com', // Your email
      pass: 'kpuk lnca bqat etqd', // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: 'vamsijavvadi8@gmail.com', // Your email to receive form data
    subject: subject,
    text: `You received a message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message', error });
  }
});

// Fallback: serve index.html for any other route (for client-side routing support)
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../dist/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
