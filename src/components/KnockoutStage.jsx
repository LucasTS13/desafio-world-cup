export default function KnockoutStage({ data }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Mata-mata</h2>
      {data.rounds.map((round, i) => (
        <div key={i} className="mb-2">
          <h3 className="font-semibold">{round.name}</h3>
          {round.matches.map((m, j) => (
            <div key={j}>
              {m.teamA.name} {m.goalsA} x {m.goalsB} {m.teamB.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}