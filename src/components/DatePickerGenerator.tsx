import { Box, FormControl, TextField } from "@mui/material"
import React from "react"

export const DatePickerGenerator = (props:any) =>
{
    return(
        <Box m={1}>
            <FormControl fullWidth>
                <TextField
                    key={props.item.id}
                    label={props.item.label}
                    name={props.item.name}
                    type="date"
                    required={
                        props.item.validations.find(
                            (o: any) => o.type === 'required'
                        )
                    }
                    defaultValue={props.item.value}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={props.onChange}
                />
            </FormControl>
        </Box>
    )
}