import { IBankData, IBankGroup } from './bankData';
import { BankSummary } from './bankSummary';
import { monthName } from '../utils/dateUtils';

export class BankGroupMonth implements IBankGroup {
    constructor() {}

    createGroup(dates: BankSummary): BankSummary[] {
        const bankDates = dates.bankData;
        const bankGroupes: BankSummary[] = [];
        if (bankDates === null) {
            throw new Error(`Bankdata is NULL!`);
        }
        const grpLi = bankDates
            .map((value: IBankData) => {
                return {
                    ...value,
                    month: monthName[value.datePay.getMonth()]
                };
            })
            .reduce((acc: any, obj: any) => {
                let key = obj['month'];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {});
        // console.log(grpLi);
        for (let b in grpLi) {
            bankGroupes.push(new BankSummary(grpLi[b], b));
        }
        return bankGroupes;
    }
}

/*groupBankDates(
        banklist: Banklist,
        parameters: IBankParameter[]
    ): Observable<BankGroup[]> {
        const listBankDate = banklist.BankListe;
        const cloneList = banklist.BankListe;
        let bankGroup: BankGroup;
        let bankGroups: BankGroup[] = [];        
        let groupName: string;
        let filteredList: IBank[] = [];        

        return new Observable(observer => {
            // console.log('Service: ', listBankDate);
            // console.log('Service: ', parameters);
            for (let param of parameters) {
                groupName = param.name;
                bankGroup = new BankGroup(groupName);
                filteredList = [];
                // console.log('%c' + groupName, 'color:orange');
                for (let krit of param.params) {
                    for (let i = 0; i < listBankDate.length; i++) {
                        if (listBankDate[i].text.toUpperCase().indexOf(krit) > -1) {
                            filteredList.push(listBankDate[i]);        
                            cloneList.splice(i, 1);
                        }
                    }
                }
                bankGroup.bankDates = new Banklist(filteredList);
                bankGroups.push(bankGroup);
            }
            bankGroups.push(new BankGroup('Allgemein', new Banklist(cloneList)));
            observer.next(bankGroups);
        });                
    }
    
*/
