import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children }) => {
    //Para dar acceso a ciertas rutas dependiendo de si esta logueado no el usuario
    const { logged } = useContext( AuthContext );

  return ( logged ) ? children : <Navigate to="/login" />
}

