interface TagPillProps {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}

export function TagPill({ tag, active = false, onClick }: TagPillProps) {
  const baseClasses = "inline-block px-3 py-1 text-xs font-medium rounded-full transition-colors";
  const colorClasses = active
    ? "bg-stone-900 text-white"
    : "bg-stone-100 text-stone-700 hover:bg-stone-200";
  const interactiveClasses = onClick ? "cursor-pointer" : "";

  return (
    <span
      className={`${baseClasses} ${colorClasses} ${interactiveClasses}`}
      onClick={onClick}
    >
      {tag}
    </span>
  );
}

