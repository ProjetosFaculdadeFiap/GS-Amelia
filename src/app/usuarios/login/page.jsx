"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {

    const [entrada, setEntrada] = useState('')
    const [senha, setSenha] = useState('')
    
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const resposta = await fetch("http://localhost:8080/mm/usuario");
    
            if (resposta.ok) {
                const contentType = resposta.headers.get("content-type");
    
                if (contentType && contentType.includes("application/json")) {
                    const resultado = await resposta.json();
                    console.log(resultado)
                    console.log(entrada, senha)
    
                    for(let i = 0; i < resultado.length; i ++) {
                        
                        if ((resultado[i].email == entrada || resultado[i].cpf == entrada)&&(resultado[i].senha == senha)){
                            console.log("Você entrou")

                            sessionStorage.setItem("user", {"id" : resultado[i].id})
                            
                            sessionStorage.setItem("token", resultado);
                            window.location.href = "/";
                        }
                    }
    
                    // Resto do código...
                } else {
                    console.log("JSON não suportado :(");
                }
            } else {
                console.log(`Erro no servidor: ${resposta.status}`);
            }
        } catch (error) {
            console.log("Erro ao envio de dados!", error);
        }
    };

    return (
        <> 
            <section className="flex justify-center items-center h-screen">
            <div className="mx-auto p-10 bg-red-200 rounded-lg shadow-md">

                <form onSubmit={handleLogin} className="registro-card"> 
                    <fieldset className="m-0 p-0 border-none"> 
                    <legend className="text-lg font-bold mb-4">Registro de Usuários </legend> 

                        <div className="mb-4"> 
                        <div> 
                            <label className="mb-2" htmlFor="idEmail"> Digite seu E-mail ou seu CPF: </label>
                            <input className="p-3 my-4 border rounded-md w-full"
                            type="email" name="email" id="idEmail" placeholder="Digite seu e-mail ou cpf" required onChange={(e) => setEntrada(e.target.value)} />
                        </div>
                        </div>

                        <div> 
                            <label className="mb-2" htmlFor="idSenha"> Digite sua senha: </label>
                            <input className="p-3 my-4 border rounded-md w-full"
                            type="password" name="senha" id="idSenha" placeholder="Digite sua senha" required onChange={(e) => setSenha(e.target.value)}/>
                        </div>

                        <div className="flex flex-col items-center"> 
                            <button className="registro-card-resposta">
                                Entrar 
                            </button>
                            <div className="login">
                                <Link href="/usuarios/cadastro"> Não possui cadastro? Clique aqui :)</Link>
                            </div> 
                        </div>
                    </fieldset>
                </form>
            </div>
            </section>
        </>
    )
}