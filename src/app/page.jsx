"use client"; 
import Link from "next/link";
import { useState } from "react"

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
        const handleCadastro = async (e) => {
        e.preventDefault();
        const novoUsuario = {
            nome,
            cpf,
            email,
            senha,
        };
        const resposta = await fetch("", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoUsuario),
        });
        
        if (resposta.ok) {
            const dados = await resposta.json();
            sessionStorage.setItem("usuario", JSON.stringify(dados));
        } else {
            console.error('Erro ao incluir seu cadastro, tente novamente mais tarde!:', resposta.status, resposta.statusText);
        }}

    return (
        <> 
            <section className="flex justify-center items-center h-screen">
            <div className="mx-auto p-10 bg-red-200 rounded-lg shadow-md">

                <form onSubmit={handleCadastro} className="registro-card"> 
                    <fieldset className="m-0 p-0 border-none"> 
                    <legend className="text-lg font-bold mb-4">Registro de Usuários </legend> 

                        <div> 
                            <label className="mb-2" htmlFor="idNome"> Digite seu nome completo: </label>
                            <input className="p-3 my-4 border rounded-md w-full"
                            type="text" name="nome" id="idNome" placeholder="Nome Completo:"        
                            
                            required onChange={(e) => setNome(e.target.value)} /> 
                        </div>

                        <div className="mb-4"> 
                        <div> 
                            <label className="mb-2" htmlFor="idEmail"> Digite seu E-mail: </label>
                            <input className="p-3 my-4 border rounded-md w-full"
                            type="email" name="email" id="idEmail" placeholder="Email:"        
                            
                            required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        </div>

                        <div> 
                            <label className="mb-2" htmlFor="idCpf"> Informe seu CPF: </label>
                            <input className="p-3 my-4 border rounded-md w-full"
                            type="text" name="cpf" id="idCpf" placeholder="CPF:"        
                            
                            required onChange={(e) => setCpf(e.target.value)} />
                        </div>

                        <div> 
                            <label className="mb-2" htmlFor="idSenha"> Crie uma Senha: </label>
                            <input className="p-3 my-4 border rounded-md w-full"
                            type="password" name="senha" id="idSenha" placeholder="Senha:"        
                            
                            required onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <div className="flex flex-col items-center"> 
                            <button className="registro-card-resposta">
                                Registrar 
                            </button>
                            <div className="login">
                                <Link href="/usuarios/login"> Já possui login? Clique aqui :)</Link>
                            </div>  
                        </div>
                    </fieldset>
                </form>
            </div>
            </section>
        </>
    )
}

