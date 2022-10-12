const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));

//routers
app.use("/admin", adminRoutes);
app.use(userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello Veysel");
// });
// const api = "/api/product";
// app.get(api, (req, res) => {
//   res.send("Listed Product");
// });

// app.use((req, res, next) => {
//   console.log("middleware 1 is running");
//   next(); // eger bu olmasa asasgidaki calismaz, cunku bu olmasa geriye response dondurur
// });
// app.use("/", (req, res, next) => {
//   console.log("Loglama yapildi");
//   next();
// });
// app.use("/add-list", (req, res, next) => {
//   res.send("<h1>Product listing page</h1>");
// });

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port 300");
});
