"use client"; 
import { useState } from "react";

export default function Historico() {

  // Utilização de Token para travar rotas
  // useEffect(() => {
    // const token = sessionStorage.getItem("token");
    // if (!token) {
      // window.location.href = "/usuarios/login";
   // }
  // }, []);

    // JAVASCRIPT - HISTÓRICO
    const [form, setForm] = useState({
        febre:"", 
        alcool:"", 
        alergia:"", 
        antibiotico:"", 
        medicamento:"", 
        doencaPresente:"", 
        doencaCoracao:"", 
        fumante:"",
        diabete:"", 
        cicatrizacao:"", 
        gravida:"", 
        implante:"", 
    }); 

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resposta = await fetch("http://localhost:8080/", {
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
                <h1 className="introducao"> Olá seja-bem vindo a parte de histórico médico! </h1>
                <p className="introducao-informacao"> Aqui é possivel acessar os canais de <strong> Agendanto Exame </strong> e <strong> Agendamento Consulta </strong>. Mas antes fique a vontade para responder esse formulário médico! </p>
                <p className="introducao-informacao mb-10"> É de extrema importância que você faça ele, para que todas as suas informações médicas fiquem armazenadas em nosso banco de dados. </p> 
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
                    <div className="conteudo-pai">Histórico Médico:</div>
                    <div className="conteudo-filho mb-10">Adicione aqui todas suas informações médicas!</div>

                    <form onSubmit={handleSubmit}> 
                        <div> 
                            <label className="prontuario" htmlFor="febre"> Teve febre frequentemente? </label>
                                <input className="m-4" type="checkbox"  value={form.febre} onChange={handleChange} />
                                <span>NÃO</span>

                                <input className="m-4" type="checkbox" />
                                <span>SIM</span>
                        </div>

                        <div> 
                        <label className="prontuario" htmlFor="alcool"> Ingestão de álcool? </label>
                            <input className="m-4" type="checkbox"  value={form.alcool} onChange={handleChange} />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" />
                            <span>SIM</span>
                    </div>

                    <div> 
                        <label className="prontuario" htmlFor="alergias"> Possui alergias? </label>
                            <input className="m-4" type="checkbox"  value={form.alergias} onChange={handleChange} />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox"   value={form.alergias} onChange={handleChange}/>
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text"  /> 
                    </div>

                    <div> 
                        <label className="prontuario" htmlFor="antibiotico"> Faz uso de antibioticos? </label>
                            <input className="m-4" type="checkbox"  value={form.antibiotico} onChange={handleChange} />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox"  value={form.antibiotico} onChange={handleChange}/>
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text"  /> 
                    </div>

                    <div> 
                        <label className="prontuario" htmlFor="medicamentos"> Faz uso de medicamentos? </label>
                            <input className="m-4" type="checkbox"  value={form.medicamentos} onChange={handleChange} />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox"  value={form.medicamentos} onChange={handleChange}/>
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text"  /> 
                    </div>

                    <div> 
                        <label className="prontuario" htmlFor="doencaPresente"> Possui alguma doenças presente? </label>
                            <input className="m-4" type="checkbox"  value={form.doencaPresente} onChange={handleChange}  />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" value={form.doencaPresente} onChange={handleChange}/>
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text"  /> 
                    </div>
                    
                    <div> 
                        <label className="prontuario" htmlFor="doencaCoracao"> Possui alguma doenças no coração? </label>
                            <input className="m-4" type="checkbox"  value={form.doencaCoracao} onChange={handleChange} />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox"  />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="text"  /> 
                    </div>

                    <div> 
                        <label className="prontuario" htmlFor="fumante"> Fumante? </label>
                            <input className="m-4" type="checkbox" value={form.fumante} onChange={handleChange}/>
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox"  value={form.fumante} onChange={handleChange}/>
                            <span>SIM</span>
                    </div>

                    <div> 
                        <label className="prontuario" htmlFor="diabete"> Possui diabete? </label>
                            <input className="m-4" type="checkbox" value={form.diabete} onChange={handleChange} />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" value={form.diabete} onChange={handleChange}  />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, qual tipo? </label>
                            <input className="prontuario-resposta" type="text" /> 
                    </div>

                    <div> 
                        <label className="prontuario" htmlFor="cicatrizacao"> Possui dificuldade de cicatrização </label>
                            <input className="m-4" type="checkbox" value={form.cicatrizacao} onChange={handleChange}  />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" value={form.cicatrizacao} onChange={handleChange}  />
                            <span>SIM</span>
                    </div>
                    
                    <div> 
                        <label className="prontuario" htmlFor="gravida"> Está grávida? </label>
                            <input className="m-4" type="checkbox" value={form.gravida} onChange={handleChange}  />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" value={form.gravida} onChange={handleChange}  />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quantos meses? </label>
                            <input className="prontuario-resposta" type="number"  /> 
                        </div>

                        <div> 
                        <label className="prontuario" htmlFor="implante"> Possui implantes? </label>
                            <input className="m-4" type="checkbox" value={form.implante} onChange={handleChange}  />
                            <span>NÃO</span>

                            <input className="m-4" type="checkbox" value={form.implante} onChange={handleChange}  />
                            <span>SIM</span>
                            <label className="prontuario">Se sim, quais? </label>
                            <input className="prontuario-resposta" type="number" required /> 
                        </div>

                        <div> 
                            <input className='cursor-pointer bg-pink-200 text-black py-3 px-6 rounded-md mt-6 mb-2 hover:bg-pink-400 transition duration-500 ease-out' type="submit" value="Termino Prontuário"/>
                        </div>
                    </form>
                </div>
        </>
    )
}