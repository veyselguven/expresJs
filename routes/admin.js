const express = require("express");
const router = express.Router();

//   /admin/add-product  GET  => cunku routera ole verdik
router.get("/add-product", (req, res, next) => {
  res.send(`<html>
  <head>
  <title>
  Add a new product </title>
  <body>
  <form action="/admin/add-product" method="POST">
  <input type="text" name="productName">
  <input type="submit" value="Save Product">
  </form>
  </body>
  </head>
  </html>
  `);
});

//   /admin/add-product  POST  => cunku routera ole verdik
router.post("/add-product", (req, res, next) => {
  // database kayit
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
