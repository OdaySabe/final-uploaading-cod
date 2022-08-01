const http = require("http");
const server = http.createServer(function (request, respose) {
  respose.writeHead(200, { ContentType: `text / plain` });
  respose.write("hello,world!");
  respose.end();
});
const port = 3000;
server.listen(port, function () {
  console.log(`Node server created at port ${port}`);
});
