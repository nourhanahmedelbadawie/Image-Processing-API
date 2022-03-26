"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
const sharp = require('sharp');
const fs = require('fs');
const path_1 = __importDefault(require("path"));
const resizeImage = (name, image, width, height) => {
    console.log(name, image, width, height);
    const readStream = fs.createReadStream(image);
    let transform = sharp();
    if (width || height) {
        transform = transform.resize(width, height);
    }
    sharp(image)
        .resize(width, height)
        .toFile(path_1.default.resolve('./') +
        `/images/resizedImage/${name}_${width}_${height}.jpg`, function (err) {
        console.log(err);
    });
    return readStream.pipe(transform);
};
exports.resizeImage = resizeImage;
