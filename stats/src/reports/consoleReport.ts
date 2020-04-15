import { IOutputTarget } from '../summery';
import { SumInAmount } from '../analyzer/sumInAmount';

export class ConsoleReport implements IOutputTarget {
    print(data: string): void {
        console.log(data);
    }
}
