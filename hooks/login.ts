import { DEFAULT_LOGIN_REDIRECT } from "@/auth/routes";
import { confiAxios } from "@/config/axios";
import { inferLogin, LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";



interface Message {
    type?: "error" | "success" | "wrning" | "disabled"
    message: string
}



export function useLogin() {

    const form = useForm<inferLogin>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const [isPadding, setIspadding] = useState(false)

    const [message, setMessage] = useState<Message>()


    function onsubmit(values: inferLogin) {
        const { email, password } = values

        setIspadding(true)
        setMessage({ message: "", type: "disabled" })


        const res = confiAxios.post('auth/login', {
            email,
            password
        })

        res.then(async (res) => {
            console.log(res)
            try {
                const response = await signIn("credentials", {
                    username: email,
                    password,
                    // redirect: false
                    redirectTo: DEFAULT_LOGIN_REDIRECT
                })
                console.log(response)
            } catch (error) {
                return setMessage({ message: "Alguma coisa aconteceu de forma inesperada, tentenovamente", type: "error" })
            }
        }).catch((error) => {
            console.log(error)

            if (error.code === "ERR_NETWORK")
                return setMessage({ message: "Erro de conexão, verifique a sua internete", type: "error" })

            if (error.request.status === 0)
                return setMessage({ message: "Erro de conexão, verifique a sua internete", type: "error" })

            if (error.response.data.statusCode === 401)
                return setMessage({ message: error?.response?.data?.message, type: "error" })

            if (error.response.data.statusCode === 500)
                return setMessage({ message: "Alguma coisa aconteceu de forma inesperada, tente novamente", type: "error" })
        })
            .finally(() => {
                setIspadding(false)
            })
    }

    return { onsubmit, form, isPadding, message }

}