import React, {useCallback, useEffect} from 'react';
import {FormProvider} from "react-hook-form";
import useBuscaCep from "@/app/components/form/hooks/useBuscaCep";

function Form({children}: any) {
    const {methods, submitForm} = useBuscaCep()



    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitForm)} className="flex flex-col gap-5">
                {children}
            </form>
        </FormProvider>
    );
}

export default Form;