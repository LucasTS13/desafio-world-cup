//componente para a tabela da fase de grupos
export default function GroupTable({ table }) {
  return (
    <table className="mb-4 w-full table-fixed border-collapse text-sm">
      <thead>
        <tr className="border-b border-slate-200">
          <th className="pb-3 pr-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
            Time
          </th>
          <th className="w-14 pb-3 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
            Pts
          </th>
          <th className="w-14 pb-3 pl-2 text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
            SG
          </th>
        </tr>
      </thead>
      <tbody>
        {table.map((t, i) => (
          <tr
            key={i}
            className={
              i < 2
                ? "border-b border-slate-100 bg-emerald-50/90 border-l-[3px] border-emerald-500" //verde para os classificados
                : "border-b border-slate-100 border-l-[3px] border-transparent hover:bg-slate-50/80"
            }
          >
            <td className="py-2.5 pr-2 text-left font-medium text-slate-900">
              {t.name}
            </td>
            <td className="py-2.5 text-center tabular-nums font-semibold text-slate-800">
              {t.points}
            </td>
            <td className="py-2.5 pl-2 text-center tabular-nums text-slate-600">
              {t.goalDiff}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
