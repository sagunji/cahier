import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#fdfbf7]/90 border-b-2 border-purple-200 shadow-sm">
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-3xl font-handwritten font-bold text-purple-700 hover:text-purple-900 transition-all transform hover:scale-105"
          >
            ✍️ Cahier
          </Link>
          <div className="flex items-center gap-6 font-handwritten text-lg">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-purple-700 transition-all relative group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-purple-700 transition-all relative group"
            >
              Articles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-purple-700 transition-all relative group"
            >
              À propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

