import { Page } from "../../core/templates/pages";
import data from "../../data";
import '../../nouislider/slider.css';
import '../../nouislider/sliderCustom.css';
import { quantitySlider } from "../../nouislider/slider-quantity";
import { yearSlider } from "../../nouislider/slider-year";
import { LocalStorageUtil } from "../../local-storage/localStorage";

interface ToysDescription {
    num: string,
    count: string,
    year: string,
    shape: string,
    name: string,
    color: string,
    size: string,
    favorite: boolean
}

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
        color: 'зелёный',
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
        text: 'Выбрать'
    },
    {
        value: 'sort-name-max',
        text: 'По названию от «А» до «Я»'
    },
    {
        value: 'sort-name-min',
        text: 'По названию от «Я» до «А»'
    },
    {
        value: 'sort-year-max',
        text: 'По году по возрастанию'
    },
    {
        value: 'sort-year-min',
        text: 'По году по убыванию'
    }
]
export class Toys extends Page {

    searchParams: { 
        shapes: string[], 
        colors: string[], 
        sizes: string[], 
        favorite: boolean,
        minQuantity: number,
        maxQuantity: number,
        minYear: number,
        maxYear: number,
        optionsValue: string,
    };

    constructor(id: string) {
        super(id)
        this.searchParams = { 
            shapes: [],
            colors: [], 
            sizes: [], 
            favorite: false, 
            minQuantity: null, 
            maxQuantity: null, 
            minYear: null, 
            maxYear: null,
            optionsValue: '',
        };
    }

    renderWrapper(){
        const linkToys = document.querySelector('.links:nth-child(2)');
        const linkMain = document.querySelector('.links:nth-child(1)');
        const linkGame = document.querySelector('.links:nth-child(3)');
        linkMain.classList.remove('links-active');
        linkGame.classList.remove('links-active');
        linkToys.classList.add('links-active');

        const inputSearch = document.querySelector('.input_search') as HTMLInputElement;
        inputSearch.focus();

        const wrapperMain = document.createElement('div'); // обвертка main
        wrapperMain.classList.add('main_wrapper');
        this.renderPage(wrapperMain);
        this.container.append(wrapperMain);
        
    }

