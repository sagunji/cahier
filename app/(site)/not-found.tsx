import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-serif font-bold text-stone-900 mb-4">404</h1>
      <p className="text-lg text-stone-600 mb-8">Page introuvable</p>
      <Link
        href="/"
        className="text-stone-900 hover:text-stone-600 font-medium transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
