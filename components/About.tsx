const values = [
  { icon: "🎯", title: "Orienté résultats", desc: "Chaque décision de design ou de code est guidée par vos objectifs business." },
  { icon: "🤝", title: "Partenariat durable", desc: "Nous ne livrons pas un site — nous construisons une relation long terme." },
  { icon: "🚀", title: "Agilité & rapidité", desc: "Des sprints courts, des livrables réguliers et une communication transparente." },
];

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="relative order-2 md:order-1">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-500 to-brand-900 aspect-square max-w-md mx-auto flex items-center justify-center">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative text-center text-white p-12">
              <p className="text-7xl font-extrabold mb-2">8</p>
              <p className="text-lg font-semibold opacity-80">ans d&apos;expertise</p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">120+</p>
                  <p className="opacity-70 mt-0.5">Projets livrés</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">25</p>
                  <p className="opacity-70 mt-0.5">Experts dédiés</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">15</p>
                  <p className="opacity-70 mt-0.5">Pays couverts</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-2xl font-bold">98%</p>
                  <p className="opacity-70 mt-0.5">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            Qui sommes-nous
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            L&apos;agence qui pense{" "}
            <span className="text-brand-500">digital</span>{" "}
            différemment
          </h2>
          <p className="mt-6 text-gray-500 leading-relaxed">
            Fondée en 2016 à Paris, Pixel & Co regroupe une équipe de designers,
            développeurs et stratèges passionnés. Nous croyons qu&apos;un bon site web
            n&apos;est pas juste beau — il doit performer, convertir et évoluer avec
            votre entreprise.
          </p>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Notre méthode combine créativité et rigueur technique pour livrer des
            projets dans les délais, sans compromis sur la qualité.
          </p>

          <div className="mt-10 space-y-5">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-lg flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{v.title}</h4>
                  <p className="text-sm text-gray-500 mt-0.5">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
