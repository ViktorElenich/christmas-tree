import { Components } from "../../templates/components";

export class Main extends Components {
    
    constructor(tagName: string, className: string, id: string) {
        super(tagName, className, id)
    }

    render(): HTMLElement {
        return this.container;
    }
}