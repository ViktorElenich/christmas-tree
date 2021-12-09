import { Page } from "../../core/templates/pages";

export class Choice extends Page {

    static textObject = {
        MainTitle: "Choice Page",
    };

    constructor(id: string) {
        super(id)
    }

    render(){
        const title = this.creatHeaderTitle(Choice.textObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}