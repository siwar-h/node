var fs=require("fs");
const generatePassword = require('generate-password');

fs.appendFile('hello-world.js', 'Hello World', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
var http=require("http");
const host = 'localhost';
const port = 3000;
const requestListener = function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('` « <h1>Bonjour Node !!!!</h1>\n »`')
    res.end()
  }
  
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running at http: //localhost:${port}`);
});

fs.appendFile('welcom.txt', '« Hello Node »', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  fs.readFile('./welcom.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log('File content:', data);
});

fs.appendFile('password-generator',  'passworde', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true, 
        uppercase: true, 
        lowercase: true 
    });

    console.log('Mot de passe généré :', password);
}
generateRandomPassword();
fs.appendFile('email-sender',  'email', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
var nodemailer=require("nodemailer");



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

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});