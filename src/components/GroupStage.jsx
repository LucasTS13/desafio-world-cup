import GroupTable from "./GroupTable";
import MatchList from "./MatchList";

//engloba os componentes da fase de grupos separando por grupos
export default function GroupStage({ groups }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
      {groups.map((group, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md shadow-slate-900/5 ring-1 ring-slate-900/5 sm:p-6"
        >
          <h2 className="mb-4 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            Grupo {String.fromCharCode(65 + i)}
          </h2>
          <GroupTable table={group.table} />
          <MatchList matches={group.matches} />
        </div>
      ))}
    </div>
  );
}
