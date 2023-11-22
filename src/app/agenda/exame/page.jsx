export default function Exame() {
    return (
        <> 
            <div> 
                <h1 className="introducao"> Olá seja-bem vindo a parte de agendamento de exames! </h1>
                <p className="introducao-informacao mb-10"> Aqui é possível você marcar um exame geral aonde você pode atualizar seus dados, fazer exames simples e de rápido diagnóstico ou até mesmo exames disponíveis pelo seu convênio.</p>
            
                <h2 className="convenio"> Por sinal, você possui plano do convênio? </h2>
                <p className="introducao-informacao"> Se não, venha para a Hapvida e faça um plano conosco e receba vários benéficios! </p>
                    <div className="px-20"> 
                      <a href='#'> 
                        <button className='plano-botao'>Faça seu plano</button>
                      </a>
                    </div>
            </div>

            <div className="cardzao"> 
                    <h1 className="conteudo-pai"> Agende Seus Exames </h1>
                    <p className="conteudo-filho"> Seja bem-vindo(a)! Venha marcar um check-up conosco! </p>

                    <div> 
                        <form> 
                            <div> 
                                <label className="formulario"> Em qual dia você gostaria de marcar seu exame? </label>
                                <input className="" type="date" required/>
                            </div>

                            <div> 
                                <label className="formulario"> Em qual horário você gostaria de marcar seu exame? </label>
                                <input className="m-4" type="checkbox" required/>
                                    <span> MANHÃ </span> 
                                <input className="m-4" type="checkbox" required/>
                                    <span> TARDE </span> 
                                <input className="m-4 mb-4" type="checkbox" required/>
                                    <span> NOITE </span> 
                            </div>

                            <div> 
                                <label className="formulario"> Em qual laboratório você gostaria de fazer? </label>
                                <input className="formulario-resposta" type="text" required/>
                            </div>

                            <div> 
                                <input className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-200 duration-300 ... rounded-md m-2 bg-pink-200 px-3 ' type="submit" value="Marque seu exame"/>
                            </div>
                       
                        </form>
                    </div>
            </div>



        </>
    )
}