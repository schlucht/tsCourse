"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List() {
        this._items = [];
    }
    Object.defineProperty(List.prototype, "Count", {
        get: function () {
            return this._items.length;
        },
        enumerable: true,
        configurable: true
    });
    List.prototype.add = function (value) {
        this._items.push(value);
    };
    List.prototype.get = function (index) {
        return this._items[index];
    };
    return List;
}());
exports.List = List;
