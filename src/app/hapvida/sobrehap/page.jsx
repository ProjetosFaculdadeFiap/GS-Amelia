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