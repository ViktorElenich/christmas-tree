import { Page } from "../../core/templates/pages";

export class MainPage extends Page {

    public constructor(id: string) {
        super(id)
    }

    renderWrapper(){
        const linkMain = document.querySelector('.links:nth-child(1)');
        const linkToys = document.querySelector('.links:nth-child(2)');
        const linkGame = document.querySelector('.links:nth-child(3)');
        linkToys.classList.remove('links-active');
        linkGame.classList.remove('links-active');
        linkMain.classList.add('links-active');
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