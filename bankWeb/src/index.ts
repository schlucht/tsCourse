import { bankCsvText } from './api/csvText';
import { BankReader } from './bankReader';
import { BankSummary } from './model/bankSummary';
import { formatDate, formatCurrency } from './utils/dateUtils';

const bankDates = BankReader.fromCsvText(bankCsvText);
const dates = bankDates.matches;
const groupsMonth = new BankSummary(dates, 'Month Group');
console.log(groupsMonth);

const app = document.getElementById('app')! as HTMLDivElement;
const tbl = document.createElement('table')! as HTMLTableElement;
function openDetails(data) {
    console.log(data);
}
tbl.classList.add('tbl_data');
let tr: HTMLTableRowElement;
let btn: HTMLButtonElement;

tr = document.createElement('tr');

tr.innerHTML = `    
    <th>Datum</th>
    <th>Beschreibung</th>
    <th>Beträge</th>
    <th>Kommuliert</th>
    <th>Bezahlt am</th>
    <th>Ausgaben</th>    
`;
tbl.append(tr);
for (let dat of dates) {
    tr = document.createElement('tr');
    btn = document.createElement('button');
    btn.id = `details_${dat.id}`;
    btn.innerText = 'Details';
    btn.addEventListener('click', event => {
        console.log(event.target);
    });
    tr.innerHTML = `       
        <td>${formatDate(dat.date)}</td>
        <td>${dat.text}</td>
        <td>${formatCurrency(dat.amount)}</td>
        <td>${dat.ballance}</td>
        <td>${formatDate(dat.datePay)}</td>
        <td style="color: ${dat.isCashOut ? 'red' : 'green'}">
            ${dat.isCashOut ? '-' : '+'}
        </td>    
        <td>${btn.outerHTML}</td>
    `;
    tbl.append(tr);
}
app.append(tbl);
g