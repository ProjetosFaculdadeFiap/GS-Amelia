
"use client"; 
import Image from "next/image";
import { useEffect } from "react";
export default function Jornal() {

  // Utilização de Token para travar rotas
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
        window.location.href = "/usuarios/login";
    }
    }, []);

   

      
} 

