export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Simulador Copa do Mundo</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Gerar Copa
      </button>
    </div>
  );
}