//componente que mostra as pasrtidas da fase de grupos
export default function MatchList({ matches }) {
  return (
    <div className="mt-2 divide-y divide-slate-200/70 rounded-xl bg-slate-50/90 p-3 ring-1 ring-slate-900/5">
      {matches.map((m, i) => (
        <div
          key={i}
          className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 py-2 text-xs text-slate-700 sm:text-sm"
        >
          {m.teamA} {m.goalsA} x {m.goalsB} {m.teamB}
        </div>
      ))}
    </div>
  );
}
