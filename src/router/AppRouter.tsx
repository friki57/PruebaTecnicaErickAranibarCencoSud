import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Bar } from '../components/Bar'
import { Dashboard } from '../pages/DashBoard'
import { DatosForm } from '../pages/DatosForm'
import { Detalle } from '../pages/Detalle'
import { Form } from '../pages/Form'

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
            <Bar />
                <Routes>
                    <Route path= '/' element = {< Dashboard />} />
                    <Route path= '/:form' element = {< Form />} />
                    <Route path= '/Datos/:form' element = {< DatosForm />} />
                    <Route path= '/Detalle/:form/:id' element = {< Detalle />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
