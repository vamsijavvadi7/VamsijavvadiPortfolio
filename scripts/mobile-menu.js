const mobileMenu = document.getElementById("mobileMenu");
const menuToggler = document.getElementById("menuToggler");

menuToggler.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("show");
});
// // contact.js (backend API route)
// const express = require('express');
// const nodemailer = require('nodemailer');
// const router = express.Router();

// router.post('/api/contact', async (req, res) => {
//   const { name, email, subject, message } = req.body;


//   // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail', // or another email provider
//     auth: {
      
//       user: 'vamsijavvadi01@gmail.com', // your email
//       pass: 'kpuk lnca bqat etqd', // your email password
//     },
//   });

//   const mailOptions = {
//     from: email, // the sender's email
//     to: 'vamsijavvadi8@gmail.com', // your email where the form data will be sent
//     subject: subject,
//     text: `You received a message from ${name} (${email}):\n\n${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Message sent successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to send message', error });
//   }
// });

// module.exports = router;
