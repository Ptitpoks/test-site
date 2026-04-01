export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-100 text-xs font-semibold px-4 py-2 rounded-full border border-brand-500/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Agence disponible · Paris & Remote
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Votre présence{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-400">
            digitale
          </span>
          ,<br />
          sublimée.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Pixel & Co conçoit des sites web et applications qui convertissent.
          Design moderne, performances optimales, résultats mesurables.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors"
          >
            Découvrir nos services
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors border border-white/20"
          >
            Obtenir un devis
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-white/10 pt-10">
          {[
            { value: "120+", label: "Projets livrés" },
            { value: "98%", label: "Clients satisfaits" },
            { value: "8 ans", label: "D'expérience" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Défiler</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
