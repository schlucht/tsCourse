"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName, seperator) {
        this.fileName = fileName;
        this.seperator = seperator;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        var _this = this;
        this.data = fs_1.default
            .readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (s) {
            return s.split(_this.seperator);
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
