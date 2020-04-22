"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankParameter = /** @class */ (function () {
    function BankParameter(className, paramNames) {
        this.className = className;
        this.paramNames = paramNames;
    }
    return BankParameter;
}());
exports.BankParameter = BankParameter;
/**
 * @summary Klasse zum speichern und verwalten von Bankparametern
 */
var BankParameterList = /** @class */ (function () {
    function BankParameterList() {
        this._list = [];
    }
    Object.defineProperty(BankParameterList.prototype, "BankList", {
        /**
         * @returns Liste mit allen Bankparametern
         */
        get: function () {
            return this._list;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @param param : IBankParameter der zu speichernde wert
     * @returns void
     * @summary Fügt ein Parameter der Liste hinzu. Es wird auf doppelte Einträge
     * überprüft
     */
    BankParameterList.prototype.add = function (param) {
        var name = param.className;
        var params = param.paramNames;
        // Prüft ob ein 'className' existiert
        var exist = this._list.find(function (f) {
            return f.className === name;
        });
        if (!exist) {
            this._list.push(param);
        }
        else {
            // Prüft ob ein Wert schon in der Parameterliste existiert
            params.forEach(function (p) {
                var b = exist === null || exist === void 0 ? void 0 : exist.paramNames.indexOf(p);
                if (b === undefined || b < 0) {
                    exist === null || exist === void 0 ? void 0 : exist.paramNames.push(p);
                }
            });
        }
    };
    /**
     * Gibt ein Bankparameter aus einer Liste zurück
     * @returns Bankparameter Item
     * @param index: number
     *
     */
    BankParameterList.prototype.get = function (index) {
        return this._list[index];
    };
    /**
     * Sortiert die Daten
     * @returns sorted List of BankParameter
     * @param asc: boolean true = absteigend false = aufsteigend
     */
    BankParameterList.prototype.sort = function (asc) {
        return this._list.sort(function (a, b) {
            if (a.className > b.className) {
                return asc ? -1 : 1;
            }
            if (a.className < b.className) {
                return asc ? 1 : -1;
            }
            return 0;
        });
    };
    return BankParameterList;
}());
exports.BankParameterList = BankParameterList;
