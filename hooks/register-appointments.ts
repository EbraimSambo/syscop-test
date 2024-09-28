import { confiAxios } from "@/config/axios"
import { AppointemntsSchema, inferRegisterAppointments } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"

interface Message{
    type?: "error" | "success" | "wrning"| "disabled"
    message: string
}





export function useRegisterAppointments(){
    const form = useForm<inferRegisterAppointments>({
        resolver: zodResolver(AppointemntsSchema), 
        defaultValues: {
            email: "",
            bi: "", 
            dataVisit: "",
            FristName: "",
            LasTName: "",
            phone: "",
            project: "",
            visitTime: ""
        }
    })

    const [isPadding, setIspadding] = useState(false)

    const [message, setMessage] = useState<Message>()


   function onsubmit(values: inferRegisterAppointments){
    const {email,FristName,LasTName,bi,dataVisit,phone,project,visitTime} = values

    setIspadding(true)
    setMessage({message: "", type: "disabled"})

     const res = confiAxios.post('appointments/create/1',{
        email,
        name: `${FristName} ${LasTName}`,
        phone,
        visitTime,
        bi,
        dataVisit
     })

     res.then((res)=>{
        console.log(res)
        // return window.location.assign("/success/create")
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