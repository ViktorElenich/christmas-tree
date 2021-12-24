import { Page } from "../../core/templates/pages";
import data from "../../data";
import { LocalStorageUtil } from "../../local-storage/localStorage";
import { renderSnow } from "../../snow/snow";

const tree = [
    {
        id: '1'
    },
    {
        id: '2'
    },
    {
        id: '3'
    },
    {
        id: '4'
    },
    {
        id: '5'
    },
    {
        id: '6'
    }
];

const backgroundImage = [
    {
        id: '1'
    },
    {
        id: '2'
    },
    {
        id: '3'
    },
    {
        id: '4'
    },
    {
        id: '5'
    },
    {
        id: '6'
    },
    {
        id: '7'
    },
    {
        id: '8'
    },
    {
        id: '9'
    },
    {
        id: '10'
    }
];

const garlandButtons = [
    {
        color: 'multicolor'
    },
    {
        color: 'red'
    },
    {
        color: 'green'
    },
    {
        color: 'blue'
    },
    {
        color: 'yellow'
    }
]

export class Game extends Page {

    saveBtnID: {
        multicolor: string[],
        red: string[],
        green: string[],
        blue: string[],
        yellow: string[]
    }

    public constructor(id: string) {
        super(id)
        this.saveBtnID = {
            multicolor: [],
            red: [],
            green: [],
            blue: [],
            yellow: []
        }
    }

    renderWrapper(){

        const linkToys = document.querySelector('.links:nth-child(2)');
        const linkMain = document.querySelector('.links:nth-child(1)');
        const linkGame = document.querySelector('.links:nth-child(3)');
        linkMain.classList.remove('links-active');
        linkToys.classList.remove('links-active');
        linkGame.classList.add('links-active');

        const wrapperGame = document.createElement('div');
        wrapperGame.classList.add('wrapper-game');

        const garlandMain = document.createElement('div');
        garlandMain.classList.add('garland_4');
        garlandMain.id = 'garland';
        garlandMain.innerHTML = `<div id="nums_1">1</div>`;
        wrapperGame.append(garlandMain);

        const canvasSnow = document.createElement('canvas');
        canvasSnow.id = 'canvas';
        wrapperGame.append(canvasSnow);

        const wrapperGameContainer = document.createElement('div');
        wrapperGameContainer.classList.add('wrapper-game-container');
        wrapperGame.append(wrapperGameContainer);

        const menuChoose = document.createElement('div');
        menuChoose.classList.add('menu-choose');
        wrapperGameContainer.append(menuChoose);

        const treeContainer = document.createElement('div');
        treeContainer.classList.add('tree-container');
        wrapperGameContainer.append(treeContainer);
        const treeGarland = document.createElement('div');
        treeGarland.classList.add('tree-garland-container');
        treeContainer.append(treeGarland);

        const menuFavorites = document.createElement('div');
        menuFavorites.classList.add('menu-favorites');
        wrapperGameContainer.append(menuFavorites);

        const audioAndSnowContainer = document.createElement('div');
        audioAndSnowContainer.classList.add('audio-snow-container', 'menu');
        menuChoose.append(audioAndSnowContainer);

        const treeChooseContainer = document.createElement('div');
        treeChooseContainer.classList.add('tree-choose-container', 'menu');
        menuChoose.append(treeChooseContainer);

        const bgContainer = document.createElement('div');
        bgContainer.classList.add('bg-container', 'menu');
        menuChoose.append(bgContainer);

        const garlandContainer = document.createElement('div');
        garlandContainer.classList.add('garland-container', 'menu');
        menuChoose.append(garlandContainer);

        const audioItem = document.createElement('button');
        audioItem.classList.add('audio-item');
        audioAndSnowContainer.append(audioItem);

        const snowItem = document.createElement('button');
        snowItem.classList.add('snow-item');
        snowItem.id = 'snow-item';
        audioAndSnowContainer.append(snowItem);
        

        tree.forEach(item => {
            const treeItems = document.createElement('div');
            treeItems.classList.add('tree-item');
            treeItems.dataset.id = item.id;
            treeChooseContainer.append(treeItems);
        })

        backgroundImage.forEach(item => {
            const bgItems = document.createElement('div');
            bgItems.classList.add('bg-item');
            bgItems.dataset.id = item.id;
            bgContainer.append(bgItems);
        })

        const garlandBtnContainer = document.createElement('div');
        garlandBtnContainer.classList.add('garland-btn-container');
        garlandContainer.append(garlandBtnContainer);

        garlandButtons.forEach(item => {
            const btnGarland = document.createElement('div');
            btnGarland.classList.add('garland-btn', item.color);
            btnGarland.dataset.color = item.color;
            garlandBtnContainer.append(btnGarland);
        })

        const switchOffOn = document.createElement('div');
        switchOffOn.classList.add('switch-off-on');
        garlandContainer.append(switchOffOn);

        const inputSwitch = document.createElement('input');
        inputSwitch.classList.add('input-switch');
        inputSwitch.type = 'checkbox';
        inputSwitch.id = 'input-switch';
        inputSwitch.checked = true;
        switchOffOn.append(inputSwitch);

        const labelSwitch = document.createElement('label');
        labelSwitch.setAttribute('for', 'input-switch');
        labelSwitch.dataset.on = 'Вкл.';
        labelSwitch.dataset.off = 'Выкл.';
        switchOffOn.append(labelSwitch);

        const favoriteToys = document.createElement('div');
        favoriteToys.classList.add('favorite-toys-container');
        menuFavorites.append(favoriteToys);

        const decorateTrees = document.createElement('div');
        decorateTrees.classList.add('decorate-trees');
        menuFavorites.append(decorateTrees);

        this.container.append(wrapperGame);

    }

