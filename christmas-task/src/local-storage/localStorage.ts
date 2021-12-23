export class LocalStorageUtil {

    keyName: string;

    constructor() {
        this.keyName = 'toys';
    }

    getLocalStorage() {

        const favoritesLocalStorage = localStorage.getItem(this.keyName);
        if (favoritesLocalStorage !== null) {
            return JSON.parse(favoritesLocalStorage);
        }
        return [];
    }

    setLocalStorage(id: string) {
        
        let toyFavorites = this.getLocalStorage();
        let pushFavorites = false;
        const index = toyFavorites.indexOf(id);

        if (index === -1) {
            toyFavorites.push(id);
            pushFavorites = true;
        } else {
            toyFavorites.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(toyFavorites));

        return { pushFavorites, toyFavorites }
    }
}