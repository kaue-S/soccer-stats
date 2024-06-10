import React from 'react'

export async function fetchLeagueData(leagueId) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=${apiKey}`)
    if(!response.ok){
      throw new Error("erro ao buscar dados")
    }
    const data = await response.json()
    return data || [];
  } catch (error) {
      console.error(`Erro durante a obtenção dos dados: ${error.message}`);
      return [];
  }
}
