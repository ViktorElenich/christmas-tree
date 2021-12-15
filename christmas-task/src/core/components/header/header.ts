import './header.css';
import { PageIds } from "../../../pages/app/app";
import { Components } from "../../templates/components";

const Buttons = [
    {
        id: PageIds.MainPage,
        text: '',

    },
    {
        id: PageIds.ToysPage,
        text: 'игрушки',
    },
    {
        id: PageIds.GamePage,
        text: 'ёлка',
    }
]

export class Header extends Components {

    constructor(tagName: string, className: string, id: string) {
        super(tagName, className, id)
    }

    renderPageButtons(){

        const pageButtons = document.createElement('div');
        pageButtons.classList.add('navigation');

        const wrapperHeader = document.createElement('div');
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
        wrapperHeader.classList.add('wrapper');
        wrapperHeader.append(pageButtons);
        wrapperHeader.append(searchAndFavorites);
        searchAndFavorites.append(inputSearch);
        searchAndFavorites.append(favorites);

        Buttons.forEach(button => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerHTML = button.text;
            buttonHTML.classList.add('links');
            pageButtons.append(buttonHTML);
        });
        this.container.append(wrapperHeader)

    }

    render(){
        this.renderPageButtons()
        return this.container;
    }
}