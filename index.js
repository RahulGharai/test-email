
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
// app.use(cors({
//   origin: 'http://localhost:8080',
//   optionsSuccessStatus: 200, // Some legacy browsers (e.g., IE 11) choke on 204
// }));


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
    res.status(200).send({
      status: true,
      data: info.messageId,
      msg: "email sent successfylly"
    });

    // console.log('Email sent:', info.messageId);
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
        res.status(200).send({
          status: true,
          data: info.response,
          msg: "email sent successfylly"
        });
          console.log('Email sent: '+ info.response);
          
      }
     
  });


});

app.post('/brevo-email', (req, res) => {
  let transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure:false,
      logger: true,
      debug: true,
      auth:{
          // user:'gharairahul05@gmail.com',
          // pass:'telrwctpsapasdfv',
          user:'aryasantu41@gmail.com',
          pass:'0FBskta5PRTV7GrS',
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
        res.status(200).send({
          status: true,
          data: info.response,
          msg: "email sent successfylly"
        });
          console.log('Email sent: '+ info.response);
          
      }
     
  });


});

app.use('/getstockbysearch', async (req, res) => {
  const { q } = req.query;
  const url = `https://groww.in/v1/api/search/v1/entity?app=false&page=0&q=${q}&size=6`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use('/getstockbytopgainer', async (req, res) => {
  const { q } = req.query;
  const url = `https://groww.in/v1/api/stocks_data/explore/v2/indices/GIDXNIFTY100/market_trends?discovery_filter_types=TOP_GAINERS&size=${q}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use('/getstockbytoploosers', async (req, res) => {
  const { q } = req.query;
  const url = `https://groww.in/v1/api/stocks_data/explore/v2/indices/GIDXNIFTY100/market_trends?discovery_filter_types=TOP_LOSERS&size=${q}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});


// app.use('/stock', async (req, res) => {

//   const url = `https://groww.in/v1/api/groww_news/v1/stocks_news/news?page=0&size=5`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });









const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
