import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
  return (
    <>

      <Routes>

        {/* De forma explícita */}
        <Route path='login/*' element={
          <PublicRoute>
            <Routes>
              <Route path='/*' element={<LoginPage />} />
            </Routes>
          </PublicRoute>
        }
        />

        {/* Por módulos */}
        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
        />

      </Routes>
    </>
  )
}

