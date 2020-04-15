import { BankData } from './bankData';

export interface IAnalyzer {
    run(bankData: BankData[]): string;
}
export interface IOutputTarget {
    print(report: string): void;
}

export class Summery {
    constructor(
        public analyzer: IAnalyzer,
        public outputTarget: IOutputTarget
    ) {}

    buildAndReport(matches: BankData[]): void {
        console.log('summery', matches);
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
