//mostra o campeao
export default function ChampionBanner({ champion }) {
  return (
    <div className="mt-8 rounded-2xl border border-amber-300/60 bg-gradient-to-br from-amber-50 via-amber-100/90 to-amber-200/50 px-5 py-5 text-center text-lg font-bold text-amber-950 shadow-lg shadow-amber-900/10 ring-1 ring-amber-400/20 sm:mt-10 sm:px-8 sm:py-6 sm:text-2xl">
      Campeão: {champion}
    </div>
  );
}
