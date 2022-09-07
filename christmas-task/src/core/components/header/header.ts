import './header.css';
import { PageIds } from "../../../pages/app/app";
import { Components } from "../../templates/components";

const Buttons = [
    {
        id: PageIds.MainPageID,
        text: '',

    },
    {
        id: PageIds.ToysPageID,
        text: 'игрушки',
    },
    {
        id: PageIds.GamePageID,
        text: 'ёлка',
    }
]

export class Header extends Components {

    public constructor(tagName: string, className: string, id: string) {
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
        inputSearch.autocomplete = 'off';

        const favorites = document.createElement('div');
        favorites.classList.add('favorites');
        favorites.innerHTML = `<span></span>`;
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

        const garlandMain = document.createElement('div');
        garlandMain.classList.add('garland_4');
        garlandMain.id = 'garland';
        garlandMain.innerHTML = `<div id="nums_1">1</div>`;
        wrapperHeader.append(garlandMain);

        this.container.append(wrapperHeader)

    }

    mainGarland(){
        const nums = document.getElementById('nums_1').innerHTML
        if (Number(nums) == 1) {
            document.getElementById('garland').className = 'garland_1';
            document.getElementById('nums_1').innerHTML = '2'
        }
        if (Number(nums) == 2) {
            document.getElementById('garland').className = 'garland_2';
            document.getElementById('nums_1').innerHTML = '3'
        }
        if (Number(nums) == 3) {
            document.getElementById('garland').className = 'garland_3';
            document.getElementById('nums_1').innerHTML = '4'
        }
        if (Number(nums) == 4) {
            document.getElementById('garland').className = 'garland_4';
            document.getElementById('nums_1').innerHTML = '1'
        }
    }

    render(){
        this.renderPageButtons()
        setInterval(this.mainGarland, 800);
        return this.container;
    }
}