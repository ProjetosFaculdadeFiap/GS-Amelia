import Image from "next/image";

export default function Resultados() {
    return (
        <> 
            <div>
                <h1 className="introducao"> Olá seja-bem vindo a parte de resultados! </h1>
                <p className="introducao-informacao mb-6"> Aqui é possivel acessar os resultados obtidos em seus exames!</p>

            <div className="flex justify-center"> 
                <Image src="/img/resultado-exame.png"
                alt="resultado exame"
                width={500}
                height={500} /> 
            </div> 
            </div>
        </>
    )
}