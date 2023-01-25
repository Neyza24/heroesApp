import React from 'react'
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../helpers';
import { Alert, HeroCard } from '../components';

export const SearchPage = () => {

    const navigate = useNavigate();
    //con el location podemos capturar el query param que seria search, obtener la ubicación donde nos encontramos
    const location = useLocation();

    //nos ayuda a evitar hacer el procesamiento nosotros, los query paramenters son opcionales
    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName( q );

    //condiciones para renderizar uno u otro alert
    const showSearch = ( q.length === 0 );
    const showError = ( q.length > 0 ) && heroes.length === 0;

    //implementamos nuestro useForm
    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        //agregando searchText al query param
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1 className='mt-4 mb-4'>SEARCH PAGE</h1>

            <div className="row">
                <div className='col-5'>
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder='Search your favorite hero'
                            className='form-control mt-4'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange}
                        />

                        
                        <div class="d-grid gap-2 col-12 mx-auto">
                        <button className='btn btn-outline-primary mt-4'>
                            Search
                        </button>
                        </div>
                    </form>
                </div>

                <div className='col-7'>
                    <h4> Results </h4>
                    <hr />

                    <Alert showSearch={ showSearch } showError={ showError } q={ q }/>

                    {
                        heroes.map( hero => (
                            <HeroCard key={ hero.id } { ...hero }/>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

