import './header.css';
import { PageIds } from "../../../pages/app/app";
import { Components } from "../../templates/components";

const Buttons = [
    {
        id: PageIds.MainPage,
        text: '',

    },
    {
        id: PageIds.ChoicePage,
        text: 'игрушки',
    },
    {
        id: PageIds.GamePage,
        text: 'ёлка',
    }
]

export class Header extends Components {

    constructor(tagName: string, className: string) {
        super(tagName, className)
    }

    renderPageButtons(){

        const pageButtons = document.createElement('div');
        pageButtons.classList.add('navigation');

        const wrapperHEader = document.createElement('div');
        const searchAndFavorites = document.createElement('div');

        const inputSearch = document.createElement('input');
        inputSearch.classList.add('input_search');
        inputSearch.type = 'search';
        inputSearch.name = 'search';
        inputSearch.placeholder = 'Поиск';
        inputSearch.id = 'search';

        const favorites = document.createElement('div');
        favorites.classList.add('favorites');
        searchAndFavorites.classList.add('search_favorites');
        wrapperHEader.classList.add('wrapper');
        wrapperHEader.append(pageButtons);
        wrapperHEader.append(searchAndFavorites);
        searchAndFavorites.append(inputSearch);
        searchAndFavorites.append(favorites);

        Buttons.forEach(button => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerHTML = button.text;
            buttonHTML.classList.add('links');
            pageButtons.append(buttonHTML);
        });
        this.container.append(wrapperHEader)

    }

    render(){
        this.renderPageButtons()
        return this.container;
    }
}