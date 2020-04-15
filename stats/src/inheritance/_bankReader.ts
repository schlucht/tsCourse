import { CsvFileReader } from './csvReader';

interface BankData {
    card: string;
    date: Date;
    amount: number;
    ballance: number;
    datePay: Date;
}
export class BankReader extends CsvFileReader<BankData> {
    constructor(public filename: string) {
        super(filename);
    }
    mapRow(row: string[]): BankData {
        return {
            card: row[0],
            date: new Date(row[1]),
            amount: parseFloat(row[3]),
            ballance: parseFloat(row[4]),
            datePay: new Date(row[5])
        };
    }
}
