import {z} from "zod";

export const formSchema = z.object({
    CEP: z.string().min(8, "Cep invalido"),
    logradouro: z.string().min(1, "Informe um logradouro valido"),
    bairro: z.string().min(1, "Informe um logradouro valido"),
    localidade: z.string().min(1, "Informe um logradouro valido"),
    estado: z.string().min(1, "Informe um logradouro valido"),
    regiao: z.string().min(1, "Informe um logradouro valido"),
    ddd: z.string().min(1, "Informe um logradouro valido")
})

export type formSchemaProps = z.infer<typeof formSchema>