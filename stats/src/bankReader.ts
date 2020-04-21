import { BankData } from './bankData';
import { CsvFileReader } from './csvFileReader';

interface IDataReader {
    read(): void;
    data: string[][];
}

export class BankReader {
    static fromCsv(fileName: string): BankReader {
        return new BankReader(new CsvFileReader(fileName, ';'));
    }
    matches: BankData[] = [];
    constructor(public reader: IDataReader) {
        this.load();
    }
    private load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): BankData => {
                return {
                    card: row[0],
                    date: new Date(row[1]),
                    amount: parseFloat(row[3]),
                    ballance: parseFloat(row[4]),
                    datePay: new Date(row[5])
                };
            }
        );
    }
}
