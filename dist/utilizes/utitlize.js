"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForImageExist = void 0;
const fs = require('fs');
const checkForImageExist = (path) => {
    if (fs.existsSync(path)) {
        return true;
    }
    else {
        return false;
    }
};
exports.checkForImageExist = checkForImageExist;
