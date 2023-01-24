import React from 'react'
import { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    logged: false
}

//tercer argumento del useReudcer-si regresa null no hay usuario y si es difernte es que hay un usuario
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        //si el user existe
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init);


    const login = (name = '') => {

        const user = { id: 'ABC', name: name };

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

