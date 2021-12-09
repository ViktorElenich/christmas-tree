import { Header } from "../../core/components/header/header";
import { Main } from "../../core/components/main/main";
import { Page } from "../../core/templates/pages";
import { Choice } from "../choice/choice";
import { Game } from "../game/game";
import { MainPage } from "../main/main";

export const enum PageIds {
    MainPage = 'main-page',
    ChoicePage = 'choice-page',
    GamePage = 'game-page',
}

export class App {

    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private initialPage: MainPage;
    private header: Header;
    private main: Main;

    constructor() {
        this.initialPage = new MainPage('main-page');
        this.header = new Header('header', 'header');
        this.main = new Main('main', 'main');
    }

    static renderNewPage(idPage: string){
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if(currentPageHTML){
            currentPageHTML.remove();
        }
        let page: Page | null = null;

        if(idPage === PageIds.MainPage){
            page = new MainPage(idPage);
        } else if (idPage === PageIds.ChoicePage){
            page = new Choice(idPage);
        } else if(idPage === PageIds.GamePage){
            page = new Game(idPage);
        }

        if(page){
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        })
    }

    run(){
        App.container.append(this.header.render());
        App.container.append(this.main.render());
        App.renderNewPage('main-page');
        this.enableRouteChange();
    }
}