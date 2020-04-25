import { bankCsvText } from './api/csvText';
import { BankReader } from './bankReader';
import { BankSummary } from './model/bankSummary';
import { BankGroupMonth } from './model/bankGroupMonth';
import { RenderTable } from './views/table';


const bankDates = BankReader.fromCsvText(bankCsvText);
const dates = bankDates.matches;
const groupsMonth = new BankSummary(dates, 'Month Group');
console.log(groupsMonth);
const  bg = new BankGroupMonth()
const grp = bg.createGroup(groupsMonth)
const app = document.getElementById('app')! as HTMLDivElement;
const tbl = document.createElement('table')! as HTMLTableElement;
for (let g of grp ) {
    new RenderTable(g, tbl)
}

app.appendChild(tbl)
