export class LocalStorageUtil {

    getLocalStorage(keyName: string) {

        const favoritesLocalStorage = localStorage.getItem(keyName);
        if (favoritesLocalStorage !== null) {
            return JSON.parse(favoritesLocalStorage);
        }
        return [];
    }

    setLocalStorage(id: string, keyName: string) {
        
        const toyFavorites = this.getLocalStorage(keyName);
        let pushFavorites = false;
        const index = toyFavorites.indexOf(id);

        if (index === -1) {
            toyFavorites.push(id);
            pushFavorites = true;
        } else {
            toyFavorites.splice(index, 1);
        }

        localStorage.setItem(keyName, JSON.stringify(toyFavorites));

        return { pushFavorites, toyFavorites }
    }
}