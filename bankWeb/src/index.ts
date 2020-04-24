import { bankCsvText } from './api/csvText';
import { BankReader } from './bankReader';
import { BankSummary } from './model/bankSummary';
import { RenderTable } from './views/table';


const bankDates = BankReader.fromCsvText(bankCsvText);
const dates = bankDates.matches;
const groupsMonth = new BankSummary(dates, 'Month Group');
console.log(groupsMonth);

const app = document.getElementById('app')! as HTMLDivElement;
const tbl = document.createElement('table')! as HTMLTableElement;

new RenderTable(dates, tbl)

app.appendChild(tbl)
