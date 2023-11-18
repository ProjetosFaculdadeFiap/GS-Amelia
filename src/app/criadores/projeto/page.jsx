import Image from "next/image";

export default function Projeto() {
    return (
        <> 
            <h1 className="px-10 text-2xl mb-2"> Apresentando Projeto M&M: </h1>
                <p className='px-10 text-base mb-1'> Nosso projeto consiste na criação de um robô, a robô Amélia, que seria uma grande aliada a área de saúde.</p> 
                <p className='px-10 text-base mb-4'> Pensamos em três áreas pilares importantes, que de algum modo hoje em dia não são tão valorizadas. Nossos pilares são ‘Lar de Idosos’ ‘Escolas’ e por fim ‘Hospitais’ </p>

                <Image className="px-10 mb-8" src="/img/amelia.jpg"
                alt="robozinha amelia"
                width={500}
                height={100}  />
            
            <h2 className="px-10 text-2xl mb-2"> 1° Pilar - Lar de Idosos  </h2>
            <p className="px-10 text-base mb-4">Utilizando este pensamento, nossa robô ficaria disponível para lar de idosos ou casas de repouso, aonde ela ajudaria no monitoramento, cuidado e lazer de idosos. Aonde caso haja algum acidente ela será acionada. </p>
                
            <h2 className="px-10 text-2xl mb-2"> 2° Pilar - Escolas  </h2>
                <p className="px-10 text-base mb-2"> Nos dias de hoje, não existem muitas escolas com o conceito de enfermaria. Algo que deveria ser obrigatório, já que acidentes podem ocorrer.. Então a Amélia seria uma salvação. </p>
                <p className="px-10 text-base mb-4"> Ela teria dentro dela um kit de primeiros socorros e estaria preparada caso haja algum incidente mais grave, ela pudesse fazer o básico para ajudar. 
A Amélia, também teria uma opção de profesora. Crianças são muito curiosas então, algo “diferente” seria fantástico a ensinar elas. Ensinar sobre o combate de algumas doenças, na educação sexual.  </p>


            <h2 className="px-10 text-2xl mb-2"> 3° Pilar - Hospitais  </h2>
                <p className="px-10 text-base mb-4"> E por fim, na questão de hospitais o pensamento seria na ajuda em UTI e estudos, aonde ela ficaria ajudando a monitorar os paciêntes,  e estaria sempre ajudando a aprender sobre novas doenças. Aonde ela pudesse até mesmo testar em simulações.  </p>

        </>
    )
}