var nodemailer = require('nodemailer');


exports.sendMail = function(to)
{
    var transporter = nodemailer.createTransport({
        host: '74.125.200.108',
        port: 465,
        secure: true,
        auth: {
          user: 'mhsntest10@gmail.com',
          pass: 'Wazza@10'
        }
      });
      var mailOptions = {
        from: 'mhsntest10@gmail.com',
        to: user.Email,
        subject: 'Email Verification - BillingBuddy',
        html: '<h1>Welcome</h1><p>That was easy!</p>'
      }
      console.log("**** Sending Mail *****");
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.warn(error);
         // return false;
        } else {
          console.log('Email sent: ' + info.response);
         // return true;
        }
      });
      console.log("********** Send Complete********");
}

