import { useState, useEffect } from "react";

// Avatar with graceful fallback: renders the photo when it loads, and a
// clean initials badge (e.g. "TA") when there is no photo or the image
// fails — the design never shows a broken-image icon.
export default function TestimonialAvatar({ name, src, className = "w-12 h-12" }) {
  const [failed, setFailed] = useState(false);

  // New photo URL (or a different person) → retry the image
  useEffect(() => setFailed(false), [src]);

  const initials = (name || "?")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (!src || failed) {
    return (
      <div
        className={`${className} shrink-0 rounded-full bg-gradient-to-br from-[#204276] to-[#16325c] text-white flex items-center justify-center font-bold select-none`}
        aria-hidden="true"
      >
        {initials || <span className="material-symbols-outlined text-base">person</span>}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name || "Reviewer"}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} shrink-0 rounded-full object-cover border-2 border-[#204276]/20`}
    />
  );
}
