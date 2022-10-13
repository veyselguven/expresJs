const express = require("express");
const router = express.Router();
const path = require("path");

//   /admin/add-product  GET  => cunku routera ole verdik
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

//   /admin/add-product  POST  => cunku routera ole verdik
router.post("/add-product", (req, res, next) => {
  // database kayit
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
