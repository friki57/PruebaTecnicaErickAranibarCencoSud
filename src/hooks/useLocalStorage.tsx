import { useState } from "react";

export const useLocalStorage = (key:any, defaultValue:any = "")=>
{
    const [localStorage, setLocalStorage] = useState(()=>
    {
        try 
        {
            const item = window.localStorage.getItem(key);
            return item?JSON.parse(item):defaultValue
        }
        catch
        {
            return defaultValue
        }
    })
    const setValue = (value:any) =>
    {
        try 
        {
            setLocalStorage(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        catch(err)
        {
            console.error(err);
        }
    }
    return [localStorage, setValue]
}