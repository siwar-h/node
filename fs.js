var fs=require("fs");
fs.appendFile('hello-world.js', 'Hello World', function (err) {
    if (err) throw err;
    console.log('Saved!');
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