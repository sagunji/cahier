import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-stone-200">
      <nav className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-serif font-semibold text-stone-900 hover:text-stone-600 transition-colors"
          >
            Cahier
          </Link>
          <div className="flex items-center gap-8 text-sm">
            <Link 
              href="/" 
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Accueil
            </Link>
            <Link 
              href="/blog" 
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Articles
            </Link>
            <Link 
              href="/about" 
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              À propos
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

