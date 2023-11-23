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
                <p className="introducao-informacao mb-6"> Conhecendo um pouco da <a class="text-red-300">Amelía</a>. Venha conhecer como nós produzimos à ideia, como tivemos a organização de cada matéria utilizada, sobre os produtores do projeto, e muito mais!</p>
            </div>
        </>
    )
}