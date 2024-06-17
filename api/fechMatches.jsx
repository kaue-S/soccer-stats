import React from 'react'

export default async function fechMatches(leagueId) {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    
    try {
        const response = await fetch(`https://apiv3.apifootball.com/?action=get_events&from=2024-04-13&to=2024-12-08&league_id=${leagueId}&APIkey=${apiKey}`)

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
