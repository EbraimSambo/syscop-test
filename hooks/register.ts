import { confiAxios } from "@/config/axios";
import { inferRegister, RegisterSchema } from "@/schemas";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

interface Message{
    type?: "error" | "success" | "wrning"| "disabled"
    message: string
}


export function useRegister(){

    const form = useForm<inferRegister>({
        resolver: zodResolver(RegisterSchema), 
        defaultValues: {
            email: "",
            name: "", 
            password:"",
            repeatPassword:""
        }
    })

    const [isPadding, setIspadding] = useState(false)

    const [message, setMessage] = useState<Message>()


   function onsubmit(values: inferRegister){
    const {email,name,password,repeatPassword} = values

    setIspadding(true)
    setMessage({message: "", type: "disabled"})

    if(password != repeatPassword){ 
        setIspadding(false)
        return setMessage({message: "As senha não são iguais", type: "error"})
    }


     const res = confiAxios.post('user/create',{
        email,
        name, 
        password
     })

     res.then((res)=>{
        console.log(res)
        return window.location.assign("/success/create")
     }).catch((error)=>{
        console.log(error)

        if(error.code === "ERR_NETWORK")
            return setMessage({message: "Erro de conexão, verifique a sua internete", type: "error"})

        if(error.request.status === 0) 
            return setMessage({message: "Erro de conexão, verifique a sua internete", type: "error"})

        if(error.response.data.statusCode === 409) 
            return setMessage({message: "Este Email já foi utilizado um outro usuario", type: "error"})

        if(error.response.data.statusCode === 500) 
            return setMessage({message: "Alguma coisa aconteceu com sua conexão", type: "error"})
     })
     .finally(()=>{
        setIspadding(false)
     })
   }

   return {onsubmit, form,isPadding, message}
    
}