import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import React from "react"

export const SelectGenerator = (props:any) =>
{
    return(
        <Box m={1}>
            <FormControl fullWidth>
                <InputLabel id={props.item.id}>{props.item.label}</InputLabel>
                <Select
                    key={props.item.id}
                    id={props.item.name}
                    defaultValue={props.item.value}
                    label={props.item.label}
                    onChange={props.onChange}
                    onChangeCapture={props.onChange}
                    name={props.item.name}
                    required={
                        props.item.validations.find(
                            (o: any) => o.type === 'required'
                        )
                    }
                >
                    {props.item.options.map((opt: any) =>
                        <MenuItem value={opt.value}>{opt.label}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    )
}