import { BankSummary } from "./bankSummary";

export interface IBankData {
  id: number;
  card: string;
  date: Date;
  text: string;
  amount: number;
  ballance: number;
  datePay: Date;
  isCashOut: boolean;
}
export interface IBankGroup {
  createGroup(dates: BankSummary): BankSummary[];
}
