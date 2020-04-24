import { IBankData } from "../model/bankData";
import { formatDate, formatCurrency } from '../utils/dateUtils';

export class RenderTable {

    

    constructor(private data: IBankData[], private tblRoot: HTMLTableElement) {
        this.renderHeader()
        this.renderThContent()
        this.renderTDContent(this.data);
        this.renderFooter()

    }

    private renderThContent(): void {
        const thead = document.createElement('thead')
        const tr = document.createElement('tr')
        tr.innerHTML = ` <th>Datum</th>
        <th>Beschreibung</th>
        <th>Beträge</th>
        <th>Kommuliert</th>
        <th>Bezahlt am</th>
        <th>Ausgaben</th>    
        `
        thead.appendChild(tr)
        this.tblRoot.appendChild(thead)
        
    }
    private renderTDContent(data: IBankData[]): void {
        let tr: HTMLTableRowElement
        let btn: HTMLButtonElement
        if (data.length > 0) {
            for (let dat of data) {
                tr = document.createElement('tr') as HTMLTableRowElement

                btn = document.createElement('button');
                btn.id = `details_${dat.id}`;
                btn.innerText = 'Details';
                btn.addEventListener('click', event => {
                    console.log(event.target);
                });
                tr.innerHTML = `       
                    <td>${formatDate(dat.date)}</td>
                    <td>${dat.text}</td>
                    <td>${formatCurrency(dat.amount)}</td>
                    <td>${dat.ballance}</td>
                    <td>${formatDate(dat.datePay)}</td>
                    <td style="color: ${dat.isCashOut ? 'red' : 'green'}">
                        ${dat.isCashOut ? '-' : '+'}
                    </td>    
                    <td>${btn.outerHTML}</td>
                `;
                this.tblRoot.append(tr);
            }
        }
    }
    private renderHeader(): void {
        const header = document.createElement('thead') as HTMLTableSectionElement
        header.innerHTML = `<h1>Hier der Titel der Tabelle</h1>`
        this.tblRoot.appendChild(header)
    }
    private renderFooter() {
        const footer = document.createElement('tfoot') as HTMLTableSectionElement     
        const tr = document.createElement('tr')   

        footer.innerHTML = `
        <tr>
            <td></td>
            <td>Einnahmen</td>            
            <td>69879</td>
        </tr>
        <tr>
            <td></td>
            <td>Ausgaben</td>            
            <td>87990</td>
        </tr>
        `

        this.tblRoot.appendChild(footer)
    }
}