    choiceBackground = (event: Event) => {

        const target = event.target as HTMLElement & {dataset: Record<string, string>};
        const bgID = target.dataset.id;

        const treeContainer = document.querySelector('.tree-container') as HTMLDivElement;
        treeContainer.style.backgroundImage = `url(./assets/bg/${bgID}.webp)`;
    }

    choiceTree = (event: Event) => {

        const target = event.target as HTMLElement & {dataset: Record<string, string>};
        const treeID = target.dataset.id;

        const treeContainer = document.querySelector('.tree-container') as HTMLDivElement;

        treeContainer.innerHTML += `
        <img src="./assets/tree/${treeID}.webp" class="tree-img" alt="tree">
        `;
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

    clickButtonGarland = (event: Event) => {

        const multicolorGarland = `
        <ul class="light-rope">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope7">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `;
        const redColorGarland = `
        <ul class="light-rope-red">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-red7">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `;
        const greenColorGarland = `
        <ul class="light-rope-green">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-green7">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `;
        const blueColorGarland = `
        <ul class="light-rope-blue">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-blue7">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        `

        const treeContainer = document.querySelector('.tree-garland-container');
        const target = event.target as HTMLElement & {dataset: Record<string, string>};
        const btnID = target.dataset.color;

        if(this.saveBtnID.multicolor.includes(btnID)){
            target.classList.remove('btn-active');
            this.saveBtnID.multicolor.splice(this.saveBtnID.multicolor.indexOf(btnID), 1)
            treeContainer.innerHTML = '';
        } else if(target.classList.contains('multicolor')){
            treeContainer.innerHTML = '';
            target.classList.add('btn-active');
            this.saveBtnID.multicolor.push(btnID);
            treeContainer.innerHTML += multicolorGarland;
        }
        if(this.saveBtnID.red.includes(btnID)){
            target.classList.remove('btn-active');
            this.saveBtnID.red.splice(this.saveBtnID.red.indexOf(btnID), 1)
            treeContainer.innerHTML = '';
        } else if(target.classList.contains('red')){
            treeContainer.innerHTML = '';
            target.classList.add('btn-active');
            this.saveBtnID.red.push(btnID);
            treeContainer.innerHTML += redColorGarland;
        }
        if(this.saveBtnID.green.includes(btnID)){
            target.classList.remove('btn-active');
            this.saveBtnID.green.splice(this.saveBtnID.green.indexOf(btnID), 1)
            treeContainer.innerHTML = '';
        } else if(target.classList.contains('green')){
            treeContainer.innerHTML = '';
            target.classList.add('btn-active');
            this.saveBtnID.green.push(btnID);
            treeContainer.innerHTML += greenColorGarland;
        }
        if(this.saveBtnID.blue.includes(btnID)){
            target.classList.remove('btn-active');
            this.saveBtnID.blue.splice(this.saveBtnID.blue.indexOf(btnID), 1)
            treeContainer.innerHTML = '';
        } else if(target.classList.contains('blue')){
            treeContainer.innerHTML = '';
            target.classList.add('btn-active');
            this.saveBtnID.blue.push(btnID);
            treeContainer.innerHTML += blueColorGarland;
        }
    }

    render(){
        this.renderWrapper();
        return this.container;
    }

    afterRender() {
        const snowStart = document.querySelector('#snow-item');
        snowStart.addEventListener('click', renderSnow);

        const bgContainer = document.querySelector('.bg-container');
        bgContainer?.addEventListener('click', this.choiceBackground);

        const treeContainer = document.querySelector('.tree-choose-container');
        treeContainer?.addEventListener('click', this.choiceTree);

        setInterval(this.mainGarland, 800);

        const garlandButton = document.querySelector('.garland-btn-container');
        garlandButton?.addEventListener('click', this.clickButtonGarland);

        const toysFavoriteContainer = document.querySelector('.favorite-toys-container');
        const localStorage = new LocalStorageUtil();
        const firstTwentyToys = data.slice(0, 20);

        if(localStorage.getLocalStorage().length !== 0){
            data.forEach((card)=>{
                if(localStorage.getLocalStorage().includes(card.num)){
                    toysFavoriteContainer.innerHTML += `
                        <div class="favorite-toys" data-id="${card.num}">
                            <p class="favorite-count">${card.count}</p>
                            <img src="./assets/toys/${card.num}.webp" class="favorite-img" alt="toy">
                        </div>
                    `;
                }
            })
        } else {
            firstTwentyToys.forEach((card)=>{
                toysFavoriteContainer.innerHTML += `
                    <div class="favorite-toys" data-id="${card.num}">
                        <p class="favorite-count">${card.count}</p>
                        <img src="./assets/toys/${card.num}.webp" class="favorite-img" alt="toy">
                    </div>
                `;
            })
        }
    }
}