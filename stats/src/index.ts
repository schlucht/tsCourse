import { CsvFileReader } from './csvFileReader';
import { BankReader } from './bankReader';
import { ConsoleReport } from './reports/consoleReport';
import { SumInAmount } from './analyzer/sumInAmount';
import { Summery } from './summery';

const csvReader = new CsvFileReader('Januar.csv', ';');
const bankReader = new BankReader(csvReader);
bankReader.load();
console.log(bankReader.matches);
const summery = new Summery(new SumInAmount(), new ConsoleReport());

console.log(summery.buildAndReport(bankReader.matches));
