import GroupTable from "./GroupTable";
import MatchList from "./MatchList";

export default function GroupStage({ groups }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {groups.map((group, i) => (
        <div key={i} className="border p-4 rounded">
          <h2 className="font-bold mb-2">
            Grupo {String.fromCharCode(65 + i)}
          </h2>
          <GroupTable table={group.table} />
          <MatchList matches={group.matches} />
        </div>
      ))}
    </div>
  );
}
