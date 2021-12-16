import { Page } from "../../core/templates/pages";
import data from "../../data";
import '../../nouislider/slider.css';
import '../../nouislider/sliderCustom.css';
import noUiSlider, { target } from 'nouislider';

const FilterButtons = [
    {
        filter: 'шар',
        color: 'белый',
    },
    {
        filter: 'колокольчик',
        color: 'желтый',
    },
    {
        filter: 'шишка',
        color: 'красный',
    },
    {
        filter: 'снежинка',
        color: 'синий',
    },
    {
        filter: 'фигурка',
        color: 'зеленый',
    }
]
const SizeButtons = [
    {
        size: 'большой',
    },
    {
        size: 'средний',
    },
    {
        size: 'малый',
    },
]
const Options = [
    {
        value: 'sort-name-max',
        text: 'По названию от «А» до «Я»'
    },
    {
        value: 'sort-name-min',
        text: 'По названию от «Я» до «А»'
    },
    {
        value: 'sort-count-max',
        text: 'По количеству по возрастанию'
    },
    {
        value: 'sort-count-min',
        text: 'По количеству по убыванию'
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

        const filterBox1 = document.createElement('div'); // див блок фильтрации 1
        filterBox1.className = 'box box-filters';
        filterBox1.id = 'box1';
        const box1Title = document.createElement('h3'); // заголовок
        box1Title.innerHTML = 'Фильтры по значению';
        box1Title.className = 'filter-title';
        filterBox1.append(box1Title);

        const shapeBox = document.createElement('div'); // фильтрация по фигуре
        shapeBox.className = 'shape';
        shapeBox.innerHTML = 'Форма: ';
        FilterButtons.forEach(btn =>{
            const btnShape = document.createElement('button');
            btnShape.dataset.id = btn.filter;
            shapeBox.append(btnShape);
        })
        const colorBox = document.createElement('div'); // фильтр по цвету
        colorBox.className = 'color';
        colorBox.innerHTML = 'Цвет: ';
        FilterButtons.forEach(btn => {
            const btnColor = document.createElement('button');
            btnColor.dataset.id = btn.color;
            colorBox.append(btnColor);
        })
        const sizeBox = document.createElement('div'); // фильтр по размеру
        sizeBox.className = 'size';
        sizeBox.innerHTML = 'Размер: ';
        SizeButtons.forEach(btn =>{
            const btnSize = document.createElement('button');
            btnSize.dataset.id = btn.size;
            sizeBox.append(btnSize);
        })
        const favoriteBox = document.createElement('div'); // фильтр любимых игрушек
        favoriteBox.innerHTML = 'Только любимые: ';
        favoriteBox.className = 'favorite';
        const favoriteCont = document.createElement('div');
        favoriteCont.className = 'favorite-container';
        favoriteBox.append(favoriteCont);
        const favoriteInput = document.createElement('input');
        favoriteInput.type = 'checkbox';
        favoriteInput.className = 'input-favorite';
        favoriteInput.id = 'check-favorite';
        favoriteCont.append(favoriteInput);
        const favoriteLabel = document.createElement('label');
        favoriteLabel.setAttribute('for', 'check-favorite');
        favoriteLabel.className = 'label-favorite';
        favoriteCont.append(favoriteLabel);


        filterBox1.append(shapeBox);
        filterBox1.append(colorBox);
        filterBox1.append(sizeBox);
        filterBox1.append(favoriteBox);

        filterDiv.append(filterBox1);

        const filterBox2 = document.createElement('div'); // див блок фильтрации 2
        filterBox2.className = 'box box-range';
        filterBox2.id = 'box2';
        const box2Title = document.createElement('h3'); // заголовок
        box2Title.className = 'filter-title';
        box2Title.innerHTML = 'Фильтры по диапазону';
        filterBox2.append(box2Title);

        const countBox = document.createElement('div');
        countBox.className = 'filter-quantity';
        countBox.innerHTML = 'Количество экземпляров: ';
        const countContainer = document.createElement('div');
        countContainer.className = 'container-for-filters';
        countBox.appendChild(countContainer);
        const countInputMin = document.createElement('input');
        countInputMin.type = 'number';
        countInputMin.className = 'min-quantity';
        countInputMin.value = '1';
        countInputMin.readOnly = true;
        countContainer.appendChild(countInputMin);
        const sliderQuantity = document.createElement('div') as HTMLDivElement;
        sliderQuantity.id = 'slider-quantity';
        sliderQuantity.className = 'slider-quantity';
        countContainer.appendChild(sliderQuantity);
        const countInputMax = document.createElement('input');
        countInputMax.type = 'number';
        countInputMax.className = 'max-quantity';
        countInputMax.value = '12';
        countInputMax.readOnly = true;
        countContainer.appendChild(countInputMax);

        function quantitySlider(): void {
            
            const slider = noUiSlider.create(<target>sliderQuantity, {
            start: [1, 12],
            connect: true,
            step: 1,
            range: {
                min: [1],
                max: [12],
            },
            });

            const inputsQuantity = [countInputMin, countInputMax];
            slider.on(
            'update',
            (values: (string | number)[], handle: number) => {
                inputsQuantity[handle].value = String(Math.round(Number(values[handle])));
            },
            );
        }

        const yearBox = document.createElement('div'); // фильтр по году
        yearBox.className = 'filter-year';
        yearBox.innerHTML = 'Год приобретения: ';
        const sliderCount = document.createElement('div'); // слайдер
        sliderCount.className = 'container-for-filters';
        yearBox.appendChild(sliderCount);
        const yearInputMin = document.createElement('input');
        yearInputMin.type = 'number';
        yearInputMin.className = 'min-year';
        yearInputMin.value = '1940';
        yearInputMin.readOnly = true;
        sliderCount.appendChild(yearInputMin);
        const sliderYear = document.createElement('div');
        sliderYear.id = 'slider-year';
        sliderYear.className = 'slider-year';
        sliderCount.appendChild(sliderYear);
        const yearInputMax = document.createElement('input');
        yearInputMax.type = 'number';
        yearInputMax.className = 'max-year';
        yearInputMax.value = '2020';
        yearInputMax.readOnly = true;
        sliderCount.appendChild(yearInputMax);

        function yearSlider() :void {
        
            const slider = noUiSlider.create(sliderYear, {
              start: [1940, 2020],
              connect: true,
              step: 1,
              range: {
                min: [1940],
                max: [2020],
              },
            });

            const inputsYear = [yearInputMin, yearInputMax];
        
            slider.on('update', (values: (string | number)[], handle: number) => {
              inputsYear[handle].value = String(Math.round(Number(values[handle])));
            });
        }

        filterBox2.append(countBox);
        filterBox2.append(yearBox);

        filterDiv.append(filterBox2);

        const filterBox3 = document.createElement('div'); // див блок фильтрации 3
        filterBox3.className = 'box box-sort';
        filterBox3.id = 'box3';
        const box3Title = document.createElement('h3'); // заголовок
        box3Title.className = 'filter-title';
        box3Title.innerHTML = 'Сортировка';
        filterBox3.append(box3Title);

        const select = document.createElement('select'); // сортировка по названию и количеству
        select.className = 'sort-select';
        Options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.innerHTML = option.text;
            select.append(optionElement);
        })
        filterBox3.append(select);

        const btnReset = document.createElement('button');
        btnReset.className = 'reset';
        btnReset.type = 'reset';
        btnReset.innerHTML = 'Сброс фильтров';
        filterBox3.append(btnReset);

        filterDiv.append(filterBox3);

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
            if(toys.favorite === true){
                favorite.innerHTML = `Любимая: Да`;
            } else {
                favorite.innerHTML = `Любимая: Нет`;
            }
            
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
       
        quantitySlider();
        yearSlider();
    }

    render(){
        this.renderWrapper();
        return this.container;
        
    }
}