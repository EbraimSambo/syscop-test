"use client"
import { Button, Image } from "@nextui-org/react"
import { useState } from "react"



const ErrorLoading = () =>{
    const [isLoading, setIsLoading] =    useState(false)
    function reloadPage(){
        setIsLoading(true)
        return window.location.reload()
    }
    return(
        <div className="flex items-center justify-center p-4">
            <div className="flex flex-col gap-3 items-center justify-center">
                <Image 
                    src="/500-internal-server-error-animate.svg"
                    height={300}
                    width={300}
                />
                <h1 className="text-3xl font-bold">Upps Alguma coisa falhou!</h1>
                <p className="text-center font-bold text-xl">Estamos a tentar resolver o error, os dados voltaram em breve...</p>
                <div className="">
                    <Button color="primary" isLoading={isLoading} onClick={reloadPage}>Atualizar a pagina</Button>
                </div>
            </div>
        </div>
    )
}


export default ErrorLoading