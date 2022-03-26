"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const utitlize_1 = require("../../utilizes/utitlize");
const resize_1 = require("../../utilizes/resize");
const images_path = (0, express_1.Router)();
let allImages = ['fjord', 'fjord'];
images_path.get('/', (req, res) => {
    let imageName = req.query.name;
    const imagePath = path_1.default.resolve('./') + `/images/${req.query.name}.jpg`;
    const resizedImagePath = path_1.default.resolve('./') +
        `/images/resizedImage/${req.query.name}_${req.query.width}_${req.query.height}.jpg`;
    const widthQuery = req.query.width;
    const heightQuery = req.query.height;
    if (req.query.name === undefined) {
        return res.status(400).send('image not exist');
    }
    if (!req.query.name || !req.query.width || !req.query.height) {
        return res
            .status(400)
            .send('Please provide all specifications [ name , width , height]');
    }
    if (!/^[a-zA-Z]+$/.test(req.query.name) ||
        !/^\d+$/.test(req.query.width) ||
        !/^\d+$/.test(req.query.height))
        return res
            .status(404)
            .send('Please provide name as string and width , height as numbers');
    if (req.query.width <= 0 || req.query.height <= 0)
        return res.status(4040).send(' width , height as must be > 0');
    if (allImages.includes(imageName) === false) {
        return res.status(404).send('not found');
    }
    if (!(0, utitlize_1.checkForImageExist)(resizedImagePath)) {
        let width, height;
        if (widthQuery) {
            width = parseInt(widthQuery);
        }
        if (heightQuery) {
            height = parseInt(heightQuery);
        }
        (0, resize_1.resizeImage)(imageName, imagePath, width, height).pipe(res);
    }
    else {
        res.sendFile(resizedImagePath);
    }
});
exports.default = images_path;
