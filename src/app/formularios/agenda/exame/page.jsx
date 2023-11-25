"use client"; 
import { useEffect, useState } from "react";

export default function Exame() {

  // Utilização de Token para travar rotas
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
        window.location.href = "/usuarios/login";
    }
    }, []);

    
    const [dia, setDia] = useState('');
    const [horario, setHorario] = useState('');
    const [exame, setExame] = useState(''); 
    const [laboratorio, setLaboratorio] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const resposta = await fetch("http://localhost:8080/mm/exames", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dia, horario, exame, laboratorio),
        });
        if (resposta.ok) {
            console.log("Agendamento realizado com sucesso :D");
        } else {
            console.error('Seu agendamento teve alguma falha, vamos verificar e tente novamente outra hora:', resposta.status, resposta.statusText);
        }
    }


