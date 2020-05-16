import { IBankData } from "../model/bankData";
import { formatDate, formatCurrency } from '../utils/dateUtils';
import { BankSummary } from '../model/bankSummary';

export class RenderTable {

    

    constructor(private data: BankSummary, private tblRoot: HTMLTableElement) {
        // this.renderHeader()
        this.renderThContent()
        this.renderTDContent(this.data.bankData);
        this.renderFooter(125, 125)

    }

    private renderThContent(): void {
        const thead = document.createElement('thead')
        const tr = document.createElement('tr')
        tr.innerHTML = ` <th>Datum</th>
        <th>Beschreibung</th>
        <th>Ausgaben</th>
        <th>Einnahmen</th>
        <th>Komuliert</th>
        <th>-</th>    
        `
        thead.appendChild(tr)
        this.tblRoot.appendChild(thead)
        
    }
    private renderTDContent(data: IBankData[]): void {
        let tr: HTMLTableRowElement
        let btn: HTMLButtonElement
        const thead = document.createElement('tbody')
        if (data) {
            for (let dat of data) {
                tr = document.createElement('tr') as HTMLTableRowElement
                btn = document.createElement('button');
                btn.id = `details_${dat.id}`;
                btn.innerText = 'Details';
                btn.addEventListener('click', event => {
                    console.log(dat);
                });
                let td
                
                    td = document.createElement('td')
                    
               
                tr.innerHTML = `       
                    <td class="tbl-date">${formatDate(dat.date)}</td>
                    <td class="tbl-text">${dat.text}</td>
                    <td class="tbl-currency">${dat.isCashOut ? formatCurrency(dat.amount) : "-"}</td>
                    <td class="tbl-currency"">${dat.isCashOut ? "-" : formatCurrency(dat.amount)}</td>
                    <td class="tbl-currency">${formatCurrency(dat.ballance)}</td>
                    <td class="tbl-cashout">
                        <span class="${dat.isCashOut ? "tbl___iscashout" : "tbl___iscashin"}"></span>
                    </td>  
                `;
                td.appendChild(btn)             
                tr.appendChild(td)
                thead.appendChild(tr)
            }
            this.tblRoot.append(thead);
        }

    }
    // private renderHeader(): void {
    //     const header = document.createElement('thead') as HTMLTableSectionElement
    //     header.innerHTML = `<h1>Hier der Titel der Tabelle</h1>`
    //     this.tblRoot.appendChild(header)
    // }
    private renderFooter(currOut: number, currIn: number) {
        const footer = document.createElement('tfoot') as HTMLTableSectionElement     
        const tr = document.createElement('tr')   

        footer.innerHTML = `
        <tr>
            <td class="tbl-footer" colspan="2">Total: </td>
            <td class="tbl-currency">${currOut}</td>            
            <td class="tbl-currency">${currIn}</td>            
        </tr>        
        `

        this.tblRoot.appendChild(footer)
    }
}
