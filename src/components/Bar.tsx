import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export const Bar = () =>
{
    let pag = useLocation().pathname;
    return(
            <Box sx={{ flexGrow: 1, mb: 3 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Link to={"/"}><HomeIcon /></Link>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {pag != "/" ? (pag.substring(0, 8) === "/Detalle") ? "Detalle" : pag.substring(1).replace("/", " "):"Dashboard"}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}