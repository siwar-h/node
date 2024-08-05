var http=require("http");
const host = 'localhost';
const port = 3000;
const requestListener = function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(' « <h1>Bonjour Node !!!!</h1>\n »')
      res.end()
    }
  }  
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running at http: //localhost:${port}`);
});