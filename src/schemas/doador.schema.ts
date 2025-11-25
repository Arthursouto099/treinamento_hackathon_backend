import z from "zod"

const createDoadorSchema = z.object({
    nome: z.string({error: "Nome é obrigatorio"}).min(2, {error: "Nome deve ser maior que 2 caracters"}),
    cpf: z.string({error: "Documento é obrigatorio"}).min(11),
    idade: z.number({error: "Idade é  obrigatoria"}).min(18, {
        error: "Doador deve ser maior de idade"
    }).max(69, {
        error: "Doador deve ter menos de 69 anos"
    }),
    peso: z.number({error: "Peso é obrigatorio"}).min(50, {error: "Doador deve ter no mínimo 50 kg"}),
    tipo_sanguineo: z.enum([
        "A+" , "A-" , "B+" , "B-" , "AB+" , "AB-" , "O+" , "O-"
    ], {error: "Tipo sanguineo não cadastrado"})
}) 

const updateDoadorSchema = createDoadorSchema.partial()


export {
    createDoadorSchema,
    updateDoadorSchema
}