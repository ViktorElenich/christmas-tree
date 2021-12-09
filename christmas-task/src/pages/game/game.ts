import { Page } from "../../core/templates/pages";

export class Game extends Page {

    static textObject = {
        MainTitle: "Game Page",
    };

    constructor(id: string) {
        super(id)
    }

    render(){
        const title = this.creatHeaderTitle(Game.textObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}