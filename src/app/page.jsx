export default function Cadastro() {
  return (
      <> 
          <div className="wrapper login"> 
              <div className="container">

                  <div className="col-left"> 
                      <div className="login-text">
                          <h2> Bem-Vindo! </h2> 
                          <p> Se cadastre, para adentrar <br/> em nosso site :) </p>
                          <a href="#" className="btn"> Registrar-se </a>
                      </div>
                  </div>

                  <div className="col-right"> 
                      <div className="login-form"> 
                          <h2> Login de Usuários </h2>
                          <form action=""> 
                              <p> 
                                  <label> Digite seu E-mail ou seu CPF: <span>*</span></label>
                                  <input type="text" placeholder="E-mail ou CPF" required /> 
                              </p>

                              <p> 
                                  <label> Digite sua senha: <span>*</span></label>
                                  <input type="password" placeholder="Senha" required/>                                
                              </p>
                              
                              <p> 
                                  <input type="submit" value="Entrar"/>
                              </p>
                              <p> 
                                  <a href="#"> Esqueceu sua senha? </a>
                              </p>
                          </form>
                      </div>
                  </div>

              </div>
          </div>
      </>
  )
}