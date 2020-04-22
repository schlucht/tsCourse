





export class CSVTextReader {
    data: string[][] = [];

    constructor(public csVText: string, public seperator: string) {
        if (this.checkCSV()) {
            throw new Error("Isn't a csv File.");
        }
    }
    read(): void {
        this.data = this.csVText.split('\n').map((s: string): string[] => {
            return s.split(this.seperator);
        });
    }

    private checkCSV(): boolean {
        return this.csVText === '';
    }
}
