"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bankReader_1 = require("./bankReader");
var bankSummary_1 = require("./model/bankSummary");
var bankGroupMonth_1 = require("./model/bankGroupMonth");
var parameter_1 = require("./model/parameters/parameter");
var csvPath = "C:/Users/lothi_000/Documents/Programmierung/tsCourse/bank/2019_Test.csv";
var bankDates = bankReader_1.BankReader.fromCsv(csvPath).matches;
var summary = new bankSummary_1.BankSummary(bankDates, csvPath);
// console.log(summary.SumCashIn);
// console.log(summary.SumCashOut);
var bankMonth = new bankGroupMonth_1.BankGroupMonth();
var bankGroupes = bankMonth.createGroup(summary);
// console.log(bankGroupes[0]);
// console.log(bankGroupes[1]);
var params = { className: 'Essen', paramNames: ['Aldi', 'Lidl'] };
var params1 = { className: 'Auto', paramNames: ['Migrolino', 'BUNDESBAHN'] };
var params2 = { className: 'Bank', paramNames: ['NetZone'] };
var params3 = {
    className: 'Bank',
    paramNames: ['Raiffaisen', 'NetZone', 'Haus']
};
var li = new parameter_1.BankParameterList();
li.add(params);
li.add(params1);
li.add(params2);
li.add(params3);
console.log(li.sort(false));
