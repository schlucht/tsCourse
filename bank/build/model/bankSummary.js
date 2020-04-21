"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankSummary = /** @class */ (function () {
    function BankSummary(bankData, title) {
        this.bankData = bankData;
        this.title = title;
        this._sumCashOut = 0;
        this._sumCashIn = 0;
        this.sum();
    }
    Object.defineProperty(BankSummary.prototype, "SumCashOut", {
        get: function () {
            return this._sumCashOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BankSummary.prototype, "SumCashIn", {
        get: function () {
            return this._sumCashIn;
        },
        enumerable: true,
        configurable: true
    });
    BankSummary.prototype.sum = function () {
        var _this = this;
        this.bankData.forEach(function (value) {
            if (value.isCashOut) {
                _this._sumCashOut += value.amount;
            }
            else {
                _this._sumCashIn += value.amount;
            }
        });
    };
    return BankSummary;
}());
exports.BankSummary = BankSummary;
