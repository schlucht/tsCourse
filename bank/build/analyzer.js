"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summery = /** @class */ (function () {
    function Summery(analyzer) {
        this.analyzer = analyzer;
    }
    Summery.prototype.build = function (matches) {
        return this.analyzer.run(matches);
    };
    return Summery;
}());
exports.Summery = Summery;
