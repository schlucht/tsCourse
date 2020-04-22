import { bankCsvText } from './api/csvText';
import { BankReader } from './bankReader';

const bankDates = BankReader.fromCsvText(bankCsvText);
console.log(bankDates.matches);
