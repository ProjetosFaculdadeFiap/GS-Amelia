//import Image from "next/image";

import Image from "next/image";

export default function Jornal() {
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
                                <h5 className="px-10 mb-2"> Aqui abaixo está uma ideia de como ouve a organização: </h5>
                                        <li className="px-10 mb-2"> <strong> AI & Chatbot </strong> </li>
                                        <li className="px-10 mb-2"> <strong> Building Relational Database </strong> - Base de dados com informações dos usuários dos robôs </li>
                                        <li className="px-10 mb-2"> <strong> Computational Thinking Using Python </strong> - Consulta às informações do usuário no banco </li>
                                        <li className="px-10 mb-2"> <strong> Domain Driven Design </strong> - CRUD no banco de dados pra retornar ao front end com informações do prontuário </li>
                                        <li className="px-10 mb-2"> <strong> Responsive Web Development </strong> - Prontuário virtual com requisições ao banco </li>
                                        <li className="px-10 mb-6"> <strong> Software Design & TX </strong> - Diagramas explicando nossa atuação no site, nosso robô gerando prontuários </li>
                        </div>

                <h1 className="introducao font-bold"> Curiosidades </h1>    
                    <p className="introducao-informacao"> Nossa robô amelía tem um nome por trâs. Se chamada assim: </p>
                        <p className="border-2 rounded-sm border-pink-200 m-5 p-5">
                            <li> A ssistência </li> 
                            <li> M édica </li> 
                            <li> E special</li> 
                            <li> L ligada à </li> 
                            <li> I  nteligência</li> 
                            <li> A  rtificial</li> 
                        </p> 
                    <p className="introducao-informacao mb-6"> Por que nossa empresa se chama M&M? Bom isso é uma boa pergunta, já que ela é um trocadilho sobre nosso grupo aonde somos compostos por quatro meninas e um menino. 
                        Então brincamos com isso fazendo a sigla M&M. 
                    </p>

                <h1 className="introducao font-bold"> Participantes </h1>


            </div> 

        </>
    )
}

