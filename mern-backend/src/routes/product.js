const express = require("express");
const multer = require("multer");
const shortid = require('shortid')
const path = require('path');
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { createProduct } = require("../controller/product");

const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

router.post(
    "/product/create",
    requireSignin,
    adminMiddleware,
    upload.single("productPicture"),
    createProduct
);

//router.get('/product/fetch', getCategory)

module.exports = router;
