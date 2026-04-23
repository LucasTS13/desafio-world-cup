import { useState } from 'react'
import Header from "./components/Header";
import {shuffleTeams, generateGroups, generateMatches} from "./utils/tournament";

function App() {
const [groups, setGroups] = useState([]);

const generateCup = async () => {
    const res = await fetch(
      "https://development-internship-api.geopostenergy.com/WorldCup/GetAllTeams",
      {
        headers: { "git-user": "LucasTS13" }
      }
    );
    const data = await res.json();
    
    const shuffled = shuffleTeams(data);
    const groupsGenerated = generateGroups(shuffled);

    const fullGroups = groupsGenerated.map(group => {
      const matches = generateMatches(group);
      return { teams: group, matches};
    });

  }
  return (
    <div className='p-4'>
      <Header onGenerate={generateCup}/>
    </div>
  )
}

export default App
