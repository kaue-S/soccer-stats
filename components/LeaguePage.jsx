import React from 'react'
import Image from 'next/image';
import { fetchLeagueData } from '@/api/fetchLeagueData'


export default async function LeaguePage({leagueId, title}) {
    const leagueData = await fetchLeagueData(leagueId)
    console.log(leagueData);

  return (
    <main>
        <h1>{title}</h1>
        <div>
            {leagueData.map((item) =>{
                <div key={item.team_id}>
                    <h2>{item.team_name}</h2>
                    <Image
               src={item.team_badge}
               alt={`baneira do(a) ${item.country_name}`}
               width={50}
               height={50}
              />
                </div>
            })}
        </div>
        <table className="border">
            <thead className="bg-gray-400 px-3">
                <tr>
                    <th className="pl-3 lg:pr-24 lg:text-xl border">Classificação</th>
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
                <tr >
                    {leagueData.map((item) =>{
                        <td className="border pl-3">{item.team_name}</td>

                    })}
                    <td className="border px-3 bg-gray-200">lista</td>
                    <td className="border px-3">lista</td>
                    <td className="border px-3 bg-gray-200">lista</td>
                    <td className="border px-3">lista</td>
                    <td className="border px-3 bg-gray-200">lista</td>
                    <td className="border px-3">lista</td>
                    <td className="border px-3 bg-gray-200">lista</td>
                    <td className="border px-3">lista</td>
                    <td className="border px-3 bg-gray-200">lista</td>
                </tr>
            </tbody>
        </table>
    </main>
  )
}

