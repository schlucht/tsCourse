import * as path from 'path';
import * as fs from 'fs';

// Übergabe eines CSV Files
export class CsvFileReader {
    data: string[][] = [];

    private fs = fs;

    constructor(public fileName: string, public seperator: string) {
        if (this.checkCSV()) {
            throw new Error("Isn't a csv File.");
        }
    }
    read(): void {
        this.data = this.fs
            .readFileSync(this.fileName, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((s: string): string[] => {
                return s.split(this.seperator);
            });
    }

    private checkCSV(): boolean {
        return path.extname(this.fileName) === '';
    }
}
