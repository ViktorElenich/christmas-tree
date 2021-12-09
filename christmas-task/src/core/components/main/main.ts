import './main.css';
import data from "../../../data";
import { Components } from "../../templates/components";

const Filter = [
    {
        className: 'box box1',
        id: 'box1'
    },
    {
        className: 'box box2',
        id: 'box2'
    },
    {
        className: 'box box3',
        id: 'box3'
    }
]

export class Main extends Components {

    constructor(tagName: string, className: string) {
        super(tagName, className)
    }

    renderWrapper(){
        const wrapperMain = document.createElement('div'); // обвертка main
        wrapperMain.classList.add('main_wrapper');
        const filterDiv = document.createElement('div'); // блок фильтрации
        filterDiv.classList.add('filter');
        wrapperMain.append(filterDiv);

        const cards = document.createElement('div'); // блок карточек игрушек
        cards.classList.add('cards');
        wrapperMain.append(cards);

        Filter.forEach(div => {
            const divHTML = document.createElement('div');
            divHTML.className = div.className;
            divHTML.id = div.id;
            filterDiv.append(divHTML);
        })
        data.forEach(toys => {
            console.log(toys);
            const toy = document.createElement('div');
            toy.classList.add('toys');
            cards.append(toy);
            

        })

        this.container.append(wrapperMain);
    }

    render(){
        this.renderWrapper();
        return this.container;
    }
}