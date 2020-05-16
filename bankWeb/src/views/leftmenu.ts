
import { IRenderer } from './model/renderer'
import { TitleElement, HElement, IElement } from './model/components'

export class LeftMenu<T extends HTMLElement> implements IRenderer<T> {
    constructor (public rootElement: T) {
        this.renderer()
    }
    renderer(): void {
        const h = TitleElement.renderHElement({
            hElement: HElement.H1,
            text: `Hallo Lothar`
        })
        this.rootElement.appendChild(h)
    }

}