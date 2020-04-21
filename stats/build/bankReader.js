"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csvFileReader_1 = require("./csvFileReader");
var BankReader = /** @class */ (function () {
    function BankReader(reader) {
        this.reader = reader;
        this.matches = [];
        this.load();
    }
    BankReader.fromCsv = function (fileName) {
        return new BankReader(new csvFileReader_1.CsvFileReader(fileName, ';'));
    };
    BankReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return {
                card: row[0],
                date: new Date(row[1]),
                amount: parseFloat(row[3]),
                ballance: parseFloat(row[4]),
                datePay: new Date(row[5])
            };
        });
    };
    return BankReader;
}());
exports.BankReader = BankReader;
