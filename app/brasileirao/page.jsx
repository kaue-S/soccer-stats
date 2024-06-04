
import Image from 'next/image';
import React from 'react'


export default async function Brasileirao() {

  // const apiKey = process.env.NEXT_PUBLIC_API_KEY;

   const resposta = await fetch('https://apiv3.apifootball.com/?action=get_leagues&country_id=27&APIkey=8fb6c79632ee46c334a924cd01221430ce944e9b920eaea51bbbfe887b55bc85')
   const dados = await resposta.json();
   console.log(dados);

return (
    <main>
      <h1>
      {dados.map((item) => (
        <div key={item.country_id}>
          <h2>{item.country_name}</h2>
          {/* <img src={item.country_logo}/>   */}
          <Image
               src={item.country_logo}
               alt={`baneira do(a) ${item.country_name}`}
               width={50}
               height={50}
              />
          <p></p>
        </div>
      ))}
      </h1>
    </main>
  )
}
