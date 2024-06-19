import React, { Suspense } from 'react'
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

    // Agrupar partidas por rodada usando reduce
  const matchesByRound = matchesData.reduce((acc, match) => {
    const round = match.match_round; // Assumindo que 'match_round' é a propriedade para o número da rodada
    acc[round] = acc[round] || []; // Cria um array para a rodada se ela não existir
    acc[round].push(match);
    return acc;
  }, {});

  return (
    <main className='px-2'>
        <h1 className='text-center text-5xl lg:text-7xl'>{title}</h1>
        <section className="lg:flex justify-around">
            <div className='overflow-x-auto'>
                <h2 className="lg:text-4xl text-center">Tabela de Classificação</h2><br />
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

                                <td className="p-2 pr-7 lg:p-2 flex gap-1 whitespace-nowrap">
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

            <div className="">
      <h2 className="lg:text-4xl text-center">Partidas</h2>
      <br />
      {Object.entries(matchesByRound).map(([roundNumber, roundMatches]) => (
        <div key={roundNumber} className="mb-8">
          <h3 className="text-center font-bold">Rodada {roundNumber}</h3>
          {roundMatches.map((item) => (
            <div
              className="border flex flex-col items-center justify-around p-5"
              key={item.match_id}
            >
              <div className="text-center">
                <h3>{ajustarData(item.match_date)}</h3>
                <h4>{ajustarHorario(item.match_time)}</h4>
              </div>

              <div className="flex">
                <div className="flex flex-row items-center">
                  <p>{item.match_hometeam_name}</p>
                  <Image
                    src={item.team_home_badge}
                    width={25}
                    height={25}
                    alt={`Logotipo do clube ${item.team_name}`}
                    className="m-auto"
                  />
                  <p className="text-center font-bold text-2xl pl-3">
                    {item.match_hometeam_score}
                  </p>
                </div>

                <div className="px-2">
                  <p>x</p>
                </div>

                <div className="flex items-center">
                  <p className="text-center font-bold text-2xl pr-3">
                    {item.match_awayteam_score}
                  </p>
                  <Image
                    src={item.team_away_badge}
                    width={25}
                    height={25}
                    alt={`Logotipo do clube ${item.team_name}`}
                    className="m-auto"
                  />
                  <p>{item.match_awayteam_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>


        </section>
    </main>
  )
}