    clickFilter = (event: Event) => {
        const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.toys');
        const favoriteInput = document.querySelector('#check-favorite') as HTMLInputElement;
        const minQuantity = Number((document.querySelector('.min-quantity') as HTMLInputElement).value);
        this.searchParams.minQuantity = minQuantity;
        const maxQuantity = Number((document.querySelector('.max-quantity') as HTMLInputElement).value);
        this.searchParams.maxQuantity = maxQuantity;
        const minYear = Number((document.querySelector('.min-year') as HTMLInputElement).value);
        this.searchParams.minYear = minYear;
        const maxYear = Number((document.querySelector('.max-year') as HTMLInputElement).value);
        this.searchParams.maxYear = maxYear;
        const select = (document.querySelector('.sort-select') as HTMLSelectElement).options.selectedIndex;
        const optionsValue = (document.querySelector('.sort-select') as HTMLSelectElement).options[select].value;
        this.searchParams.optionsValue = optionsValue;
        
        const target = event.target as HTMLElement & {dataset: Record<string, string>};
        const dataID = target.dataset.id;

        if(this.searchParams.shapes.includes(dataID)){
            target.classList.remove('active');
            this.searchParams.shapes.splice(this.searchParams.shapes.indexOf(dataID), 1);
        } else if(target.classList.contains('btn-shape')){
            target.classList.add('active');
            this.searchParams.shapes.push(dataID);
        }
        if(this.searchParams.colors.includes(dataID)){
            target.classList.remove('active');
            this.searchParams.colors.splice(this.searchParams.colors.indexOf(dataID), 1);
        } else if(target.classList.contains('btn-color')){
            target.classList.add('active');
            this.searchParams.colors.push(dataID);
        }
        if(this.searchParams.sizes.includes(dataID)){
            target.classList.remove('active');
            this.searchParams.sizes.splice(this.searchParams.sizes.indexOf(dataID), 1);
        } else if(target.classList.contains('btn-size')){
            target.classList.add('active');
            this.searchParams.sizes.push(dataID);
        }

        let result = data;
        result = result.filter(item => { // фильтр по форме
            if(this.searchParams.shapes.length > 0){
                return this.searchParams.shapes.includes(item.shape)
            } 
            return true;
        })

        result = result.filter(item => { // фильтр по цвету
            if(this.searchParams.colors.length > 0){
                return this.searchParams.colors.includes(item.color)
            }
            return true;
        })

        result = result.filter(item =>{ // фильтр по размеру
            if(this.searchParams.sizes.length > 0){
                return this.searchParams.sizes.includes(item.size)
            }
            return true;
        })

        if(favoriteInput.checked){ // фильтр по любимым
            this.searchParams.favorite = true;
            result = result.filter(item =>{
                if(this.searchParams.favorite === item.favorite){
                    return true;
                }
            })
        }

        result = result.filter(item => { // фильтр по количеству
            return Number(item.count) >= this.searchParams.minQuantity && Number(item.count) <= this.searchParams.maxQuantity;
        })

        result = result.filter(item => { // фильтр по годам
            return Number(item.year) >= this.searchParams.minYear && Number(item.year) <= this.searchParams.maxYear;
        })

        // сортировка по названию и году
        if(this.searchParams.optionsValue === 'sort-name-max'){
            result.sort(function(x: { name: string; }, y: { name: string; }){
                if (x.name < y.name) {return -1;}
                if (x.name > y.name) {return 1;}
                return 0;
            })
        } else if(this.searchParams.optionsValue === 'sort-name-min'){
            result.sort(function(x: { name: string; }, y: { name: string; }){
                if (x.name > y.name) {return -1;}
                if (x.name < y.name) {return 1;}
                return 0;
            })
        } else if(this.searchParams.optionsValue === 'sort-year-max'){
            result.sort(function(x: {year: string}, y: {year: string}){
                if (Number(x.year) < Number(y.year)) {return -1;}
                if (Number(x.year) > Number(y.year)) {return 1;}
                return 0;
            })
        } else if(this.searchParams.optionsValue === 'sort-year-min'){
            result.sort(function(x: {year: string}, y: {year: string}){
                if (Number(x.year) > Number(y.year)) {return -1;}
                if (Number(x.year) < Number(y.year)) {return 1;}
                return 0;
            })
        }

        // сортировка по поиску
        const search = document.querySelector('#search') as HTMLInputElement;
        const valueSearch = search.value.trim().toLowerCase();
        if(valueSearch){
            result = result.filter(item => {
                return item.name.toLowerCase().includes(valueSearch);
            })
        }
        
        const cardsContainer = document.querySelector('.cards');

        if(result.length === 0){
            cardsContainer.innerHTML = `<p class="no-toys">Извените, совпадений не найдено</p>`
        } else {
            cardsContainer.innerHTML = ''
        }

        this.removeCards(cards);
        this.renderCards(result)

    }

