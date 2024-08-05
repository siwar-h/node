nodemailer=require("nodemailer");



process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var transporter = nodemailer.createTransport({
  service: 'https://yopmail.com',
  auth: {
    user: 'siwar2@yopmail.com',
    pass: 'test'
  }
});

var mailOptions = {
  from: 'siwar2@yopmail.com',
  to: 'siwa2r@yopmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
fs.appendFile('email-sender',  'email', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});