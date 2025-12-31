interface TagPillProps {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}

export function TagPill({ tag, active = false, onClick }: TagPillProps) {
  const baseClasses = "inline-block px-3 py-1 text-sm font-handwritten font-medium rounded-full transition-all border-2";
  const colorClasses = active
    ? "bg-purple-600 text-white border-purple-700 shadow-md"
    : "bg-purple-50 text-purple-700 border-purple-300 hover:bg-purple-100";
  const interactiveClasses = onClick ? "cursor-pointer hover:scale-105 hover:-rotate-2" : "";

  return (
    <span
      className={`${baseClasses} ${colorClasses} ${interactiveClasses}`}
      onClick={onClick}
    >
      #{tag}
    </span>
  );
}

