import { IBankData } from './model/bankData';
import { CsvFileReader } from './readCSV/csvFileReader';
import { CsvTextReader } from './readCSV/csvTextReader';

interface IDataReader {
    read(): void;
    data: string[][];
}

export class BankReader {
    static fromCsv(fileName: string): BankReader {
        return new BankReader(new CsvFileReader(fileName, ';'), fileName);
    }
    static fromCsvText(stringName: string): BankReader {
        return new BankReader(new CsvTextReader(stringName, ';'), stringName);
    }
    matches: IBankData[] = [];

    constructor(public reader: IDataReader, public filename: string) {
        this.load();
    }
    private load(): void {
        this.reader.read();

        let bankes: IBankData[] = [];
        let newFile = 0;
        let result = this.reader.data;
        newFile = result[0][0].indexOf('IBAN') === -1 ? 0 : 1;

        for (let i = 1; i < result.length; i++) {
            // Bei einer Leerzeile
            if (result[i].length === 1) {
                continue;
            }
            // Wenn der Text auf zwei Zeilen aufgeteilt ist
            if (result[i][0] !== '') {
                let txt = result[i][1 + newFile];
                // Die letzte Zeile eine Korrekte Zeile ist. Sonst gibt es einen O index Fehler.
                if (i + 1 < result.length) {
                    if (result[i + 1][0] === '') {
                        txt += ' ' + result[i + 1][1 + newFile];
                    }
                }
                bankes.push({
                    id: i,
                    card: newFile === 1 ? result[i][0] : '',
                    date: new Date(result[i][0 + newFile]),
                    text: txt,
                    amount: parseFloat(result[i][2 + newFile]) * 1,
                    ballance: parseFloat(result[i][3 + newFile]),
                    datePay: new Date(result[i][4 + newFile]),
                    isCashOut: parseFloat(result[i][2 + newFile]) < 0
                });
            }
        }
        // console.log(bankes);
        this.matches = bankes;
    }
}

/*getBankDates(file: any): Observable<BankGroup[]> {
    const bankGroupes: BankGroup[] = [];
    
    return this.parseCSVBank(file).pipe(            
        map(value => {
            bankGroupes.push(new BankGroup('alles', new Banklist(value)));
            return value
                .map(b => {
                    return {
                        ...b,
                        month: this.monthName[b.date.getMonth()],
                    };
                })
                .reduce((acc, obj) => {
                    let key = obj['month'];
                    if (!acc[key]) {
                        acc[key] = [];
                    }
                    acc[key].push(obj);
                    return acc;
                }, {});
        }),
        map(date => {
            // console.log('Date: ', date[2]);
            let bankGroup: BankGroup;
            for (const bank in date) {
                if (date.hasOwnProperty(bank)) {
                    const element = date[bank];
                    bankGroup = new BankGroup(bank, new Banklist(element));
                    bankGroupes.push(bankGroup);
                }
            }
            // console.log(bankGroupes);
            return bankGroupes;
        })
    );
}
/**
 * IBAN;Booked At;Text;Amount;Balance;Valuta Date
0: CH4280553000008723183;
1: 2019-01-03 00:00:00.0;
2: Lastschriftverfahren sodalis gesundheitsgruppe;
3: -476.95;
4: 39141.61;
5: 2019-01-03 00:00:00.0
 */

/**
  * Booked At;Text;Amount;Balance;Valuta Date
0: 2017-01-03;
1: E-Banking Sammelauftrag aus Einzelzahlungen;
2: -16768;
3: 3891.62;
4: 2017-01-03
  */
