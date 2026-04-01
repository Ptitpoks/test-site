const services = [
  {
    icon: "🎨",
    title: "Design & UI/UX",
    description:
      "Nous créons des interfaces élégantes et intuitives qui reflètent votre identité et engagent vos utilisateurs dès la première seconde.",
    tags: ["Figma", "Design System", "Prototypage"],
  },
  {
    icon: "⚡",
    title: "Développement Web",
    description:
      "Sites vitrines, e-commerce, applications — nous développons des solutions sur mesure avec les technologies les plus performantes du marché.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: "📱",
    title: "Applications Mobiles",
    description:
      "Des applications iOS et Android fluides et natives, pensées pour l'expérience utilisateur et la rétention long terme.",
    tags: ["React Native", "Expo", "iOS / Android"],
  },
  {
    icon: "🔍",
    title: "SEO & Performance",
    description:
      "Optimisation technique, contenu et netlinking pour faire grimper votre visibilité organique et attirer un trafic qualifié.",
    tags: ["Core Web Vitals", "Schema.org", "Audit SEO"],
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description:
      "Boutiques en ligne robustes et conversionnelles, intégrées à vos outils métier — paiement, stock, livraison, CRM.",
    tags: ["Shopify", "WooCommerce", "Stripe"],
  },
  {
    icon: "🔒",
    title: "Maintenance & Sécurité",
    description:
      "Contrats de maintenance proactifs, mises à jour de sécurité et monitoring 24/7 pour que votre site reste en pleine forme.",
    tags: ["Monitoring", "Backups", "RGPD"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            Ce que nous faisons
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            Nos services
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            Une offre complète pour accompagner votre transformation digitale,
            de la conception à la croissance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-500/20 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-500 transition-colors duration-300">
                <span className="group-hover:grayscale-0">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
