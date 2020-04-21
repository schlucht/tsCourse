import fs from 'fs';
import { IOutputTarget } from '../summery';

export class HtmlReport implements IOutputTarget {
    print(report: string) {
        const html = `
            <div>
                <h1>Analyses Output</h1>
                <div>${report}</div>
            </div>
        `;
        fs.writeFileSync('index.html', html);
    }
}
