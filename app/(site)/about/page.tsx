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
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <article className="notebook-line">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-purple-200 rounded-full ink-stain"></div>
          <div
            className="absolute top-10 right-1/4 w-16 h-16 bg-pink-200 rounded-full ink-stain"
            style={{ animationDelay: "1.5s" }}
          ></div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">👋</div>
            <h1 className="text-5xl md:text-6xl font-handwritten font-bold text-gray-900 mb-6">
              À propos
            </h1>
            <div className="w-32 h-1 bg-purple-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/60 backdrop-blur-sm p-10 md:p-12 rounded-2xl border-2 border-purple-200 mb-10">
          <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6 font-handwritten text-center">
            Bonjour! 👋
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center">
            Bienvenue dans mon coin d'Internet. Un espace personnel où je
            partage mes pensées, découvertes et aventures.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            Un journal intime numérique, simple et authentique.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-block px-10 py-4 bg-purple-600 text-white rounded-full font-handwritten text-2xl hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            Lire mes articles ✨
          </a>
        </div>
      </article>
    </div>
  );
}
