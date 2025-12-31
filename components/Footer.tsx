export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 mt-auto">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-stone-500 text-sm">
          © {currentYear} Cahier
        </p>
      </div>
    </footer>
  );
}

