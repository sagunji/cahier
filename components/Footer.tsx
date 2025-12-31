export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-purple-200 mt-auto bg-[#fdfbf7]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-gray-700 font-handwritten text-lg">
            Fait avec 💜 et beaucoup de ☕
          </p>
          <p className="text-gray-600 text-sm">
            © {currentYear} <span className="font-handwritten font-bold text-purple-700">Cahier</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

