import { BankReader } from './bankReader';
import { IBankData } from './model/bankData';
import { BankSummary } from './model/bankSummary';
import { BankGroupMonth } from './model/bankGroupMonth';
import { BankParameter, BankParameterList } from './model/parameters/parameter';
import { List } from './utils/list';
const csvPath = `C:/Users/lothi_000/Documents/Programmierung/tsCourse/bank/2019_Test.csv`;
const bankDates: IBankData[] = BankReader.fromCsv(csvPath).matches;

const summary = new BankSummary(bankDates, csvPath);
// console.log(summary.SumCashIn);
// console.log(summary.SumCashOut);

const bankMonth = new BankGroupMonth();
const bankGroupes = bankMonth.createGroup(summary);
// console.log(bankGroupes[0]);
// console.log(bankGroupes[1]);

const params = { className: 'Essen', paramNames: ['Aldi', 'Lidl'] };
const params1 = { className: 'Auto', paramNames: ['Migrolino', 'BUNDESBAHN'] };
const params2 = { className: 'Bank', paramNames: ['NetZone'] };
const params3 = {
    className: 'Bank',
    paramNames: ['Raiffaisen', 'NetZone', 'Haus']
};

const li = new BankParameterList();
li.add(params);
li.add(params1);
li.add(params2);
li.add(params3);
console.log(li.sort(false));
