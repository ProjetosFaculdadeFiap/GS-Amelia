"use client";
import React, { useState } from 'react';

export default function Consulta() {

  // Utilização de Token para travar rotas
  // useEffect(() => {
    // const token = sessionStorage.getItem("token");
    // if (!token) {
      // window.location.href = "/usuarios/login";
   // }
  // }, []);


    const [dia, setDia] = useState('');
    const [horario, setHorario] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [local, setLocal] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resposta = await fetch("http://localhost:8080/mm/consultas", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dia, horario, especialidade, local),
        });
        if (resposta.ok) {
            console.log("Agendamento realizado com sucesso :D");
        } else {
            console.error('Seu agendamento teve alguma falha, vamos verificar e tente novamente outra hora:', resposta.status, resposta.statusText);
        }
    }

    

    return (
        <>
            <div> 
                <h1 className="introducao"> Olá seja-bem vindo a parte de agendamento de consultas! </h1>
                <p className="introducao-informacao mb-10"> Aqui é possível você marcar uma consulta  com um especialista ou um clínico geral. Se possui convênio adicione também para outros atendimentos. </p>
            
                <h2 className="convenio"> Por sinal, você possui plano do convênio? </h2>
                <p className="introducao-informacao"> Se não, venha para a Hapvida e faça um plano conosco e receba vários benéficios! </p>
                    <div className="px-20"> 
                        <a href='#'> 
                            <button className='plano-botao'>Faça seu plano</button>
                        </a>
                    </div>
            </div>

            <div className="cardzao">
                    <h1 className="conteudo-pai"> Agende sua consulta: </h1>
                    <p className="conteudo-filho"> Seja bem-vindo(a)! Venha marcar uma consulta conosco! </p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="formulario">Em qual dia você gostaria de marcar sua consulta?</label>
                            <input className="" type="date" required value={dia} onChange={(e) => setDia(e.target.value)} />
                        </div>

                        <div>
                            <label className="formulario">Em qual horário você gostaria de marcar?</label>
                            <input className="m-4" type="checkbox"  value={horario} onChange={(e) => setHorario(e.target.value)} />
                            <span>MANHÃ</span>
                            <input className="m-4" type="checkbox"  value={horario} onChange={(e) => setHorario(e.target.value)} />
                            <span>TARDE</span>
                            <input className="m-4 mb-4" type="checkbox"  value={horario} onChange={(e) => setHorario(e.target.value)} />
                            <span>NOITE</span>
                        </div>

                        <div>
                            <label className="formulario">Em qual especialista irá passar?</label>
                            <input className="formulario-resposta" type="text" required value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} />
                        </div>

                        <div>
                            <label className="formulario">Em qual local você gostaria de passar?</label>
                            <input className="formulario-resposta" type="text" required value={local} onChange={(e) => setLocal(e.target.value)} />                        </div>

                        <div>
                            <button className='cursor-pointer bg-pink-200 text-black py-3 px-6 rounded-md mt-6 mb-2 hover:bg-pink-400 transition duration-500 ease-out' type="submit"> Marque sua consulta </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

    
