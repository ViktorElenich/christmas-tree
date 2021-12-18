import { Page } from "../../core/templates/pages";

export class MainPage extends Page {

    constructor(id: string) {
        super(id)
    }

    renderWrapper(){
        const wrapperMain = document.createElement('div');
        wrapperMain.classList.add('main-page');
        wrapperMain.innerHTML = `
        <div class="main-page-ball ball1"></div>
        <div class="main-page-ball ball2"></div>
        <h1 class="main-page-title">Новогодняя игра <span>"Наряди ёлку"</span></h1>
        <a href="#toys-page" class="btn-main-page">Начать</a>
        `

        this.container.append(wrapperMain);
    }

    render(){
        this.renderWrapper();
        return this.container;
    }
}