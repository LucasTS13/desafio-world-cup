//fase de mata mata
export default function KnockoutStage({ data }) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md shadow-slate-900/5 ring-1 ring-slate-900/5 sm:mt-10 sm:p-6">
      <h2 className="mb-5 text-xl font-bold tracking-tight text-slate-900 sm:mb-6 sm:text-2xl">
        Mata-mata
      </h2>
      {data.rounds.map((round, i) => (
        <div key={i} className="mb-6 space-y-2 last:mb-0">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-700 sm:text-sm">
            {round.name}
          </h3>
          {round.matches.map((m, j) => (
            <div
              key={j}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50/95 px-3 py-2.5 text-sm text-slate-800 ring-1 ring-slate-900/5 sm:px-4"
            >
              {m.teamA.name} {m.goalsA} x {m.goalsB} {m.teamB.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
