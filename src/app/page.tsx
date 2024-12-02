'use client'

import Form from "@/app/components/form/Form";
import InputFields from "@/app/components/form/InputFields";
import Button from "@/app/components/form/Button";
import React from "react";
export default function Home() {

    return (
        <div className="flex items-center justify-center w-full h-screen">
            <Form>
                <InputFields name="CEP"/>
                <InputFields name="logradouro"/>
                <InputFields name="bairro"/>
                <InputFields name="localidade"/>
                <InputFields name="estado"/>
                <InputFields name="regiao"/>
                <InputFields name="ddd"/>
                <Button variant="enviar">Enviar</Button>
            </Form>
        </div>
    );
}