    renderCards(cards: ToysDescription[]){
        const cardsWrapper = document.querySelector('.cards');

        const shapeArr = cards;
        
        shapeArr.forEach(card =>{
            const toy = document.createElement('div');
            const infoCard = document.createElement('h2'); // название шара
            infoCard.classList.add('toys-title');
            infoCard.innerHTML = card.name;

            const imageCard = document.createElement('img'); // кратинка игрушки
            imageCard.classList.add('toys-img');
            imageCard.src = `assets/toys/${card.num}.webp`;
            imageCard.alt = 'toy';

            const cardDescCont = document.createElement('div');  // контейнер описания игрушки
            cardDescCont.classList.add('toys-description');

            const count = document.createElement('p');
            count.classList.add('count');
            count.dataset.count = card.count;
            count.innerHTML = `Количество: <span>${card.count}</span>`;

            const year = document.createElement('p');
            year.classList.add('year');
            year.dataset.year = card.year;
            year.innerHTML = `Год: <span>${card.year}</span>`;

            const shape = document.createElement('p');
            shape.classList.add('shape');
            shape.dataset.shape = card.shape;
            shape.innerHTML = `Форма: <span>${card.shape}</span>`;

            const color = document.createElement('p');
            color.classList.add('color');
            color.dataset.color = card.color;
            color.innerHTML = `Цвет: <span>${card.color}</span>`;

            const size = document.createElement('p');
            size.classList.add('size');
            size.dataset.size = card.size;
            size.innerHTML = `Размер: <span>${card.size}</span>`;

            const favorite = document.createElement('p');
            favorite.classList.add('favorite');
            if(card.favorite === true){
                favorite.dataset.favorite = `${card.favorite}`;
                favorite.innerHTML = `Любимая: <span>Да</span>`;
            } else {
                favorite.dataset.favorite = `${card.favorite}`;
                favorite.innerHTML = `Любимая: <span>Нет</span>`;
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
            toy.dataset.id = card.num;

            cardsWrapper.append(toy);
        })
    }

    removeCards(card: NodeListOf<HTMLDivElement>){
        card.forEach(element =>{
            element.remove();
        })
    }

    renderPage(wrapper: Element){
        const filterDiv = document.createElement('form'); // блок фильтрации
        filterDiv.classList.add('filter');
        filterDiv.id = 'filter';
        wrapper.append(filterDiv);

        const cards = document.createElement('div'); // блок карточек игрушек
        cards.classList.add('cards');
        
        wrapper.append(cards);

        const filterBox1 = document.createElement('div'); // див блок фильтрации 1
        filterBox1.className = 'box box-filters';
        filterBox1.id = 'box1';
        const box1Title = document.createElement('h3'); // заголовок
        box1Title.innerHTML = 'Фильтры по значению';
        box1Title.className = 'filter-title';
        filterBox1.append(box1Title);

        const shapeBox = document.createElement('div'); // фильтрация по фигуре
        shapeBox.className = 'shape-container';
        shapeBox.innerHTML = 'Форма: ';
        FilterButtons.forEach(btn =>{
            const btnShape = document.createElement('button');
            btnShape.classList.add('btn-shape');
            btnShape.dataset.id = btn.filter;
            shapeBox.append(btnShape);
        })
        
        const colorBox = document.createElement('div'); // фильтр по цвету
        colorBox.className = 'color-container';
        colorBox.innerHTML = 'Цвет: ';
        FilterButtons.forEach(btn => {
            const btnColor = document.createElement('button');
            btnColor.className = 'btn-color';
            btnColor.dataset.id = btn.color;
            colorBox.append(btnColor);
        })
        const sizeBox = document.createElement('div'); // фильтр по размеру
        sizeBox.className = 'size-container';
        sizeBox.innerHTML = 'Размер: ';
        SizeButtons.forEach(btn =>{
            const btnSize = document.createElement('button');
            btnSize.className = 'btn-size';
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
            count.dataset.count = toys.count;
            count.innerHTML = `Количество: <span>${toys.count}</span>`;

            const year = document.createElement('p');
            year.classList.add('year');
            year.dataset.year = toys.year;
            year.innerHTML = `Год: <span>${toys.year}</span>`;

            const shape = document.createElement('p');
            shape.classList.add('shape');
            shape.dataset.shape = toys.shape;
            shape.innerHTML = `Форма: <span>${toys.shape}</span>`;

            const color = document.createElement('p');
            color.classList.add('color');
            color.dataset.color = toys.color;
            color.innerHTML = `Цвет: <span>${toys.color}</span>`;

            const size = document.createElement('p');
            size.classList.add('size');
            size.dataset.size = toys.size;
            size.innerHTML = `Размер: <span>${toys.size}</span>`;

            const favorite = document.createElement('p');
            favorite.classList.add('favorite');
            if(toys.favorite === true){
                favorite.dataset.favorite = `${toys.favorite}`;
                favorite.innerHTML = `Любимая: <span>Да</span>`;
            } else {
                favorite.dataset.favorite = `${toys.favorite}`;
                favorite.innerHTML = `Любимая: <span>Нет</span>`;
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
            toy.dataset.id = toys.num;
            cards.append(toy);
        })
        
        
    }

    removePage(page: Element){
        page.remove()
    }

    clickToysCards = (event: Event) => {
        
        const chosenToys = document.querySelector('.favorites span');
        const target = event.target as HTMLElement & {dataset: Record<string, string>};
        const toyID = (target.closest('.toys') as HTMLDivElement).dataset.id;

        const localStorage = new LocalStorageUtil();
        const getLocalStore = localStorage.getLocalStorage('toys');
        const setLocalStore = localStorage.setLocalStorage(toyID, 'toys');

        if(getLocalStore.length > 19){
            alert('Извините уже все слоты заняты');
            target.closest('.toys').classList.remove('active');
        } else if(getLocalStore.includes(toyID)){
            target.closest('.toys').classList.remove('active');
            chosenToys.innerHTML = `${setLocalStore.toyFavorites.length}`;
        } else {
            target.closest('.toys').classList.add('active');
            chosenToys.innerHTML = `${setLocalStore.toyFavorites.length}`;
        }
    }

    resetButton = () =>{
        const wrapperMain = document.querySelector('.main_wrapper');
        this.removePage(wrapperMain);
        this.render();
        this.afterRender();
    }

    render(){
        this.renderWrapper();
        const chosenToys = document.querySelector('.favorites span');
        const localStorage = new LocalStorageUtil();
        const getLocalStore = localStorage.getLocalStorage('toys');
        chosenToys.innerHTML = `${getLocalStore.length}`;

        return this.container;
    }
    
    afterRender(){
        const localStorage = new LocalStorageUtil();

        const toysID: NodeListOf<HTMLDivElement> = document.querySelectorAll('.toys');
        toysID.forEach((toy) => {
            const getLocalStore = localStorage.getLocalStorage(toy.dataset.id);
            if(getLocalStore.includes(toy.dataset.id)){
                toy.className = 'toys active';
            } else {
                toy.className = 'toys';
            }
        });

        quantitySlider();
        yearSlider();
        const shapeCont = document.querySelector('.shape-container');
        shapeCont?.addEventListener('click', this.clickFilter);

        const colorCont = document.querySelector('.color-container');
        colorCont?.addEventListener('click', this.clickFilter);

        const sizeCont = document.querySelector('.size-container');
        sizeCont?.addEventListener('click', this.clickFilter);

        const favorite = document.querySelector('.favorite');
        favorite?.addEventListener('click', this.clickFilter);

        const minQuantity = document.querySelector('.min-quantity');
        minQuantity?.addEventListener('change', this.clickFilter);

        const maxQuantity = document.querySelector('.max-quantity');
        maxQuantity?.addEventListener('change', this.clickFilter);

        const minYear = document.querySelector('.min-year');
        minYear?.addEventListener('change', this.clickFilter);

        const maxYear = document.querySelector('.max-year');
        maxYear?.addEventListener('change', this.clickFilter);

        const sortSelect = document.querySelector('.sort-select');
        sortSelect?.addEventListener('change', this.clickFilter);

        const input = document.querySelector("#search");
        input.addEventListener("keyup", this.clickFilter);

        const btnReset = document.querySelector('.reset');
        btnReset.addEventListener('click', this.resetButton);

        const cards = document.querySelectorAll('.toys');
        cards.forEach(card => {
            card.addEventListener('click', this.clickToysCards);
        })
    }
}