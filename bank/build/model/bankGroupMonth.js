"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var bankSummary_1 = require("./bankSummary");
var dateUtils_1 = require("../utils/dateUtils");
var BankGroupMonth = /** @class */ (function () {
    function BankGroupMonth() {
    }
    BankGroupMonth.prototype.createGroup = function (dates) {
        var bankDates = dates.bankData;
        var bankGroupes = [];
        if (bankDates === null) {
            throw new Error("Bankdata is NULL!");
        }
        var grpLi = bankDates
            .map(function (value) {
            return __assign(__assign({}, value), { month: dateUtils_1.monthName[value.datePay.getMonth()] });
        })
            .reduce(function (acc, obj) {
            var key = obj['month'];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
        // console.log(grpLi);
        for (var b in grpLi) {
            bankGroupes.push(new bankSummary_1.BankSummary(grpLi[b], b));
        }
        return bankGroupes;
    };
    return BankGroupMonth;
}());
exports.BankGroupMonth = BankGroupMonth;
/*groupBankDates(
        banklist: Banklist,
        parameters: IBankParameter[]
    ): Observable<BankGroup[]> {
        const listBankDate = banklist.BankListe;
        const cloneList = banklist.BankListe;
        let bankGroup: BankGroup;
        let bankGroups: BankGroup[] = [];
        let groupName: string;
        let filteredList: IBank[] = [];

        return new Observable(observer => {
            // console.log('Service: ', listBankDate);
            // console.log('Service: ', parameters);
            for (let param of parameters) {
                groupName = param.name;
                bankGroup = new BankGroup(groupName);
                filteredList = [];
                // console.log('%c' + groupName, 'color:orange');
                for (let krit of param.params) {
                    for (let i = 0; i < listBankDate.length; i++) {
                        if (listBankDate[i].text.toUpperCase().indexOf(krit) > -1) {
                            filteredList.push(listBankDate[i]);
                            cloneList.splice(i, 1);
                        }
                    }
                }
                bankGroup.bankDates = new Banklist(filteredList);
                bankGroups.push(bankGroup);
            }
            bankGroups.push(new BankGroup('Allgemein', new Banklist(cloneList)));
            observer.next(bankGroups);
        });
    }
    
*/
