export abstract class Page {
    
    protected container: HTMLElement;

    public constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    render() {
        return this.container;
    }
    
    afterRender() {
    }
}