import Image from "next/image";
import './hapvida.css'

export default function Hapvida() {
    return (
        <> 
            <div>
                <h1 className="introducao"> Conheça mais sobre  <a class="text-red-300"> HAPVIDA </a> NOTREDAME INTERMÉDICA</h1>
                <p className="text-center mb-4"> A Hapvida NotreDame Intermédica é, hoje, a maior operadora de saúde do Brasil, com mais 16,1 milhões de beneficiários de saúde e odontologia. Fruto da fusão entre o Hapvida, que começou suas operações em 1979 com a inauguração do Hospital Antonio Prudente, e a NotreDame Intermédica, fundada em 
                1968 e pioneira em Medicina Preventiva no País, oferece saúde integral e odontologia para Clientes empresariais e individuais em <br />  todas as regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. </p> 

                <p className="text-center mb-10"> Conta com rede assistencial própria composta por 85 hospitais, 77 prontos atendimentos e 331 clínicas médicas. Também dispõe aos seus 
                beneficiários 271 centros de diagnóstico por imagem e coleta laboratorial, dos quais cerca de 100 operações fazem parte do Laboratório NotreLabs, uma rede nacional com capacidade de processar 4,5 milhões de análises clínicas e 500 mil exames de imagens por mês. </p> 
            </div>

            <div className="conteudo-missao"> 
                <h1 className="text-lg font-bold"> Nossa Missão: </h1>
                <h1 className="text-lg font-bold"> Nossa Visão: </h1>
            </div>
            <div className="conteudo-missao-proposta">   
                <p className="text-base mb-4"> Proporcionar saúde integrada de qualidade, acessível <br /> a geração de brasileiros. </p>
                <p className="text-base mb-4"> Ser reconhecida pela qualidade assistencial e <br /> geração de valor para todo o ecossistema da saúde. </p> 
            </div> 
            <div className="conteudo-valores"> 
                <h1 className="px-20 text-lg font-bold"> Nossos Valores: </h1>
            </div>
            <div className="conteudo-valores"> 
            <ul className="px-20"> 
                    <li className="item">Acolhimento</li>
                    <li className="item">Comprometimento</li>
                    <li className="item">Ética e combate à corrupção</li>
                    <li className="item">Inovação e aprendizado</li>
                    <li className="item">Respeito</li>
                    <li className="item">Responsabilidade social</li>
                    <li className="item">Sustentabilidade</li>
                    <li className="item">Eficiência em custo</li>
            </ul>
            </div>


                <div className='flex justify-center m-10'> 
                <a className='px-2' href='#'> 
                    <Image 
                    src="/img/facebook.png"
                    alt="logo facebook"
                    width={35}
                    height={55}  />
                    </a> 

                    <a className='px-4' href='#'> 
                    <Image 
                    src="/img/instagram.png"
                    alt="logo instagram"
                    width={35}
                    height={55}  />
                    </a> 

                    <a className='px-2' href='#'> 
                    <Image 
                    src="/img/twitter.png"
                    alt="logo twitter"
                    width={35}
                    height={55}  />
                    </a> 
            </div> 
            <div> 
                <p className='text-center'> Hapvida Saúde (ANS 36.825-3) - Todos os direitos reservados Políticas de Privacidade </p> 
            </div> 
        </>
    )
}

