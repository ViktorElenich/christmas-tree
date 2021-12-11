import { Header } from "../../core/components/header/header";
import { Page } from "../../core/templates/pages";
import { Toys } from "../toys/toys";
import { Game } from "../game/game";
import { MainPage } from "../main/main";
import { Footer } from "../../core/components/footer/footer";

export const enum PageIds {
    MainPage = 'main-page',
    ToysPage = 'toys-page',
    GamePage = 'game-page',
}

export class App {

    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private initialPage: MainPage;
    private header: Header;
    private footer: Footer;

    constructor() {
        this.initialPage = new MainPage('main-page');
        this.header = new Header('header', 'header');
        this.footer = new Footer('footer', 'footer');
    }

    static renderNewPage(idPage: string){
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if(currentPageHTML){
            currentPageHTML.remove();
        }
        let page: Page | null = null;

        if(idPage === PageIds.MainPage){
            page = new MainPage(idPage);
        } else if (idPage === PageIds.ToysPage){
            page = new Toys(idPage);
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
        App.renderNewPage('main-page');
        App.container.append(this.footer.render());
        this.enableRouteChange();
    }
}