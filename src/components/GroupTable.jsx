export default function GroupTable({ table }) {
  return (
    <table className="w-full text-sm mb-2">
      <thead>
        <tr>
          <th>Time</th>
          <th>Pts</th>
          <th>SG</th>
        </tr>
      </thead>
      <tbody>
        {table.map((t, i) => (
          <tr key={i} className={i < 2 ? "bg-green-100" : ""}>
            <td>{t.name}</td>
            <td>{t.points}</td>
            <td>{t.goalDiff}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}