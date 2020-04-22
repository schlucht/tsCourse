import { IBankData } from "./model/bankData";

export interface IAnalyzer<T> {
  run(bankData: IBankData[]): T;
}
export interface IOutputTarget {
  print(report: string): void;
}

export class Summery<T> {
  constructor(public analyzer: IAnalyzer<T>) {}

  build(matches: IBankData[]): T {
    return this.analyzer.run(matches);
  }
}
