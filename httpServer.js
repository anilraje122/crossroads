const http = require("http");
const fs = require("fs");
const url = require("url");

const port = process.env.port || 3001;

const httpServer = http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    if (q.pathname === "/") {
      fs.readFile("sampleHTML.html", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write("Server Error");
          console.log(err);
          return res.end();
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/signup") {
      fs.readFile("signup.html", (err, data) => {
        if (err) {
        }
        res.write(data);
        res.end();
      });
    } else if (q.pathname === "/signupaction") {
      console.log(q.query);
      res.write(
        `<h1>Hello ${q.query.fname} ${q.query.lname},</h1> <h2>Welcome to xyz solutions </h2>`
      );
      res.end();
    } else {
      res.write("Page not found");
      res.end();
    }
  })
  .listen(port, () => console.log(`Server listening on ${port}`));
