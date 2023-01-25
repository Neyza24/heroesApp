import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn animate__slow">
            <div className="card mb-2">

                <div className="row g-0">

                    <div className="col-md-4">
                        <img src={heroImageUrl} className="img-fluid rounded-start" alt={superhero} />
                    </div>

                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mt-4"> {superhero} </h5>
                            <p className="card-text"> {alter_ego} </p>

                            {
                                ( alter_ego !== characters ) && ( <p> { characters } </p> )
                            }

                            <p className='card-text mb-4'>
                                <small className='text-muted'> { first_appearance } </small>
                            </p>

                            <Link to={`/hero/${ id }`} className="btn btn-primary">
                                Ver más
                            </Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

