"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SumInAmount = /** @class */ (function () {
    function SumInAmount() {
        this.matches = [];
    }
    SumInAmount.prototype.run = function (matches) {
        var sum = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match.amount > 0) {
                sum += match.amount;
            }
        }
        return "Summe aller einnahmen: " + sum;
    };
    return SumInAmount;
}());
exports.SumInAmount = SumInAmount;
