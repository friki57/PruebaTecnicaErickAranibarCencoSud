import React, { useState } from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useLocation } from 'react-router-dom';

export const Detalle = () => {
    let form: string = useLocation().pathname.split("/")[2].toLowerCase();
    let id: string = useLocation().pathname.split("/")[3];
    const [localStorage, setLocalStorage] = useLocalStorage(form, [])
    return (
        <>
            <div>
                <Box sx={{ mx: "auto", width: "75%" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dato</TableCell>
                                    <TableCell>Valor</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    localStorage.length > 0 ?
                                        Object.getOwnPropertyNames(localStorage[id]).map((pro: string) =>
                                            <TableRow>
                                                <TableCell>{pro}</TableCell>
                                                <TableCell>{localStorage[id][pro]}</TableCell>
                                            </TableRow>
                                        ) : <></>
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </>
    )
}

