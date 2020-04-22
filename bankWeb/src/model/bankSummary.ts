import { IBankData } from "./bankData";

export class BankSummary {
  private _sumCashOut: number = 0;
  get SumCashOut(): number {
    return this._sumCashOut;
  }
  private _sumCashIn: number = 0;
  get SumCashIn(): number {
    return this._sumCashIn;
  }
  constructor(public bankData: IBankData[], public title: string) {
    this.sum();
  }
  private sum(): void {
    this.bankData.forEach((value: IBankData) => {
      if (value.isCashOut) {
        this._sumCashOut += value.amount;
      } else {
        this._sumCashIn += value.amount;
      }
    });
  }
}
