/*
 * Marquee — infinite horizontal scrolling text ticker.
 *
 * Renders two copies of the children side-by-side, scrolling
 * from right to left continuously. Uses CSS animation for
 * buttery-smooth performance (GPU-accelerated translate3d).
 *
 * Props:
 *   items     — array of strings to display
 *   speed     — animation duration in seconds (default: 35)
 *   separator — visual separator between items (default: "·")
 *   className — optional wrapper class
 */

interface MarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
  className?: string;
}

export default function Marquee({
  items,
  speed = 35,
  separator = "·",
  className = "",
}: MarqueeProps) {
  const content = items.map((item, i) => (
    <span key={i} className="inline-flex items-center gap-6 md:gap-10 whitespace-nowrap">
      <span className="font-display text-lg md:text-2xl lg:text-3xl tracking-tight opacity-70 hover:opacity-100 transition-opacity duration-300">
        {item}
      </span>
      <span className="text-primary/50 text-xl md:text-2xl select-none">{separator}</span>
    </span>
  ));

  return (
    <div
      className={`overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex items-center gap-6 md:gap-10 animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* First copy */}
        <div className="flex items-center gap-6 md:gap-10 shrink-0">{content}</div>
        {/* Second copy for seamless loop */}
        <div className="flex items-center gap-6 md:gap-10 shrink-0">{content}</div>
      </div>
    </div>
  );
}
