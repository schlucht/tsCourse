import { IAnalyzer } from '../summery';
import { BankData } from '../bankData';

export class SumInAmount implements IAnalyzer {
    matches: BankData[] = [];
    constructor() {}
    run(matches: BankData[]): string {        
        let sum: number = 0;
        for (let match of matches) {
            if (match.amount > 0) {
                sum += match.amount;
            }
        }
        return `Summe aller einnahmen: ${sum}`;
    }
}
