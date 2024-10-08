"use client"
import { Button, Image } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { useState } from "react"



const ErrorLoading = () =>{
    const [isLoading, setIsLoading] =    useState(false)
    const router = useRouter()
    function reloadPage(){
        setIsLoading(true)
        return window.location.reload()
    }

    function resolutionProbleme(){
        setIsLoading(true)
        return router.refresh()
    }
    return(
        <div className="flex items-center justify-center p-4">
            <div className="flex flex-col gap-3 items-center justify-center">
                <Image 
                    src="/500-internal-server-error-animate.svg"
                    height={350}
                    width={350}
                />
                <h1 className="text-3xl font-bold">Upps Alguma coisa falhou!</h1>
                <p className="text-center font-bold text-base max-w-[440px] w-full mx-auto ">
                    Estamos a tentar resolver o erro,
                     os dados voltarão em breve, quando tudo estiver pronto...</p>
                <div className="flex gap-4 items-center flex-wrap">
                    <Button color="primary" isLoading={isLoading} onClick={reloadPage}>
                        {isLoading && 'processando...'}
                        {!isLoading && 'Atualizar a pagina'}
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default ErrorLoading