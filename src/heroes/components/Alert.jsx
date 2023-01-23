import React from 'react'

export const Alert = ({ showSearch, showError, q }) => {


    return (
        <>
            <div className="alert alert-primary mt-4 animate__animated animate__fadeIn animate__slow"
                style={{ display: showSearch ? '' : 'none' }}> Search your hero
            </div>
            <div className="alert alert-warning mt-4 animate__animated animate__fadeIn animate__slow"
                style={{ display: showError ? '' : 'none' }}> No hero with <b> {q} </b>
            </div>
        </>
    )
}
