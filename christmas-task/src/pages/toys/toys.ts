import { Page } from "../../core/templates/pages";
import data from "../../data";

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

export class Toys extends Page {

    constructor(id: string) {
        super(id)
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

        Filter.forEach(div => { // филтры
            const divHTML = document.createElement('div');
            divHTML.className = div.className;
            divHTML.id = div.id;

            
            filterDiv.append(divHTML);
        })
        data.forEach(toys => {  // карточки игрушек
            const toy = document.createElement('div');
            const infoCard = document.createElement('h2'); // название шара
            infoCard.classList.add('toys-title');
            infoCard.innerHTML = toys.name;

            const imageCard = document.createElement('img'); // кратинка игрушки
            imageCard.classList.add('toys-img');
            imageCard.src = `assets/toys/${toys.num}.webp`;
            imageCard.alt = 'toy';

            const cardDescCont = document.createElement('div');  // контейнер описания игрушки
            cardDescCont.classList.add('toys-description');

            const count = document.createElement('p');
            count.classList.add('count');
            count.innerHTML = `Количество: ${toys.count}`;

            const year = document.createElement('p');
            year.classList.add('year');
            year.innerHTML = `Год: ${toys.year}`;

            const shape = document.createElement('p');
            shape.classList.add('shape');
            shape.innerHTML = `Форма: ${toys.shape}`;

            const color = document.createElement('p');
            color.classList.add('color');
            color.innerHTML = `Цвет: ${toys.color}`;

            const size = document.createElement('p');
            size.classList.add('size');
            size.innerHTML = `Размер: ${toys.size}`;

            const favorite = document.createElement('p');
            favorite.classList.add('favorite');
            favorite.innerHTML = `Любимая: ${toys.favorite}`;

            const tape = document.createElement('div');
            tape.classList.add('tape');
            
            toy.append(infoCard);
            toy.append(imageCard);
            toy.append(cardDescCont);
            toy.append(tape);
            cardDescCont.append(count);
            cardDescCont.append(year);
            cardDescCont.append(shape);
            cardDescCont.append(color);
            cardDescCont.append(size);
            cardDescCont.append(favorite);
            toy.classList.add('toys');
            toy.dataset.num = toys.num;
            cards.append(toy);
        })

        this.container.append(wrapperMain);
    }

    render(){
        this.renderWrapper();
        return this.container;
    }
}