import { useState } from 'react'
import Header from "./components/Header";
import GroupTable from "./components/GroupTable";
import {shuffleTeams, generateGroups, generateMatches, simulateMatch, calculateStandings} from "./utils/tournament";

function App() {
const [groups, setGroups] = useState([]);

const generateCup = async () => {
    
    //requisicao de times
    const res = await fetch(
      "https://development-internship-api.geopostenergy.com/WorldCup/GetAllTeams",
      {
        headers: { "git-user": "LucasTS13" }
      }
    );
    const data = await res.json();
    
    const shuffled = shuffleTeams(data); //embaralha
    const groupsGenerated = generateGroups(shuffled); //gera grupos

    const fullGroups = groupsGenerated.map(group => {
      const matches = generateMatches(group); //gera partidas
      const played = matches.map(simulateMatch); //simula resultado das partidas
      const table = calculateStandings(group, played); //calcula tabela final
      return { teams: group, matches: played, table};
    });
    
    setGroups(fullGroups);

  }
  return (
    <div className='p-4'>
      <Header onGenerate={generateCup}/>
      {groups.map((group, i) => (
        <div key={i} className="border p-4 rounded">
          <h2 className="font-bold mb-2">Grupo {String.fromCharCode(65 + i)}</h2>
          <GroupTable table={group.table} />
        </div>
      ))}
    </div>
  )
}

export default App
