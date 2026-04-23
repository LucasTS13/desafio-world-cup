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