import { useState } from "react";
interface Props {
    initial?:boolean
}

export const useToggle = ( {initial=false}:Props = {}) =>{
    const [Value, setValue] = useState<boolean>(initial);

    const toggle=()=>{
        setValue(!Value)
    }
    return {
        Value,  setValue,toggle
    }
}