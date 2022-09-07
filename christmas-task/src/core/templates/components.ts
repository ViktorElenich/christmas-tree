export abstract class Components {
    
    protected container: HTMLElement;

    public constructor(tagName: string, className: string, id: string) {
        this.container = document.createElement(tagName);
        this.container.className = className;
        this.container.id = id;
    }

    render(){
        return this.container;
    }
}