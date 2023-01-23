import { heroes } from '../data/heroes';


//Función para filtrar de acuerdo a si los heroes son de DC o MARVEL
export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher);

}