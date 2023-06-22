
  // sendEmail.js
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const smtpConfig = require('./smtpConfig.js');
const parser = require("body-parser"); 
// const apikey = "E3EE329B2279D6D8F36DD9A3FAB75A2EE41E52A77A7465A88E9565B001F170951C1CF0328373273F09D3FD886AA6849B"

app.use(parser.json());

// async function sendEmail() {
//   try {
//     const transporter = nodemailer.createTransport(smtpConfig);

//     const mailOptions = {
//       from: 'aryasantu41@gmail.com',
//       to: 'rahul@thomaskelly.com',
//       subject: 'Hello from Node.js',
//       text: 'This is the content of the email get out man .',
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.messageId);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// }

// sendEmail();

app.post('/email', (req, res) => {
  // const { body } = req;
  // const email = req.body.email
  // console.log("email",email)

  try {
    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      from: 'aryasantu41@gmail.com',
      to: req.body.email,
      subject: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      text: 'NNNNNNNNNNN HHHHHHHHHHHHH YYYYYYYYYYYYY EEEEEEEEEEEEE GGGGGGGGGGG',
    };

    const info =  transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
});


app.get('/get', (req, res) => {
  const data = { message: 'This is the response data' };
  res.json(data);
  console.log("resdata get",res.json(data));
});







const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
