
import ListaLigas from '@/components/ListaLigas';
import Image from 'next/image';
import React from 'react'


export default async function Brasileirao() {

   const apiKey = process.env.NEXT_PUBLIC_API_KEY;

   const resposta = await fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=99&APIkey=${apiKey}`)
   const dados = await resposta.json();
   console.log(dados);

return (
    <main className="px-8 m-auto">
      <h1 className="text-center text-3xl">Brasileirão Série A</h1>

      <div className="flex md:justify-center overflow-x-auto">
        <ListaLigas />
      </div>
      <h1>
      {dados.map((item) => (
        <div key={item.team_id}>
          <h2>{item.team_name}</h2>
          {/* <img src={item.country_logo}/>   */}
          <Image
               src={item.team_badge}
               alt={`baneira do(a) ${item.country_name}`}
               width={50}
               height={50}
              />
          <p>{item.overall_league_position}</p>
          
        </div>
      ))}
      </h1>

      
    </main>
  )
}
