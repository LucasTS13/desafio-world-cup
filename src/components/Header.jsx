export default function Header({ onGenerate }) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-slate-200/90 pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Simulador Copa do Mundo
      </h1>
      <button
        onClick={onGenerate}
        className="shrink-0 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] sm:px-6 sm:py-3 sm:text-base"
      >
        Gerar Copa
      </button>
    </div>
  );
}
