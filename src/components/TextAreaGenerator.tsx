import { Box, FormControl, TextField } from "@mui/material"
import React from "react"

export const TextAreaGenerator = (props:any) =>
{
    return(
        <Box m={1}>
            <FormControl fullWidth>
                <TextField
                    key={props.item.id}
                    inputProps={{
                        maxLength: props.item.validations.find(
                            (o: any) => o.type === 'maxlength'
                        )?.value || Number.MAX_SAFE_INTEGER
                    }}
                    multiline
                    rows={5}
                    required={
                        props.item.validations.find(
                            (o: any) => o.type === 'required'
                        )
                    }
                    id={props.item.name}
                    defaultValue={props.item.value}
                    label={props.item.label}
                    name={props.item.name}
                    onChange={props.onChange}
                />
            </FormControl>
        </Box>
    )
}