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

        const treeImg = document.createElement('div');
        treeImg.classList.add('tree-img');
        treeImg.setAttribute('data-drop-target', 'true');
        treeContainer.append(treeImg);

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
        const audio = document.createElement('audio');
        audio.id = 'player';
        audio.src = './assets/audio/audio.mp3';
        audio.loop = true;
        audioItem.append(audio);

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

        const treeImg: HTMLImageElement = document.querySelector('.tree-img');
        treeImg.style.backgroundImage = `url(./assets/tree/${treeID}.webp)`;
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
        
        const btnMulticolor = document.querySelector('.multicolor');
        const btnRed = document.querySelector('.red');
        const btnGreen = document.querySelector('.green');
        const btnBlue = document.querySelector('.blue');
        const btnYellow = document.querySelector('.yellow');
        const allBtnGarland: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.garland-btn');
        const inputSwitch: HTMLInputElement = document.querySelector('.input-switch');

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
        const yellowColorGarland = `
        <ul class="light-rope-yellow">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow4">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow5">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow6">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="light-rope-yellow7">
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

        const treeContainer = document.querySelector('.tree-img');
        const target = event.target as HTMLElement & {dataset: Record<string, string>};
        const btnID = target.dataset.color;

        if(this.saveBtnID.multicolor.includes(btnID)){
            target.classList.remove('btn-active');
            this.saveBtnID.multicolor.splice(this.saveBtnID.multicolor.indexOf(btnID), 1)
            treeContainer.innerHTML = '';
        } else if(target.classList.contains('multicolor')){
            treeContainer.innerHTML = '';
            target.classList.add('btn-active');
            btnRed.classList.remove('btn-active');
            btnBlue.classList.remove('btn-active');
            btnGreen.classList.remove('btn-active');
            btnYellow.classList.remove('btn-active');
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
            btnBlue.classList.remove('btn-active');
            btnGreen.classList.remove('btn-active');
            btnYellow.classList.remove('btn-active');
            btnMulticolor.classList.remove('btn-active');
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
            btnBlue.classList.remove('btn-active');
            btnYellow.classList.remove('btn-active');
            btnMulticolor.classList.remove('btn-active');
            btnRed.classList.remove('btn-active');
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
            btnYellow.classList.remove('btn-active');
            btnMulticolor.classList.remove('btn-active');
            btnRed.classList.remove('btn-active');
            btnGreen.classList.remove('btn-active');
            this.saveBtnID.blue.push(btnID);
            treeContainer.innerHTML += blueColorGarland;
        }
        if(this.saveBtnID.yellow.includes(btnID)){
            target.classList.remove('btn-active');
            this.saveBtnID.yellow.splice(this.saveBtnID.yellow.indexOf(btnID), 1)
            treeContainer.innerHTML = '';
        } else if(target.classList.contains('yellow')){
            treeContainer.innerHTML = '';
            target.classList.add('btn-active');
            btnMulticolor.classList.remove('btn-active');
            btnRed.classList.remove('btn-active');
            btnGreen.classList.remove('btn-active');
            btnBlue.classList.remove('btn-active');
            this.saveBtnID.yellow.push(btnID);
            treeContainer.innerHTML += yellowColorGarland;
        }
        if(inputSwitch.checked){
            
        } else {
            allBtnGarland.forEach(btn => {
                btn.classList.remove('btn-active')
                treeContainer.innerHTML = ''
            });
        }
    }

    playAndStopAudio(){
        const audio = document.getElementById("player") as HTMLAudioElement;
        const audioControl = document.querySelector(".audio-item");

        if(audio.paused){
            audio.play();
            audioControl.classList.add('play');
        } else {
            audio.pause();
            audioControl.classList.remove('play');
            audio.currentTime = 0.0;
        }
    }

    dragAndDrop(){

        let coordX: number;
        let coordY: number;

        const draggable: NodeListOf<HTMLImageElement> = document.querySelectorAll("[draggable]");
        const targets: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-drop-target]');

        for (let i = 0; i < draggable.length; i++) {
            draggable[i].addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text", draggable[i].id);
                coordX = e.offsetX;
                coordY = e.offsetY;
            });
            for(let i = 0; i < targets.length; i++){
                targets[i].addEventListener("dragover", (e) => {
                    e.preventDefault();
                    if (e.type != "drop") {
                        return;
                    }
                    const draggedId = (e as DragEvent).dataTransfer.getData("text");
                    const draggedEl = document.getElementById(draggedId);
                    if (draggedEl.parentNode == targets[i]) {
                        return;
                    }
                    draggedEl.parentNode.removeChild(draggedEl);
                    console.log(draggedEl)
                    targets[i].appendChild(draggedEl);
                });
                targets[i].addEventListener("drop", (e) => {
                    (e as DragEvent).dataTransfer.setData("text", draggable[i].id);
    
                    const draggedId = (e as DragEvent).dataTransfer.getData("text");
                    const draggedEl = document.getElementById(draggedId);
    
                    draggedEl.style.top = (e as DragEvent).pageY - coordY + "px";
                    draggedEl.style.left = (e as DragEvent).pageX - coordX + "px";
                });
                targets[i].addEventListener("dragover", (e) => {
                    e.preventDefault();
                    if (e.type != "drop") {
                        return;
                    }
                    const draggedId = (e as DragEvent).dataTransfer.getData("text");
                    const draggedEl = document.getElementById(draggedId);
                    if (draggedEl.parentNode == targets[i]) {
                        return;
                    }
                    draggedEl.parentNode.removeChild(draggedEl);
                    targets[i].appendChild(draggedEl);
                });
                targets[i].addEventListener("dragenter", (e) => {
                    if (e.type == "dragenter") {
                        targets[i].classList.add("drag-enter");
                    } else {
                        targets[i].classList.remove("drag-enter");
                    }
                });
                targets[i].addEventListener("dragleave", (e) => {
                    if (e.type == "dragenter") {
                        targets[i].classList.add("drag-enter");
                    } else {
                        targets[i].classList.remove("drag-enter");
                    }
                });
            }
        }

    }

    render(){
        this.renderWrapper();
        return this.container;
    }

    afterRender() {
        const snowStart = document.querySelector('#snow-item');
        snowStart.addEventListener('click', ()=>{
            renderSnow()
        });

        const bgContainer = document.querySelector('.bg-container');
        bgContainer?.addEventListener('click', this.choiceBackground);

        const treeContainer = document.querySelector('.tree-choose-container');
        treeContainer?.addEventListener('click', this.choiceTree);

        setInterval(this.mainGarland, 800);

        const garlandButton = document.querySelector('.garland-btn-container');
        garlandButton?.addEventListener('click', this.clickButtonGarland);

        const inputSwitch: HTMLInputElement = document.querySelector('.input-switch');
        inputSwitch.addEventListener('click', this.clickButtonGarland)

        const playAudio = document.querySelector('.audio-item');
        playAudio.addEventListener('click', this.playAndStopAudio);

        const toysFavoriteContainer = document.querySelector('.favorite-toys-container');
        const localStorage = new LocalStorageUtil();
        const firstTwentyToys = data.slice(0, 20);

        if(localStorage.getLocalStorage().length !== 0){
            data.forEach((card)=>{
                const favoriteToysItem = document.createElement('div');
                favoriteToysItem.classList.add('favorite-toys');
                favoriteToysItem.dataset.id = card.num;
                favoriteToysItem.setAttribute('data-drop-target', 'true');
                const favoriteCount = document.createElement('p');
                favoriteCount.classList.add('favorite-count');
                favoriteCount.innerHTML = card.count;
                favoriteToysItem.append(favoriteCount);
                if(localStorage.getLocalStorage().includes(card.num)){
                    for(let i = 1; i <= Number(card.count); i++){
                        favoriteToysItem.innerHTML += `
                        <img src="./assets/toys/${card.num}.webp" class="favorite-img" id="${card.num}-${i}"
                        draggable="true" data-img-num="${card.num}" alt="toy">
                        `
                    }
                }
                toysFavoriteContainer.append(favoriteToysItem);
            })
        } else {
            firstTwentyToys.forEach((card)=>{
                const favoriteToysItem = document.createElement('div');
                favoriteToysItem.classList.add('favorite-toys');
                favoriteToysItem.dataset.id = card.num;
                favoriteToysItem.setAttribute('data-drop-target', 'true');
                const favoriteCount = document.createElement('p');
                favoriteCount.classList.add('favorite-count');
                favoriteCount.innerHTML = card.count;
                favoriteToysItem.append(favoriteCount);
                for(let i = 1; i <= Number(card.count); i++){
                    favoriteToysItem.innerHTML += `
                    <img src="./assets/toys/${card.num}.webp" class="favorite-img" id="${card.num}-${i}"
                    draggable="true" data-img-num="${card.num}" alt="toy">
                    `
                }                
                toysFavoriteContainer.append(favoriteToysItem);
            })
        }

        this.dragAndDrop();
    }
}