
import { heroes } from "../data/heroes"

//Con esta función evaluamos si el usuario puso bien el argumento y si no lo redireccionamos a alguna página
export const getHeroById = ( id ) => {
    //evaluamos la condición de que si el id que pasan por referencia es igual al del heroe especifico
    //Si el find no lo encuentra devuelve undefined, entonces en ese caso podemos redirigir a una página en específico
    return heroes.find( hero => hero.id === id );

}