
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

                        
            </div> 
        </>
    )
} 

