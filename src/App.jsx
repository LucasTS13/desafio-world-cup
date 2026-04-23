import { useState } from 'react'
import Header from "./components/Header";
import {shuffleTeams,generateGroups} from "./utils/tournament";

function App() {
const generateCup = async () => {
    const res = await fetch(
      "https://development-internship-api.geopostenergy.com/WorldCup/GetAllTeams",
      {
        headers: { "git-user": "LucasTS13" }
      }
    );

    const data = await res.json();
    console.log(data)
    const shuffled = shuffleTeams(data);
    console.log(shuffled);
    const groupsGenerated = generateGroups(shuffled);
    console.log(groupsGenerated);
  }
  return (
    <div className='p-4'>
      <Header onGenerate={generateCup}/>
    </div>
  )
}

export default App
