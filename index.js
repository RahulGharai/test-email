
  // sendEmail.js
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const smtpConfig = require('./smtpConfig.js');
const parser = require("body-parser"); 
const cors = require("cors");
// const apikey = "E3EE329B2279D6D8F36DD9A3FAB75A2EE41E52A77A7465A88E9565B001F170951C1CF0328373273F09D3FD886AA6849B"

app.use(parser.json());
app.use(cors({ origin: true }));


app.post('/elastic-email', (req, res) => {
  try {
    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      from: 'aryasantu41@gmail.com',
      to: req.body.email,
      subject: req.body.subject,
      text: req.body.text,
    };

    const info =  transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
});



app.post('/google-email', (req, res) => {
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure:false,
      logger: true,
      debug: true,
      auth:{
          // user:'gharairahul05@gmail.com',
          // pass:'telrwctpsapasdfv',
          user:'aryasantu41@gmail.com',
          pass:'stskfzmiqkjxiiin',
      }
  });
  let mailOptions = {
      from: 'aryasantu41@gmail.com',
      to: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  };
  transporter.sendMail(mailOptions,function(error,info){
      if(error){
          console.log("error",error);
          
      }
      else{
          console.log('Email sent: '+ info.response);
          
      }
     
  });


});









const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
