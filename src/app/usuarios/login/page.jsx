"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const usuario = {
            email,
            senha,
        };
        const resposta = await fetch("", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
            });
        
        if (resposta.ok) {
            const dados = await resposta.json();
            sessionStorage.setItem("token", dados.token);
            } else {
            console.error('Seu login deu erro! Você já se cadastrou?', resposta.status, resposta.statusText);
            } }

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
                            type="email" name="email" id="idEmail" placeholder="Email:"        
                            
                            required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        </div>

                        <div> 
                            <label className="mb-2" htmlFor="idSenha"> Digite sua senha: </label>
                            <input className="p-3 my-4 border rounded-md w-full"
                            type="password" name="senha" id="idSenha" placeholder="Senha:"        
                            required onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <div className="flex flex-col items-center"> 
                            <button className="registro-card-resposta">
                                Entrar 
                            </button>
                            <div className="login">
                                <Link href="/"> Não possui cadastro? Clique aqui :)</Link>
                            </div> 
                        </div>
                    </fieldset>
                </form>
            </div>
            </section>
        </>
    )
}