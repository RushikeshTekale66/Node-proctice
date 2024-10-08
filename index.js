const url = require("url");

const adr = "https://www.w3schools.com/nodejs/shownodejs.asp?filename=demo_http_header";

const q = url.parse(adr, true);

console.log(q);
console.log("Protocol is : ", q.protocol);
console.log("Host/Domain name is : ", q.host);
console.log("Path name is : ", q.path);
console.log("Query is : ", q.query);
console.log("File is : ", q.query.filename);





