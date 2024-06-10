
import LeaguePage from '@/components/LeaguePage';
import Image from 'next/image';
import React from 'react'


export default async function Brasileirao() {

  //  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  //  const resposta = await fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=99&APIkey=${apiKey}`)
  //  const dados = await resposta.json();
  //  console.log(dados);

return (
    <LeaguePage leagueId={99} title={"Brasileirão"}/>
  )
}
