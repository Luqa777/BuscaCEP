import React from 'react';
import {useFormContext} from "react-hook-form";

interface IInputFields {
    name: string;
}

function InputFields({name}: IInputFields) {

    const {register, formState: {errors}} = useFormContext()
    return (
        <>
            <label className="flex justify-between items-center gap-20">
                {name.toUpperCase()}:
                <input {...register(`${name}`)} className="p-2 border focus:outline-0"/>
            </label>
            {errors[name] &&
              <span className="text-center text-red-600">{`${errors[name]?.message}`} </span>
            }
        </>
    );
}

export default InputFields;