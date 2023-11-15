import Link from "next/link";
import './cadastro.css'; 

export default function Cadastro() {
    return (
        <> 
        <div id="lin_grad">
            <div className="info-cadastro">
                <form action="#" className="form-cadastro">
                    <fieldset className="form-fieldset"> 
                        <legend className="form-registro"> Registro de Usuários </legend> 
                            <p className="mb-8"> Se cadastre, para adentrar em nosso site :) </p> 

                            <div> 
                                <input className="form-nome mb-4"
                                    type="name" name="nome" id="idNome"
                                    placeholder="Nome Completo:" />
                            </div> 

                            <div> 
                                <input className="form-email mb-4"
                                    type="email" name="email" id="idEmail"
                                    placeholder="E-mail:" />
                            </div> 

                            <div> 
                                <input className="form-cpf mb-4"
                                    type="text" name="cpf" id="idCpf"
                                    placeholder="Informe seu CPF:" />
                            </div> 

                            <div> 
                                <input className="form-senha mb-4"
                                    type="password" name="senha" id="idSenha"
                                    placeholder="Crie uma senha:" />
                            </div> 

                            <div> 
                                <button className="botao-registro" type="submit"> Registrar </button>
                                <Link className="destaque-mouse" href="/users-info/login"> Já possui cadastro? Faça login aqui :) </Link>
                            </div> 
                            
                    </fieldset> 
                </form> 
            </div> 
        </div>
        </>
    )
}