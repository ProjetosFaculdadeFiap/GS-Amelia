
"use client"; 
import Image from "next/image";
import { useEffect } from "react";
export default function Jornal() {

  // Utilização de Token para travar rotas
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
        window.location.href = "/usuarios/login";
    }
    }, []);

    return (
        <> 
            <div>
                <h1 className="introducao font-bold"> Seja bem-vindo ao Amelía News </h1>
                    <p className="introducao-informacao"> Estamos com uma alegria no coração, que você está se aventurando em nosso site!! E conhecendo um pouco sobre a nossa trajetória.</p>
                    <p className="introducao-informacao mb-6"> Nossa apoiadora a Hapvida junto da nossa empresa M&M estamos feliz em anúnciar a nossa querida <a class="underline decoration-pink-500">Amelía</a>. A nossa robô que estará ajudando muitos brasileiros, e futuramente ajudará ao mundo!</p>
            
                <h1 className="introducao font-bold"> Qual é nosso objetivo? </h1>
                    <p className="introducao-informacao mb-6"> A M&M tem como objetivo a ajuda em hospitais, sobre questões à mortalidade infantil, materna e global. Ajuda em cuidado de escolas, aonde a Amelía seria uma robô ajudante, que pode tanto orientar crianças sobre doenças como ensinar sobre o cuidado de seus corpos pode ser também uma enfermeira, no qual muitas escolas do brasil não possui  nem kit de primeiros socorros. 
                    Então ela seria de grande ajuda para estas escolas. E por fim o objetivo final que foi desenvolvido a base de uma verdade vivida por uma das integrantes do grupo. Que é sobre o abandono de idosos... Muitas pessoas ao envelhecerem são abandonadas pelos proprios filhos ou parentes 
                    que acabam deixando em asilos ou até esquecem eles. E a nossa querida amelía além de estar junto dando apoio emocional estará lá para ajudar na monitoria deles, em caso de queda, machucados, remédios ela estará lá pra ajudar.</p>

                        <div className="px-6"> 
                            <Image src="/img/amelia.png"
                            alt="amelia imagem"
                            width={250}
                            height={0} />

                            <p className="px-4">Venha conhecer sobre a empresa!!</p>
                            <p className="px-4"> Para a produção da Amelía nós separamos o que deveriamos fazer em cada matéria. Para que tudo se concilie e ocorra tudo bem!</p>
                                <h5 className="px-10 mb-4"> Aqui abaixo está uma ideia de como ouve a organização: </h5>
                                <div className="flex justify-start"> 
                                        <li className="px-10 mb-2"> <strong> AI & Chatbot </strong> </li>
                                        <li className="px-10 mb-2"> <strong> Building Relational Database </strong> - Base de dados com informações dos usuários dos robôs </li>
                                        <li className="px-10 mb-2"> <strong> Computational Thinking Using Python </strong> - Consulta às informações do usuário no banco </li>
                                        <li className="px-10 mb-2"> <strong> Domain Driven Design </strong> - CRUD no banco de dados pra retornar ao front end com informações do prontuário </li>
                                        <li className="px-10 mb-2"> <strong> Responsive Web Development </strong> - Prontuário virtual com requisições ao banco </li>
                                        <li className="px-10 mb-6"> <strong> Software Design & TX </strong> - Diagramas explicando nossa atuação no site, nosso robô gerando prontuários </li>
                                </div>
                                        
                            <p className="introducao-informacao"> Diferentes versões da nossa querida amelía :) </p>
                            <p className="introducao-informacao"> Para nos o R2D2 de StarWars e Wall-E da Pixar foram grandes inspirações para chegarmos na Amelía. </p> 
                            <p className="introducao-informacao"> Criamos três prototipos dela, sendo dois o visual dela de frente e de costas e o terceiro como ela carregaria. </p> 
                            

            </div> 
        </div> 

        </>
    )
} 

