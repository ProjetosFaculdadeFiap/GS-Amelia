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

        </>
    )
} 