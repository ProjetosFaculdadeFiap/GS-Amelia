export default function Prontuario() {
    return (
        <> 
            <div> 
                <h1 className="introducao"> Olá seja-bem vindo a parte de prontuário! </h1>
                <p className="text-base px-10"> Aqui é possivel acessar os canais de <strong> Agendanto Exame </strong> e <strong> Agendamento Consulta </strong>. Mas antes fique a vontade para responder esse formulário médico! </p>
                <p className="text-base px-10 mb-10"> É de extrema importância que você faça ele, para que todas as suas informações fiquem  armazenadas em nosso banco de dados. </p> 
            </div> 

            <div className="flex justify-around"> 
                <h2 className="text-1xl font-bold"> Deseja fazer um agendamento de exames? </h2>
                <h2 className="text-1xl font-bold"> Deseja fazer um agendamento de consulta? </h2>        
            </div> 
                <div className="flex justify-around"> 
                    <a href='/prontuario/agenda-exame'> 
                        <button className='btn-agenda'> Agende seu exame já!</button>
                    </a>
                    <a href='/prontuario/agenda-consulta'> 
                        <button className='btn-agenda'> Agende sua consulta já!</button>
                    </a>
                </div>

















        </>
    )
}