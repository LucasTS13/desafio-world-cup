//recebe o arry de todos os times da competição e embaralha
export function shuffleTeams(teams) {
    return [...teams].sort(() => Math.random())
}

//gera os grupos da competicao
export function generateGroups(teams) {
    const groups = []
    for (let i = 0; i < 8; i++) {
        groups.push(teams.slice(i * 4, i * 4 + 4)) //i=0, vai fazer os slice começando em 0 e terminando em 4, porem nao inclui o indice 4
    }
    return groups
}

//gera as partidas entre cada grupo
export function generateMatches(group) {
    const matches = []
    for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
        matches.push({ teamA: group[i].nome, teamB: group[j].nome })
        }
    }
    return matches
}

//adiciona o campo de gols as partidas
export function simulateMatch(match) {
    const goalsA = Math.floor(Math.random() * 6)
    const goalsB = Math.floor(Math.random() * 6)

  return { ...match, goalsA, goalsB }
}

//calculo da tabela final
export function calculateStandings(teams, matches) {
    //estrutura da tabela
  const table = teams.map(t => ({
    id: t.token,
    name: t.nome,
    points: 0,
    goalDiff: 0
  }))

  //calculo de saldo e pontos com base nos gols de cada partida
  matches.forEach(m => {
    const a = table.find(t => t.name === m.teamA)
    const b = table.find(t => t.name === m.teamB)

    a.goalDiff += m.goalsA - m.goalsB
    b.goalDiff += m.goalsB - m.goalsA

    if (m.goalsA > m.goalsB) a.points += 3
    else if (m.goalsB > m.goalsA) b.points += 3
    else {
      a.points += 1
      b.points += 1
    }
  })

  //ordenando a tabela seguindo os criterios estabelecidos
  return table.sort((a, b) =>
    b.points - a.points || b.goalDiff - a.goalDiff || Math.random() - 0.5
  )
}

//esquema de pontuacao entre cada partida do mata mata
function playKnockoutMatch(teamA, teamB) {
  let goalsA = Math.floor(Math.random() * 6)
  let goalsB = Math.floor(Math.random() * 6)

  let penaltiesA = 0
  let penaltiesB = 0

  if (goalsA === goalsB) {
    penaltiesA = Math.floor(Math.random() * 5) + 1
    penaltiesB = Math.floor(Math.random() * 5) + 1

    while (penaltiesA === penaltiesB) {
      penaltiesA = Math.floor(Math.random() * 5) + 1
      penaltiesB = Math.floor(Math.random() * 5) + 1
    }
  }
  const winner = goalsA > goalsB || penaltiesA > penaltiesB ? teamA : teamB

  return { teamA, teamB, goalsA, goalsB, penaltiesA, penaltiesB, winner }
}

export function generateKnockoutStage(groups) {
  const qualifiedAux = groups.flatMap(g => [g.table[0], g.table[1]]) //pega os 2 primeiros das tabelas
  const qualified = qualifiedAux.map(q => ({ //separei o apenas o nome e id para passar na rota dps
    id: q.id,
    name: q.name,
  }))
  let current = qualified
  const rounds = []
  const names = ["Oitavas", "Quartas", "Semi", "Final"]

  for (let r = 0; r < 4; r++) {
    const matches = []
    const next = []

    for (let i = 0; i < current.length; i += 2) { //faz as partidas acontecerem e sala os vencedores
      const match = playKnockoutMatch(current[i], current[i + 1])
      matches.push(match)
      next.push(match.winner)
    }

    rounds.push({ name: names[r], matches }) //guarda os dados da rodada
    current = next //atualiza quem sobrou para rodar a proxima rodada
  }

  const finalMatch = rounds[3].matches[0]

  return {
    rounds,
    champion: finalMatch.winner,
    finalMatch,
  }
}