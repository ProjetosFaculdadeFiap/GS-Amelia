"use client"; 
import { useEffect } from "react";

export default function SobreHapvida() {

    // Utilização de Token para travar rotas
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
        window.location.href = "/usuarios/login";
    }
    }, []);


    return (
        <> 
            <div>
                <h1 className="introducao"> Conheça mais sobre  <a class="text-red-300"> HAPVIDA </a> NOTREDAME INTERMÉDICA</h1>
                <p className="introducao-informacao mb-4"> A Hapvida NotreDame Intermédica é, hoje, a maior operadora de saúde do Brasil, com mais 16,1 milhões de beneficiários de saúde e odontologia. Fruto da fusão entre o Hapvida, que começou suas operações em 1979 com a inauguração do Hospital Antonio Prudente, e a NotreDame Intermédica, fundada em 
                1968 e pioneira em Medicina Preventiva no País, oferece saúde integral e odontologia para Clientes empresariais e individuais em todas as regiões: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. </p> 

                <p className="introducao-informacao mb-10"> Conta com rede assistencial própria composta por 85 hospitais, 77 prontos atendimentos e 331 clínicas médicas. Também dispõe aos seus 
                beneficiários 271 centros de diagnóstico por imagem e coleta laboratorial, dos quais cerca de 100 operações fazem parte do Laboratório NotreLabs, uma rede nacional com capacidade de processar 4,5 milhões de análises clínicas e 500 mil exames de imagens por mês. </p> 
            </div>
            div> 
                <h2 className="text-2xl px-10"> Conheça nossos valores e objetivos: </h2>
                    <div className="card-filho">