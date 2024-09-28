import { Button, Image } from "@nextui-org/react"
import Link from "next/link"

export const metadata = {
    title: "Cadastro concluido com sucesso"
}

export default function SucessPage(){
    return (
        <div className="flex items-center justify-center flex-col gap-4">
            <Image 
                src="/bingo-animate.svg"
                height={400}
                width={400}
            />
            <h1 className="text-4xl text-center font-bold">
                Obrigado por se registrar no sistema
            </h1>
            <Button color="primary"> 
                <Link href={"/login"}>Acessar a minha conta</Link>
            </Button>
        </div>
    )
}