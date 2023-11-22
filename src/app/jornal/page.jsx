import Image from "next/image";

export default function Jornal() {
    return (
        <> 
            <div className="px-10"> 
                <Image src="/img/amelia.png"
                    alt="amelia imagem"
                    width={200}
                    height={0} />
            </div>

            <div> 
                <p className="introducao-informacao mb-6"> Conhecendo um pouco da Amelía... Venha conhecer como nós produzimos à ideia, à organização, sobre os produtores do projeto, venha conheçer sobre :D</p>
                <h1> Conhecendo sobre nossa história </h1>
            </div>
        </>
    )
}