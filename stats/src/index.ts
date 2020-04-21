import { CsvFileReader } from './csvFileReader';
import { BankReader } from './bankReader';
import { HtmlReport } from './reports/htmlReport';
import { ConsoleReport } from './reports/consoleReport';
import { SumInAmount } from './analyzer/sumInAmount';
import { Summery } from './summery';

const bankReader = BankReader.fromCsv('Januar.csv');

console.log(bankReader.matches);
const summery = new Summery(new SumInAmount(), new HtmlReport());

summery.buildAndReport(bankReader.matches);
