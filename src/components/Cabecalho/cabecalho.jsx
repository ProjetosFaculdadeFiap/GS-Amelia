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
                    <Link className="px-14 text-[20px]  whitespace-nowrap cabecalho-links" href="/projeto"> projeto </Link>
                    <Link className="px-20 text-[20px]  whitespace-nowrap cabecalho-links" href="/hapvida/info"> home </Link>
                    <Link className="px-10 text-[20px]  whitespace-nowrap cabecalho-links" href="/hapvida"> hapvida </Link>
                </nav>

                <div>
                    <a href="/formulario">
                        <button className="cabecalho-botao px-3 m-5 transition ease-in-out delay-150 bg-red-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 ..."> Formulário </button>
                    </a>  
                        
                </div> 
                </div> 
            </header>
        </> 
    )
}

