"use client"; 
import { useEffect, useState } from "react";

export default function Feedback() {

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
        window.location.href = "/usuarios/login";
    }
    }, []);

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [proposta, setProposta] = useState('');
    const [indicacao, setIndicacao] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/mm/resultado', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                descricao: descricao,
                proposta: proposta, 
                indicacao: indicacao            
            })
        });

        if (response.ok) {
            alert('Feedback enviado com sucesso!');
        } else {
            alert('Erro ao enviar feedback');
        }
    }


    return (
        <> 
            <section className="flex justify-center items-center h-screen">
            <div className="mx-auto p-10 bg-red-200 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="registro-card"> 
                    <fieldset className="m-0 p-0 border-none"> 
                    <legend className="text-lg font-bold mb-4">Bem vindo ao Feedback</legend> 

                        <div> 
                            <label className="mb-2" htmlFor="idNome"> Digite seu nome: </label>
                            <input className="p-3 my-4 border rounded-md w-full" type="text"  value={nome} onChange={(e) => setNome(e.target.value)} /> 
                            
                        </div>

                        <div className="mb-4"> 
                        <div> 
                            <label className="mb-2" htmlFor="idDescricao"> O que você achou do projeto? </label>
                            <input className="p-3 my-4 border rounded-md w-full" type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </div>
                        </div>
                        <div> 
                            <label className="mb-2" htmlFor="idProposta"> Se pudesse mudar algo ou acresentar o que faria? </label>
                            <input className="p-3 my-4 border rounded-md w-full" type="text" value={proposta} onChange={(e) => setProposta(e.target.value)} />
                        </div>

                        <div> 
                            <label className="mb-2" htmlFor="idIndicacao"> Por onde você nos encontrou? </label>
                            <input className="p-3 my-4 border rounded-md w-full" type="text" value={indicacao} onChange={(e) => setIndicacao(e.target.value)} />
                        </div>


                    </fieldset>
                </form>
            </div>
            </section>
        </>
    )
} 