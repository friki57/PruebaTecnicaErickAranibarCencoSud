import React from 'react'
import { FormGenerator } from '../components/FormGenerator'
import forms from '../assets/json/forms'
import { FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <>
            <div>
                <Box sx={{ mx: "auto", width:"75%" }}>
                    <Typography variant='h4'>Formularios</Typography>
                    <Link to={"/Form1"}>Form1</Link> <br />
                    <Link to={"/Form2"}>Form2</Link> <br />
                    <Link to={"/Form3"}>Form3</Link> <br />
                    <Typography variant='h4'>Ver Datos</Typography>
                    <Link to={"/Datos/Form1"}>Datos Form1</Link> <br />
                    <Link to={"/Datos/Form2"}>Datos Form2</Link> <br />
                    <Link to={"/Datos/Form3"}>Datos Form3</Link> <br />
                </Box>
            </div>
       </>
    )
}
