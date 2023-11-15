import Link from "next/link";
import './login.css'; 

export default function Login() {
    return (
        <> 
        <div id="lin_grad">
            <div className="info-login">
                <form action="#" className="form-login">
                    <fieldset className="form-fieldset"> 
                        <legend className="form-login-users"> Login de Usuários </legend> 
                            <p className="mb-8"> Faça login, para adentrar em nosso site :)  </p> 

                            <div> 
                                <input className="form-user mb-4"
                                    type="name" name="nome" id="idNome"
                                    placeholder="Digite seu E-mail ou CPF:" />
                            </div> 

                            <div> 
                                <input className="form-senha mb-4"
                                    type="email" name="email" id="idEmail"
                                    placeholder="Digite sua Senha:" />
                            </div> 

                            <div className=""> 
                                <button className="botao-login" type="submit"> Entrar </button>
                                <Link className="destaque-mouse" href="/users-info/cadastro"> Ainda não tem cadastro? Faça cadastro aqui :) </Link>
                            </div> 
                            
                    </fieldset> 
                </form> 
            </div> 
        </div>
        </>
    )
}