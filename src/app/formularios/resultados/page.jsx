/* 
"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Resultados() {

    
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
                <h1 className="introducao"> Resultados dos Exames </h1>
                <p className="introducao-informacao mb-6"> Aqui é possivel acessar os resultados obtidos em seus exames!</p>

            <div className="flex justify-center"> 
                <Image src="/img/resultado-exame.png"
                alt="resultado exame"
                width={500}
                height={500} /> 
            </div> 
            </div>
        </>
    )
} */ 