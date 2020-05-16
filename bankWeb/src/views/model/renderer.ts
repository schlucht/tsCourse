
export interface IRenderer<T extends HTMLElement> {
    rootElement: T
    renderer(): void;
}