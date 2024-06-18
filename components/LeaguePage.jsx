import React from 'react'
import Image from 'next/image';
import { fetchLeagueData } from '@/api/fetchLeagueData'
import fechMatches from '@/api/fechMatches';
import { ajustarData, ajustarHorario } from '@/lib/utils';


export default async function LeaguePage({leagueId, title}) {

    //fetch das classificações das ligas
    const leagueData = await fetchLeagueData(leagueId)
    console.log(leagueData);

    const matchesData = await fechMatches(leagueId)
    console.log(matchesData);

    //função para calcular o aproveitamento de cada clube
    function aproveitamento(pontosConquistados, totalJogos){
        const pontosVitoria = 3
        const pontosPossiveis = totalJogos * pontosVitoria;
        return((pontosConquistados / pontosPossiveis) * 100).toFixed(0)

    }

    //função para colorir posições classificatórias para outros campeonatos
    function corPorPosicao(posicao){
        if(posicao <= 4 ){ 
           return "bg-green-500 px-3";
        } else if(posicao > 4 && posicao <=6 ) {
            return "bg-blue-400 px-3";
        } else if(posicao > 6 && posicao <= 12) {
            return "bg-blue-300 px-3";
        } else if(posicao > 12 && posicao < 17) {
            return "bg-gray-300 px-3";
        } else if(posicao > 16) {
            return "bg-red-400 px-3";
        }
    }

  return (
    <main className='px-3'>
        <h1 className='text-center text-5xl'>{title}</h1>
        <div className='flex lg:justify-center justify-start overflow-x-auto'>
            <table className="border">
                <thead className="bg-gray-400 px-3">
                    <tr>
                        <th colSpan={2} className="pl-3 lg:pr-24 lg:text-xl ">Classificação</th>
                        <th className="px-5" title="Pontos conquistados">P</th>
                        <th className="px-5" title="Partidas jogadas">J</th>
                        <th className="px-5" title="Vitórias">V</th>
                        <th className="px-5" title="Empates">E</th>
                        <th className="px-5" title="Derrotas">D</th>
                        <th className="px-4" title="Gols marcados">GP</th>
                        <th className="px-4" title="Gols sofridos">GC</th>
                        <th className="px-4" title="Saldo de gols">SG</th>
                        <th className="px-5" title="Aproveitamento">%</th>
                    </tr>
                </thead>
                <tbody className=" text-center"  >
                    {leagueData.map((item) =>(
                        <tr key={item.team_id} className='border'>
                            
                            <td className={corPorPosicao(item.overall_league_position)} >{item.overall_league_position}</td>

                            <td className="p-3 flex gap-3 whitespace-nowrap">
                                <Image
                                    src={item.team_badge}
                                    alt={`Escudo do ${item.team_name}`}
                                    width={25}
                                    height={25}
                                />
                                {item.team_name}
                            </td>

                            <td className="border px-3 bg-gray-200 font-bold">{item.overall_league_PTS}</td>
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

        <div className=" ">
            {matchesData.map((item) => (
                <div className="border flex justify-around p-5" key={item.match_id}>
                    <div>
                        <h3> {ajustarData(item.match_date)}</h3>
                        <h4>{ajustarHorario(item.match_time)}</h4>

                    </div>
                    <div >
                        <Image src={item.team_home_badge} width={25} height={25} alt={`logotipo do clube ${item.team_name}`} className="m-auto"/>
                        <p>{item.match_hometeam_name}</p> 
                    </div>
                    <div >
                        <Image src={item.team_away_badge} width={25} height={25} alt={`logotipo do clube ${item.team_name}`} className="m-auto"/>
                        <p>{item.match_awayteam_name}</p> 
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

