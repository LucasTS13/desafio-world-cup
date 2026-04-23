import { useState } from "react";
import Header from "./components/Header";
import GroupStage from "./components/GroupStage";
import KnockoutStage from "./components/KnockoutStage";
import ChampionBanner from "./components/ChampionBanner";
import {
  shuffleTeams,
  generateGroups,
  generateMatches,
  simulateMatch,
  calculateStandings,
  generateKnockoutStage,
} from "./utils/tournament";

function App() {
  const [groups, setGroups] = useState([]);
  const [knockout, setKnockout] = useState(null);
  const [champion, setChampion] = useState(null);

  const generateCup = async () => {
    //requisicao de times
    const res = await fetch(
      "https://development-internship-api.geopostenergy.com/WorldCup/GetAllTeams",
      {
        headers: { "git-user": "LucasTS13" },
      },
    );
    const data = await res.json();

    const shuffled = shuffleTeams(data); //embaralha
    const groupsGenerated = generateGroups(shuffled); //gera grupos

    const fullGroups = groupsGenerated.map((group) => {
      const matches = generateMatches(group); //gera partidas
      const played = matches.map(simulateMatch); //simula resultado das partidas
      const table = calculateStandings(group, played); //calcula tabela final
      return { teams: group, matches: played, table };
    });

    const knockoutData = generateKnockoutStage(fullGroups); //simula o matamata
    setGroups(fullGroups);
    setKnockout(knockoutData);
    setChampion(knockoutData.champion.name);

    await fetch(
      "https://development-internship-api.geopostenergy.com/WorldCup/FinalResult",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "git-user": "LucasTS13",
        },
        body: JSON.stringify({
          equipeA: knockoutData.finalMatch.teamA.id,
          equipeB: knockoutData.finalMatch.teamB.id,
          golsEquipeA: knockoutData.finalMatch.goalsA,
          golsEquipeB: knockoutData.finalMatch.goalsB,
          golsPenaltyTimeA: knockoutData.finalMatch.penaltiesA,
          golsPenaltyTimeB: knockoutData.finalMatch.penaltiesB,
        }),
      },
    );
  };
  return (
    <div className="p-4">
      <Header onGenerate={generateCup} />
      <GroupStage groups={groups} />
      {knockout && <KnockoutStage data={knockout} />}
      {champion && <ChampionBanner champion={champion} />}
    </div>
  );
}

export default App;
