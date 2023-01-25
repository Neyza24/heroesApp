
import { heroes } from "../data/heroes"


export const getHeroById = ( id ) => {
    //evaluamos la condición de que si el id que pasan por referencia es igual al del heroe especifico
    return heroes.find( hero => hero.id === id );

}