const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Veysel");
// });
// const api = "/api/product";
// app.get(api, (req, res) => {
//   res.send("Listed Product");
// });

app.use((req, res, next) => {
  console.log("middleware 1 is running");
  next(); // eger bu olmasa asasgidaki calismaz, cunku bu olmasa geriye response dondurur
});
app.use((req, res, next) => {
  console.log("middleware 2 is running");
  //...
  res.send("<h1>Hello from express</h1>");
});

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port 300");
});
