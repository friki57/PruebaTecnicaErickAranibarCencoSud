import React from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Link, useLocation } from 'react-router-dom';

export const DatosForm = () => {
    let form = useLocation().pathname.split("/")[2];
    const [localStorage, setLocalStorage] = useLocalStorage(form.toLowerCase(), [])
    return (
        <>
            <div>
                <Box sx={{ mx: "auto", width: "75%" }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    {
                                        localStorage.length>0?
                                            Object.getOwnPropertyNames(localStorage[0]).map((pro:string)=>    
                                                <TableCell>{pro}</TableCell>
                                                ):<></>
                                    }
                                    <TableCell>Detalle</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    localStorage.length > 0 ?
                                        localStorage.map((item: any, i:number) =>
                                            <TableRow
                                                key={i}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                {
                                                    localStorage.length > 0 ?
                                                        Object.getOwnPropertyNames(localStorage[0]).map((pro: string) =>
                                                            <TableCell>{item[pro]}</TableCell>
                                                            ) : <></>
                                                }
                                                <TableCell><Link to={["/Detalle",form,i.toString()].join("/")}>Ver Detalles</Link></TableCell>
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


