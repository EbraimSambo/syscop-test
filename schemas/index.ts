import { z } from "zod";



export const LoginSchema = z.object({
    email: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio").email("formato de email invalido"),
    password: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio"),
})



export const RegisterSchema = z.object({
    name: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio"),
    email: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio").email("formato de email invalido"),
    password: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio"),
    repeatPassword: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio"),
})

export const AppointemntsSchema = z.object({
    FristName: z.string().min(1,"Campo obrigatorio").nonempty("Campo obrigatorio"),
    LasTName: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio"),
    email: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio"),
    phone: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio"),
    visitTime: z.string().min(0,"Campo obrigatorio").optional()
    .or(z.literal('')),
    bi: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio"),
    dataVisit: z.date(),
    project: z.string().min(0,"Campo obrigatorio").nonempty("Campo obrigatorio"),
    optionalPhone: z.string().min(0,"Campo obrigatorio").optional()
    .or(z.literal('')),
})


export type inferRegisterAppointments = z.infer< typeof AppointemntsSchema>
export type inferRegister = z.infer< typeof RegisterSchema>
export type inferLogin = z.infer< typeof LoginSchema>