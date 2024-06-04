import React from 'react'


export default function Brasileirao() {

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  fetch(`https://api.football-data.org/v4/competitions/PL`)
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    console.log(data); // Use the fetched data
  })
  .catch(error => {
    console.error(error); // Handle any errors
  });



  return (
    <main>
      <h1>brasileirao</h1>


    </main>
  )
}
