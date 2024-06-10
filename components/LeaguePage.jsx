import React from 'react'
import Image from 'next/image';
import { fetchLeagueData } from '@/api/fetchLeagueData'


export default async function LeaguePage({leagueId, title}) {
    const leagueData = await fetchLeagueData(leagueId)
    console.log(leagueData);

    //função para calcular o aproveitamento de cada clube
    function aproveitamento(pontosConquistados, totalJogos){
        const pontosVitoria = 3
        const pontosPossiveis = totalJogos * pontosVitoria;
        return((pontosConquistados / pontosPossiveis) * 100).toFixed(0)

    }

  return (
    <main>
        <h1 className='text-center text-5xl'>{title}</h1>
        <div className='flex justify-center'>
            <table className="border">
                <thead className="bg-gray-400 px-3">
                    <tr>
                        <th colSpan={2} className="pl-3 lg:pr-24 lg:text-xl border">Classificação</th>
                        <th>P</th>
                        <th>J</th>
                        <th>V</th>
                        <th>E</th>
                        <th>D</th>
                        <th>GP</th>
                        <th>GC</th>
                        <th>SG</th>
                        <th>%</th>
                    </tr>
                </thead>
                <tbody >
                    {leagueData.map((item) =>(
                        <tr className='border text-center' key={item.team_id}>
                            <td className='pl-2'>{item.overall_league_position}</td>
                            <td className="  py-1  flex gap-3">
                                <Image
                                    src={item.team_badge}
                                    alt={`Escudo do ${item.team_name}`}
                                    width={25}
                                    height={25}
                                />
                                {item.team_name}
                            </td>
                            <td className="border px-3 bg-gray-200">{item.overall_league_PTS}</td>
                            <td className="border px-3">{item.overall_league_payed}</td>
                            <td className="border px-3 bg-gray-200">{item.overall_league_W}</td>
                            <td className="border px-3">{item.overall_league_D}</td>
                            <td className="border px-3 bg-gray-200">{item.overall_league_L}</td>
                            <td className="border px-3">{item.overall_league_GF}</td>
                            <td className="border px-3 bg-gray-200">{item.overall_league_GA}</td>
                            <td className="border px-3">{item.overall_league_GF - item.overall_league_GA}</td>
                            <td className="border px-3 bg-gray-200">{aproveitamento(item.overall_league_PTS, item.overall_league_payed)}</td>
                    </tr>
                        ))}
                </tbody>
            </table>

        </div>
    </main>
  )
}

