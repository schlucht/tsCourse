export class List<T> {
    private _items: Array<T>;

    constructor() {
        this._items = [];
    }
    get Count(): number {
        return this._items.length;
    }
    add(value: T): void {
        this._items.push(value);
    }
    get(index: number): T {
        return this._items[index];
    }
}
