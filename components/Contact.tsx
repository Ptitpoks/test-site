"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            Parlons de votre projet
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            Contactez-nous
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            Un projet en tête ? Une question ? Notre équipe vous répond sous 24h.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="md:col-span-2 space-y-8">
            {[
              {
                icon: "📍",
                title: "Adresse",
                lines: ["12 rue du Faubourg Saint-Antoine", "75012 Paris, France"],
              },
              {
                icon: "✉️",
                title: "Email",
                lines: ["hello@pixelco.fr", "devis@pixelco.fr"],
              },
              {
                icon: "📞",
                title: "Téléphone",
                lines: ["+33 1 23 45 67 89", "Lun–Ven, 9h–18h"],
              },
            ].map((info) => (
              <div key={info.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-lg flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{info.title}</p>
                  {info.lines.map((l) => (
                    <p key={l} className="text-sm text-gray-500">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-500 text-sm">
                  Nous vous répondrons dans les 24 heures. À très bientôt !
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ nom: "", email: "", sujet: "", message: "" }); }}
                  className="mt-6 text-brand-500 text-sm font-medium hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@exemple.fr"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Sujet
                  </label>
                  <select
                    name="sujet"
                    value={form.sujet}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition text-gray-700 bg-white"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option>Création de site web</option>
                    <option>Application mobile</option>
                    <option>SEO & Performance</option>
                    <option>E-commerce</option>
                    <option>Maintenance</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                >
                  Envoyer le message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
