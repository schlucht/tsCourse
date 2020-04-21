import { Cipher } from 'crypto';

export interface IBankParameter {
    className: string;
    paramNames: string[];
}

export class BankParameter implements IBankParameter {
    constructor(public className: string, public paramNames: string[]) {}
}

/**
 * @summary Klasse zum speichern und verwalten von Bankparametern
 */
export class BankParameterList {
    _list: IBankParameter[] = [];
    constructor() {}
    /**
     * @returns Liste mit allen Bankparametern
     */
    get BankList(): IBankParameter[] {
        return this._list;
    }
    /**
     *
     * @param param : IBankParameter der zu speichernde wert
     * @returns void
     * @summary Fügt ein Parameter der Liste hinzu. Es wird auf doppelte Einträge
     * überprüft
     */
    add(param: IBankParameter): void {
        let name = param.className;
        let params = param.paramNames;
        // Prüft ob ein 'className' existiert
        let exist = this._list.find((f: IBankParameter) => {
            return f.className === name;
        });

        if (exist === undefined) {
            this._list.push(param);
        } else {
            // Prüft ob ein Wert schon in der Parameterliste existiert
            params.forEach((p: string) => {
                if (exist?.paramNames.indexOf(p) < 0) {
                    exist?.paramNames.push(p);
                }
            });
        }
    }
    /**
     * Gibt ein Bankparameter aus einer Liste zurück
     * @returns Bankparameter Item
     * @param index: number
     *
     */
    get(index: number): IBankParameter {
        return this._list[index];
    }
    /**
     * Sortiert die Daten
     * @returns sorted List of BankParameter
     * @param asc: boolean true = absteigend false = aufsteigend
     */
    sort(asc: boolean): IBankParameter[] {
        return this._list.sort((a: IBankParameter, b: IBankParameter) => {
            if (a.className > b.className) {
                return asc ? -1 : 1;
            }
            if (a.className < b.className) {
                return asc ? 1 : -1;
            }
            return 0;
        });
    }
}
