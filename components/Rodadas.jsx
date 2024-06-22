"use client"
import React, { useState, useEffect } from 'react';

// Simulação de função assíncrona para buscar dados das partidas
const fetchMatches = async ({leagueId}) => {
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
 
};

export default function Rodadas({fetchMatches}) {
    const matchesData = fetchMatches()

  return (
    <div>
      {matchesData.map((item) => (
        <div key={item.match_id}>
          <p>{item.match_hometeam_name}</p>
        </div>
      ))}
    </div>
  );
}
