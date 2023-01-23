import { heroes } from "../data/heroes";

export const getHeroesByName = ( name ) => {

    //limpiamos espacios en blanco y convertimoa a minúscula todo
    name = name.toLocaleLowerCase().trim();

    //Si no escribe ni un caracter entonces retornamosun arreglo vació 
    if ( name.length === 0 ) return [];

    //Caso contrario, si incluye el nombre del heroe los filtra
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );
}