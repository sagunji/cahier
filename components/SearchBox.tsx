'use client';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBox({ value, onChange, placeholder = "Rechercher..." }: SearchBoxProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
        🔍
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent shadow-sm hover:shadow-md transition-all bg-white/80 backdrop-blur-sm font-handwritten text-lg"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-full p-1.5 transition-colors"
          aria-label="Effacer"
        >
          ✕
        </button>
      )}
    </div>
  );
}

