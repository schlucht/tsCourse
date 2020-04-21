"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
// Übergabe eines CSV Files
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName, seperator) {
        this.fileName = fileName;
        this.seperator = seperator;
        this.data = [];
        this.fs = fs;
        if (this.checkCSV()) {
            throw new Error("Isn't a csv File.");
        }
    }
    CsvFileReader.prototype.read = function () {
        var _this = this;
        this.data = this.fs
            .readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (s) {
            return s.split(_this.seperator);
        });
    };
    CsvFileReader.prototype.checkCSV = function () {
        return path.extname(this.fileName) === '';
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
