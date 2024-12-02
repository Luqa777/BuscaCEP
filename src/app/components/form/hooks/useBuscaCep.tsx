import React, {useCallback, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {formSchema, formSchemaProps} from "@/app/components/form/utils/formSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import endereco from "@/app/components/form/types/typeEndereco";

const UseBuscaCep = () => {

    const methods = useForm<formSchemaProps>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            CEP: "",
            logradouro: "",
            bairro: "",
            localidade: "",
            estado: "",
            regiao: "",
            ddd: ""
        }
    })

    const submitForm = (data: formSchemaProps) => {
        console.log(data)
    }
    const cep = methods.watch("CEP");

    const handleSetEndereco = useCallback(
        (data: endereco) => {
            methods.setValue("logradouro", data.logradouro);
            methods.setValue("bairro", data.bairro);
            methods.setValue("localidade", data.localidade);
            methods.setValue("estado", data.estado);
            methods.setValue("regiao", data.regiao);
            methods.setValue("ddd", data.ddd);
        },
        [methods.setValue]
    );

    const handleFetchEndereco = useCallback(
        async (cep: string) => {
            const responseAPI = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
                res.json()
            );
            handleSetEndereco(responseAPI);
        },
        [handleSetEndereco]
    );

    useEffect(() => {
        if (cep.length !== 8) return;
        handleFetchEndereco(cep);
    }, [cep, handleFetchEndereco]);

        return {
            methods,
            submitForm
        }
};

export default UseBuscaCep;