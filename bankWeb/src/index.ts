import { bankCsvText } from './api/csvText';
import { BankReader } from './bankReader';

const bankDates = BankReader.fromCsvText(bankCsvText);
console.log(bankDates.matches);

const app = document.getElementById('app')! as HTMLDivElement;
const tbl = document.createElement('table')! as HTMLTableElement;
