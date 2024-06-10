import React from 'react'

export default function ListaLigas({ligas}) {
  return (
    <main>
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
                    <td className="border pl-3">lista</td>
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

