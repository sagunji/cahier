import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Quelques mots sur moi et ce blog",
  openGraph: {
    title: "À propos | Cahier",
    description: "Quelques mots sur moi et ce blog",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8">
        À propos
      </h1>

      <div className="space-y-6 text-stone-600 leading-relaxed">
        <p>
          Bienvenue dans mon coin d&apos;Internet. Un espace personnel où je
          partage mes pensées et découvertes.
        </p>
        <p>Un journal simple et authentique.</p>
      </div>

      <div className="mt-12">
        <a
          href="/blog"
          className="text-stone-900 hover:text-stone-600 font-medium transition-colors inline-flex items-center gap-2 group"
        >
          <span>Lire les articles</span>
          <span className="transform group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
