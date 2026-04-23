export function shuffleTeams(teams) {
  return [...teams].sort(() => Math.random());
}

export function generateGroups(teams) {
  const groups = [];
  for (let i = 0; i < 8; i++) {
    groups.push(teams.slice(i * 4, i * 4 + 4));
  }
  return groups;
}

export function generateMatches(group) {
  const matches = [];
  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      matches.push({ teamA: group[i].nome, teamB: group[j].nome });
    }
  }
  return matches;
}