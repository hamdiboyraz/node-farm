const fs = require('fs');
const http = require('http')
const url = require('url')
/* 
// Blocking, synchronous way
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", "utf-8");
console.log("File written!");

// Non-blocking, asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log("2", data);
});
console.log("1", "Will read file!");

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR! 💥");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written 😁");
      });
    });
  });
});
 */

/*
    //instead of arrow function(ES6)
    function(err, data) {

    } 
*/

//////////////////////////////////
// SERVER
/* const server = http.createServer((req, res) => {
    res.end('Hello from the server!')
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
}) */

////////////////////////////////////
// ROUTING
const server = http.createServer((req, res) => {
    console.log(req.url);
    
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else  {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-type': 'hello-world'
        });
        res.end('<h1>Page Not Found</h1>')
    }    
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000');
})