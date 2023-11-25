/* 
"use client"; 
import { useState } from "react";

export default function Prontuario() {

  // Utilização de Token para travar rotas
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
        window.location.href = "/usuarios/login";
    }
    }, []);

    // JAVASCRIPT - PRONTUÁRIO 
    const [form, setForm] = useState({
        nome:"", 
        dataNascimento:"", 
        cpf:"", 
        etnia:"", 
        genero:"", 
        email:"", 
        convenio:"",
        telefone:"",
        endereco:"",
        cep:"", 
    }); 
    

    const generoOptions = [
        { label: "Masculino", value: "Masculino" },
        { label: "Feminino", value: "Feminino" },
        { label: "Outro", value: "Outro" },
    ];

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resposta = await fetch("http://localhost:8080/mm/prontuario", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (resposta.ok) {
            console.log("Prontuário realizado com sucesso :D");
        } else {
            console.error('Seu prontuário teve alguma falha, vamos verificar e tente novamente outra hora:', resposta.status, resposta.statusText);
        }
    }

    return (
        <>
            <div>
                <h1 className="introducao"> Olá seja-bem vindo a parte de prontuário! </h1>
                <p className="introducao-informacao"> Aqui é possivel acessar os canais de <strong> Agendanto Exame </strong> e <strong> Agendamento Consulta </strong>. Mas antes fique a vontade para responder esse formulário médico! </p>
                <p className="introducao-informacao mb-10"> É de extrema importância que você faça ele, para que todas as suas informações fiquem  armazenadas em nosso banco de dados. </p>
            </div>

            <div className="flex justify-around">
                <h2 className="agendamento"> Deseja fazer um agendamento de exames? </h2>
                <h2 className="agendamento"> Deseja fazer um agendamento de consulta? </h2>
            </div>
            <div className="flex justify-around">
                <a href='/formularios/agenda/exame'>
                    <button className='btn-agenda'> Agende seu exame já!</button>
                </a>
                <a href='/formularios/agenda/consulta'>
                    <button className='btn-agenda'> Agende sua consulta já!</button>
                </a>
            </div>

            <div className="cardzao">
                <div className="conteudo-pai">Prontuário Médico:</div>
                <div className="conteudo-filho mb-10">Seja bem-vindo(a)! Para uma melhor experiência vamos precisar de algumas informações!</div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="prontuario" htmlFor="nome">Nome Completo:</label>
                        <input className="w-[500px] bg-neutral-300 rounded-[5px] mb-4" type="text" name="nome" value={form.nome} onChange={handleChange} required />
                    </div>

                    <div>
                        <label className="prontuario" htmlFor="dataNascimento">Data Nascimento:</label>
                        <input className="mb-4" type="date" name="dataNascimento" value={form.dataNascimento} onChange={handleChange} required />
                    </div>

                    <div className="prontuario-separacao">
                        <label className="prontuario" htmlFor="cpf" >Digite seu CPF:</label>
                        <input className="prontuario-estilo" type="text" name="cpf" value={form.cpf} onChange={handleChange} required />

                        <label className="prontuario"> Digite sua Etina:</label>
                        <input className="prontuario-estilo" type="text" name="etnia" value={form.etnia} onChange={handleChange} required />
                    </div>

                    <div>
                        <label className="prontuario" htmlFor="genero" > Qual seu gênero? </label>
                        {generoOptions.map((option) => (
                            <div key={option.value}>
                                <input className="m-2" type="radio" name="genero" value={option.value} onChange={handleChange} required />
                                <span>{option.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="prontuario-separacao" htmlFor="email">
                        <label className="prontuario">Digite seu E-mail:</label>
                        <input className="prontuario-estilo" type="text" name="email" value={form.email} onChange={handleChange} required />

                        <label className="prontuario" htmlFor="telefone"> Digite seu Telefone:</label>
                            <input className="prontuario-estilo" type="number" name="telefone" value={form.telefone} onChange={handleChange} required /> 
                        </div>

                        <div> 
                            <label className="prontuario" htmlFor="convenio">Digite seu convênio: </label>
                            <input className="prontuario-estilo" type="text" name="convenio" value={form.convenio} onChange={handleChange} required /> 
                        </div>

                        <div className="prontuario-separacao"> 
                            <label className="prontuario" htmlFor="endereco">Digite seu endereço: </label>
                            <input className="w-[500px] bg-neutral-300 rounded-[5px] mb-4" type="text" name="endereco" value={form.endereco} onChange={handleChange} required /> 

                            <label className="prontuario" htmlFor="cep">Digite seu CEP: </label>
                            <input className="prontuario-estilo" type="number" name="cep" value={form.cep} onChange={handleChange} required /> 
                        </div>
                    </form>

                    <div> 
                        <button className='cursor-pointer bg-pink-200 text-black py-3 px-6 rounded-md mt-6 mb-2 hover:bg-pink-400 transition duration-500 ease-out' type="submit"> Termino Prontuário </button>
                    </div>
                </div>
        </>
    )
} */ 