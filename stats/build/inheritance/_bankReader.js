"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var csvReader_1 = require("./csvReader");
var BankReader = /** @class */ (function (_super) {
    __extends(BankReader, _super);
    function BankReader(filename) {
        var _this = _super.call(this, filename) || this;
        _this.filename = filename;
        return _this;
    }
    BankReader.prototype.mapRow = function (row) {
        return {
            card: row[0],
            date: new Date(row[1]),
            amount: parseFloat(row[3]),
            ballance: parseFloat(row[4]),
            datePay: new Date(row[5])
        };
    };
    return BankReader;
}(csvReader_1.CsvFileReader));
exports.BankReader = BankReader;
