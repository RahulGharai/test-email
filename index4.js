const express = require('express');
const app = express();
const parser = require("body-parser"); 
const nodemailer = require('nodemailer');

app.use(parser.json());



app.post('/email', (req, res) => {

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
        from: 'gharairahul05@gmail.com',
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