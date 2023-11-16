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
                    <Link className="absolute w-2 left-[710px] text-[20px]  whitespace-nowrap cabecalho-links" href="/"> sobre nós </Link>
                    <Link className="absolute w-2 left-[850px] text-[20px]  whitespace-nowrap cabecalho-links" href="/"> home </Link>
                    <Link className="absolute w-2 left-[960px] text-[20px]  whitespace-nowrap cabecalho-links" href="/"> projeto </Link>
                    <Link className="absolute w-2 left-[1080px] text-[20px] whitespace-nowrap cabecalho-links" href="/"> serviços </Link>
                </nav>

                <div>
                    <a href="/users-info/login"> 
                    <Image className="m-10 w-[55px]" src="/img/login.png"
                    alt="login png"
                    width={30}
                    height={0} /> 
                    </a> 
                </div> 
                </div> 
            </header>
        </> 
    )
}

