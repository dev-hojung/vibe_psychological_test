"use client";

import { getCharacter } from "@/lib/character-map";

type Props = {
  testSlug: string;
  profileId: string;
  size?: "sm" | "md" | "lg";
};

export default function ResultCharacter({
  testSlug,
  profileId,
  size = "lg",
}: Props) {
  const char = getCharacter(testSlug, profileId);

  const sizeClasses = {
    sm: "w-16 h-16 text-3xl",
    md: "w-24 h-24 text-5xl",
    lg: "w-32 h-32 text-7xl",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-full flex items-center justify-center shadow-lg`}
        style={{
          background: `linear-gradient(135deg, ${char.gradientFrom}, ${char.gradientTo})`,
          animation: "bounce 2s infinite",
        }}
      >
        <span className="drop-shadow-md select-none">{char.emoji}</span>
      </div>
      {char.label && size === "lg" && (
        <span className="text-xs font-medium text-white/80 tracking-wide">
          {char.label}
        </span>
      )}
    </div>
  );
}
