//Express 
const express = require('express');
//AJV Validation Library
const { Validator } = require("express-json-validator-middleware");
const { validate } = new Validator();
//Filestream 
const fs = require('fs');
const multer = require('multer'); //Multer for Image Uploading
var storage = multer.diskStorage({ //Image path config
	destination: function (req, file, callback) {
		callback(null, `${__dirname}/../tmp/images/${file.fieldname}/`);
	},
	filename: function (req, file, callback) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + ".jpg";
		const fileName = file.fieldname + '-' + uniqueSuffix;
		req.fileName = fileName;
		callback(null, fileName);
	}
});
var upload = multer({
	storage: storage, //Image File config
	fileFilter: (req, file, callback) => {
		if (file.mimetype !== 'image/jpeg') { //Only allow jpg files to be uplaoded
			return callback(new Error('File uploaded is not .jpg image file'));
		}
		callback(null, true);
	},
	limits: {
		fileSize: 1000000, //Maximum 1MB(1000000 Byte) files to be uploaded
		files: 1 //Maximum one files to be uploaded
	}
});

module.exports = router;