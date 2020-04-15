import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];
    constructor(public fileName: string, public seperator: string) {}
    read(): void {
        this.data = fs
            .readFileSync(this.fileName, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((s: string): string[] => {
                return s.split(this.seperator);
            });
    }
}
