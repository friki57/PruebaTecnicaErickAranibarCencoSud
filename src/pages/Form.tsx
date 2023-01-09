import React, { useState } from 'react';
import { FormGenerator } from '../components/FormGenerator';
import forms from '../assets/json/forms';
import { Box, Snackbar } from '@mui/material';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useLocation } from 'react-router-dom';

export const Form = () => {
    let form:string = useLocation().pathname.substring(1).toLowerCase();
    const [localStorage, setLocalStorage] = useLocalStorage(form, [])
    const [open, setOpen] = useState(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };
    const onSubmit = (data: any) => {
        const copy = localStorage;
        copy.push(data);
        setLocalStorage(copy);
        setOpen(true);
    }
    return (
        <>
            <div>
                <Box sx={{ mx: "auto", width: "75%" }}>
                    <FormGenerator form={forms[form]} submit={onSubmit} />
                </Box>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message="Datos Almacenados"
                />
            </div>
        </>
    )
}

