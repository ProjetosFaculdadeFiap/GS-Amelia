import Image from 'next/image';
import '/tailwind.config.js'; 
export default function Home() {
  return (
    <> 
      <div> 
        <h1 className="introducao"> Seja Bem-Vindo(a) à <a class="text-pink-300"> HAPVIDA </a> NOTREDAME INTERMÉDICA</h1>
          <p className="introducao-informacao mb-4"> RN Saúde agora é Hapvida NotreDame Intermédica e você pode contar com mais saúde de qualidade mais perto de você, com uma das maiores empresas verticalizadas do mundo e o maior Grupo de saúde do país. </p> 
          <p className="introducao-informacao mb-14"> Buscamos sempre proporcionar melhor experiência por meio de um atendimento acolhedor e com uma assistência médica de qualidade  em nossos hospitais, clínicas, pronto atendimentos, centros de medicina preventiva, centros de diagnóstico por imagem e coleta laboratorial. </p> 
        </div> 

        <div> 
          <h3 className="px-20 text-lg font-bold mb-6"> Conheça os nossos serviços: </h3>

            <div className='px-20 mb-10'> 
            <div className='flex items-center '>
                    <div className="mr-2">
                    <Image 
                            src="/img/teleconsulta.png"
                            alt="mini computador"
                            width={55}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-2"> Teleconsulta </h4>
                    </div>
                
                    <div className="mr-2 ml-20">
                    <Image 
                            src="/img/boleto.png"
                            alt="boleto"
                            width={55}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-2 mr-10"> 2° via do boleto </h4>
                    </div>

                    <div className="mr-2">
                    <Image 
                            src="/img/carencia.png"
                            alt="coração carente"
                            width={55}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-2"> Carência </h4>
                    </div>
            </div> 
            </div> 

            <div className='px-20 mb-10'> 
            <div className='flex items-center '>
                    <div className="mr-2">
                    <Image 
                            src="/img/forms.png"
                            alt="formulario de exames"
                            width={55}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-2 mr-10"> Consultas e Exames </h4>
                    </div>

                    <div className="mr-2">
                    <Image 
                            src="/img/app.png"
                            alt="boleto"
                            width={55}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-2 mr-10"> Autorização via Site/ ou App </h4>
                    </div>

                    <div className="mr-2">
                    <Image 
                            src="/img/biometria.png"
                            alt="coração carente"
                            width={55}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-2"> Biometria </h4>
                    </div>
            </div> 
            </div> 

            <div className='px-20 mb-10'> 
            <div className='flex items-center '>
                    <div className="mr-2">
                    <Image 
                            src="/img/documentos.png"
                            alt="documentos"
                            width={55}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-2 mr-10"> Documentação Necessária </h4>
                    </div>

                    <div className="mr-2">
                    <Image 
                            src="/img/carteira.png"
                            alt="carteira virtual"
                            width={55}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-2 mr-10"> Carteirinha Virtual </h4>
                    </div>

                    <div className="mr-2">
                    <Image 
                            src="/img/odonto.png"
                            alt="dente brilhando"
                            width={55}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-2"> Odontologia </h4>
                    </div>
            </div> 
            </div> 

            <div className='px-20 mb-10'> 
            <div className='flex items-center '>
                    <div className="mr-2">
                    <Image 
                            src="/img/duvida.png"
                            alt="duvida"
                            width={60}
                            height={55}  />
                    </div> 
                    <div>
                      <h4 className="text-base mb-6 mr-10"> Dúvidas </h4>
                    </div>
            </div> 
            </div> 
        </div> 

        <div> <h3 className="acesso"> Como posso acessar os canais digitais? </h3>
          <p className='px-20'> Para ter acesso aos canais e serviços digitais de medicina e odontologia, você precisa realizar o cadastro e criar sua senha. </p>
          
            <div className="px-20 mb-8">
              <a href='https://www.hapvida.com.br/site/noticias/baixe-agora-nosso-app-e-tenha-o-hapvida-ao-alcance-do-seu-celular'> 
                <button className='canal-botao'> Cadastre Já </button>
              </a>
            </div>
            </div>  

            <div> <h3 className="acesso"> Quero marcar uma consulta!</h3>
          <p className='px-20'> Para você iniciar e poder ter acesso as nossas bases de consultas é necessário fazer seu formulário médico para começarmos a trabalhar! </p>
          
            <div className="px-20 mb-8">
              <a href='/formularios/agenda/consulta'> 
                <button className='canal-botao'> Registro </button>
              </a>
            </div>
            </div>  
  

        <div className='card'> 
          <h1 className='card-pai'> Ainda não possui plano?  </h1>
        </div> 
            <p className='text-center text-lg'> Venha para o Hapvida e conte com os cuidados exclusivos do Sistema de Saúde que mais cresce no Brasil. </p> 
          
          <div className='flex justify-evenly'>
              <div className='card-filho m-5'>
                  <h1 className='text-center text-lg mb-2 m-5 '> Solicite seu Pagamento </h1> 
                    <p className='text-sm m-2 text-center'> A maior rede exclusiva do <br /> Brasil pelo menor preço  </p>  
                    <p className='text-center text-sm font-bold mb-2'> A partir de 66,47*/Mês </p> 

                    <div className='text-center '> 
                      <a className="text-sm" href='#'> Leia o regulamento </a> 
                    </div> 

                    <div className='px-20'> 
                      <a href='https://www.hapvida.com.br/site/vendas/saude'> 
                        <button className='plano-botao'> Faça seu plano </button>
                      </a>
                    </div> 
              </div> 

              <div className='card-filho m-5'>
                  <h1 className='text-center text-lg mb-2 m-5 '> Garanta seu Plano Odonto </h1> 
                    <p className='text-sm m-2 text-center'> Cobertura odontológica completa <br /> em TODO BRASIL </p>  
                    <p className='text-center text-sm font-bold mb-2'> Por apenas 31,90/ Mês </p> 

                    <div className='text-center '> 
                      <a className="text-sm" href='#'> Leia o regulamento </a> 
                    </div> 

                    <div className='px-20'> 
                      <a href='https://www.hapvida.com.br/site/vendas/odonto'> 
                        <button className='plano-botao'> Faça seu plano </button>
                      </a>
                    </div> 
                    <p className='text-xs text-center m-1'> No caso de dúvidas, ligue 0800 284 9131 </p> 
                

              </div> 

              <div className='card-filho m-5'>
                  <h1 className='text-center text-lg mb-2 m-5 '> Cuide da saúde de quem <br/>  você ama de onde estiver! </h1> 
                    <p className='text-sm m-2 text-center'> Conte com uma rede de cobertura <br /> completa, preços que cabem no seu <br />  bolso e o melhor: você monta o plano <br /> que é ideal para o seu momento. </p>  

                    <div className='px-20'> 
                      <a href='https://contrate-online.hapvida.com.br/'> 
                        <button className='plano-botao'> Faça seu plano </button>
                      </a>
                    </div> 
              </div> 
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
