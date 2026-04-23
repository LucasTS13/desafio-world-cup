export default function MatchList({ matches }) {
  return (
    <div className="text-xs">
      {matches.map((m, i) => (
        <div key={i}>
          {m.teamA} {m.goalsA} x {m.goalsB} {m.teamB}
        </div>
      ))}
    </div>
  );
}