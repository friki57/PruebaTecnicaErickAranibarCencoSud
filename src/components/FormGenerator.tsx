import React, {useState} from 'react';
import { FormControl, Box, Button } from '@mui/material';
import { InputGenerator } from './InputGenerator';
import { TextAreaGenerator } from './TextAreaGenerator';
import { SelectGenerator } from './SelectGenerator';
import { DatePickerGenerator } from './DatePickerGenerator';
import { FileGenerator } from './FileGenerator';

export const FormGenerator = (props:any) => {
    const json = props.form;
    const [values, setValues] = useState({});
    const handleChange=(e:any)=>{
        const label = json.form.find((obj: any) => obj.name === e.target.name).label;
        setValues({ ...values, [label]: e.target.value })
    }
    const onSubmit = (e:any) => {
        e.preventDefault()
        props.submit(values)
    };
    const getJsonAsForm = (): Array<JSX.Element> => {
        const elements: Array<JSX.Element> = [];
        for (const item of JSON.parse(JSON.stringify(json)).form) {
            switch (item.type) {
                case 'input': {
                    elements.push(
                        <InputGenerator item = {item} onChange = {handleChange}/>
                    );
                    break;
                }
                case 'text-area': {
                    elements.push(
                        <TextAreaGenerator item={item} onChange={handleChange} />
                    );
                    break;
                }
                case 'select': {
                    elements.push(
                        <SelectGenerator item={item} onChange={handleChange}/>
                    );
                    break;
                }
                case 'date-picker': {
                    elements.push(
                        <DatePickerGenerator item={item} onChange={handleChange} />
                    );
                    break;
                }
                case 'file': {
                    elements.push(
                        <FileGenerator item={item} onChange={handleChange} />
                    );
                    break;
                }
            }
        }
        elements.push(
            <Box m={1}>
                <Button type='submit' variant="contained">Enviar</Button>
            </Box>
        )
        return elements;
    }

    return (
        <form id="form" onSubmit={onSubmit}>
            <FormControl fullWidth>
                {getJsonAsForm()}
            </FormControl>
        </form>    
    )
}
