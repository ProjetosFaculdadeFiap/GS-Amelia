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
                    <Link className="cabecalho-links" href="/projeto"> projeto </Link>
                    <Link className="cabecalho-links" href="/hapvida/info"> home </Link>
                    <Link className="cabecalho-links" href="/hapvida/sobrehap"> hapvida </Link>
                    <Link className="cabecalho-links" href="/jornal"> jornal </Link>
                    <Link className="cabecalho-links" href="/formularios/resultados"> resultados </Link>
                </nav>

                <div>
                    <a href="/formularios/prontuario">
                        <button className="rounded-md px-3 m-5 transition ease-in-out delay-150 bg-red-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 ..."> Prontuário </button>
                    </a>  
                        
                </div> 
                </div> 
            </header>
        </> 
    )
}

