import Link from "next/link";

export default function Erro404() {
    return (
        <> 
            <h1 className="flex justify-center"> <strong> OOPS! 404  </strong></h1> 
                <p className="flex justify-center"> parece que você está tentando acessar uma página que não existe! </p> 
                <p className="flex justify-center"> <Link href="/"> Volte a página <strong>home</strong> antes que você se perca!</Link></p>
        </> 
    )
}