import { Page } from "../../core/templates/pages";

export class MainPage extends Page {

    static textObject = {
        MainTitle: "Main Page",
    };

    constructor(id: string) {
        super(id)
    }

    render(){
        const title = this.creatHeaderTitle(MainPage.textObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}