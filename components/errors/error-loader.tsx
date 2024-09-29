"use client"
import { Button, Image } from "@nextui-org/react"



const ErrorLoading = () =>{
    return(
        <div>
            <div className="flex flex-col gap-3 items-center justify-center">
                <Image 
                    src="/500-internal-server-error-animate.svg"
                    height={300}
                    width={300}
                />
                <h1 className="text-3xl font-bold">Upps Alguma coisa falhou</h1>
                <div className="">
                    <Button>Atualizar a pagina</Button>
                </div>
            </div>
        </div>
    )
}


export default ErrorLoading