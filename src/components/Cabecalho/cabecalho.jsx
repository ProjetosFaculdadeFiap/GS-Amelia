import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <>
            <header> 
                <div className="flex items-center justify-between"> 
                    <Image src="/img/MeM.png"
                    alt="logo empresa M&M"
                    width={150}
                    height={0} /> 

                <nav>
                        <a href="/formularios/historico">
                            <button className="rounded-md px-3 m-2 transition ease-in-out delay-150 bg-red-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 ..."> Histórico </button>
                        </a>  
                    <Link className="cabecalho-links" href="/jornal"> Amelía News </Link>
                    <Link className="cabecalho-links" href="/"> Início </Link>
                    <Link className="cabecalho-links" href="/hapvida/sobrehap"> Hapvida </Link>
                    <Link className="cabecalho-links" href="/formularios/resultados"> Exames </Link>
                        <a href="/formularios/prontuario">
                            <button className="rounded-md px-3 m-2 transition ease-in-out delay-150 bg-red-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 ..."> Prontuário </button>
                        </a>  
                </nav>

                <div>
                    <a href="/usuarios/login">
                            <button className="border-2 border-red-300 rounded-2xl text-red-300 shadow-sm p-1 px-3 m-5">
                                Área Cliente
                            </button>
                    </a>
                </div> 
                </div>
            </header>
        </> 
    )
}

