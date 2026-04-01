export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
                P&
              </span>
              <span className="font-bold text-white text-lg">Pixel & Co</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Agence web créative basée à Paris. Nous transformons vos idées en
              expériences digitales mémorables depuis 2016.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Design & UI/UX", "Développement Web", "Applications Mobiles", "SEO & Performance", "E-commerce"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Agence</h4>
            <ul className="space-y-2 text-sm">
              {["À propos", "Notre équipe", "Nos projets", "Blog", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#accueil" className="hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2024 Pixel & Co. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
