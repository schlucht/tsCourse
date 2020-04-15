"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summery = /** @class */ (function () {
    function Summery(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summery.prototype.buildAndReport = function (matches) {
        console.log('summery', matches);
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summery;
}());
exports.Summery = Summery;
