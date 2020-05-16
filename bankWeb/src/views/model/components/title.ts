export interface IElement {
    hElement: HElement;
    text?: string;
    className?: string;
}
export enum HElement {
    H1 = "h1", H2 = "h2", H3 = "h3", H4 ="h4", H5 ="h5",  H6="h6"
}

export class TitleElement {
    constructor(public element: IElement){
        
    }
    static renderHElement(elementParam: IElement): HTMLHeadingElement {
        const ele = new TitleElement(elementParam)
        return ele.renderer()
    }
    renderer(): HTMLHeadingElement{
        const h = document.createElement(this.element.hElement) as HTMLHeadingElement
        h.innerHTML = this.element.text;
        return h;
    }
}