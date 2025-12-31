import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="mb-8 text-9xl animate-bounce">🤷</div>
      <h1 className="text-8xl font-handwritten font-bold text-purple-700 mb-6">404</h1>
      <h2 className="text-3xl font-handwritten font-semibold text-gray-900 mb-4">
        Oups! Page introuvable
      </h2>
      <p className="text-xl text-gray-600 mb-10 font-handwritten">
        Cette page semble s&apos;être envolée... 🦋
      </p>
      <Link
        href="/"
        className="inline-block px-10 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all font-handwritten text-2xl shadow-xl hover:-translate-y-1 transform"
      >
        Retour à l&apos;accueil 🏠
      </Link>
    </div>
  );
}

