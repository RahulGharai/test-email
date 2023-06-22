
const nodemailer = require('nodemailer');

const sendMail =()=>{

    console.log("hello");
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure:false,
        logger: true,
        debug: true,
        auth:{
            user:'gharairahul05@gmail.com',
            pass:'telrwctpsapasdfv'
        }
    });
    let mailOptions = {
        from: 'gharairahul05@gmail.com',
        to:'adakdeepanjan123@gmail.com',
        subject:'Welcome to Feedsense',
        text:`you are Sucessfully logged in and password is $(retval)`
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log("error",error);
            
        }
        else{
            console.log('Email sent: '+ info.response);
            
        }
       
    });
  }


  sendMail();