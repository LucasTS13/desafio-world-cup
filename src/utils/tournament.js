//recebe o arry de todos os times da competição e embaralha
export function shuffleTeams(teams) {
    return [...teams].sort(() => Math.random());
}

//gera os grupos da competicao
export function generateGroups(teams) {
    const groups = [];
    for (let i = 0; i < 8; i++) {
        groups.push(teams.slice(i * 4, i * 4 + 4)); //i=0, vai fazer os slice começando em 0 e terminando em 4, porem nao inclui o indice 4
    }
    return groups;
}

//gera as partidas entre cada grupo
export function generateMatches(group) {
    const matches = [];
    for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
        matches.push({ teamA: group[i].nome, teamB: group[j].nome });
        }
    }
    return matches;
}

//adiciona o campo de gols as partidas
export function simulateMatch(match) {
    const goalsA = Math.floor(Math.random() * 6);
    const goalsB = Math.floor(Math.random() * 6);

  return { ...match, goalsA, goalsB };
}

//calculo da tabela final
export function calculateStandings(teams, matches) {
    //estrutura da tabela
  const table = teams.map(t => ({
    name: t.nome,
    points: 0,
    goalDiff: 0
  }));

  //calculo de saldo e pontos com base nos gols de cada partida
  matches.forEach(m => {
    const a = table.find(t => t.name === m.teamA);
    const b = table.find(t => t.name === m.teamB);

    a.goalDiff += m.goalsA - m.goalsB;
    b.goalDiff += m.goalsB - m.goalsA;

    if (m.goalsA > m.goalsB) a.points += 3;
    else if (m.goalsB > m.goalsA) b.points += 3;
    else {
      a.points += 1;
      b.points += 1;
    }
  });

  //ordenando a tabela seguindo os criterios estabelecidos
  return table.sort((a, b) =>
    b.points - a.points || b.goalDiff - a.goalDiff || Math.random() - 0.5
  );
}