import { useState, useEffect, useCallback, useRef } from "react";

/*
 * TypeWriter — premium typing animation with blinking cursor.
 *
 * The full text is always rendered invisibly to reserve layout space,
 * preventing any height/width shifts as characters appear. The visible
 * typed text is overlaid on top.
 *
 * Props:
 *   text         — full string to type
 *   typeSpeed    — ms per character while typing (default: 75)
 *   deleteSpeed  — ms per character while deleting (default: 35)
 *   pauseAfter   — ms to wait after fully typed (default: 3500)
 *   pauseBefore  — ms to wait before re-typing (default: 1500)
 *   className    — applied to the wrapping <span>
 */

interface TypeWriterProps {
  text: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfter?: number;
  pauseBefore?: number;
  className?: string;
}

type Phase = "typing" | "paused" | "deleting" | "waiting";

export default function TypeWriter({
  text,
  typeSpeed = 75,
  deleteSpeed = 35,
  pauseAfter = 3500,
  pauseBefore = 1500,
  className = "",
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const indexRef = useRef(0);

  const tick = useCallback(() => {
    switch (phase) {
      case "typing": {
        if (indexRef.current < text.length) {
          indexRef.current++;
          setDisplayed(text.slice(0, indexRef.current));
        } else {
          setPhase("paused");
        }
        break;
      }
      case "deleting": {
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayed(text.slice(0, indexRef.current));
        } else {
          setPhase("waiting");
        }
        break;
      }
      default:
        break;
    }
  }, [phase, text]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      timer = setTimeout(tick, typeSpeed);
    } else if (phase === "paused") {
      timer = setTimeout(() => setPhase("deleting"), pauseAfter);
    } else if (phase === "deleting") {
      timer = setTimeout(tick, deleteSpeed);
    } else if (phase === "waiting") {
      timer = setTimeout(() => {
        indexRef.current = 0;
        setDisplayed("");
        setPhase("typing");
      }, pauseBefore);
    }

    return () => clearTimeout(timer);
  }, [phase, displayed, tick, typeSpeed, deleteSpeed, pauseAfter, pauseBefore]);

  const isIdle = phase === "paused" || phase === "waiting";

  return (
    <span className={`relative inline ${className}`}>
      {/* Invisible full text — reserves the exact space needed */}
      <span className="invisible" aria-hidden="true">
        {text}
      </span>

      {/* Visible typed text — positioned over the reserved space */}
      <span className="absolute inset-0">
        {displayed}
        <span
          className={`inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle rounded-full transition-opacity duration-300 ${
            isIdle ? "animate-cursor-blink" : "opacity-100"
          }`}
          aria-hidden="true"
        />
      </span>
    </span>
  );
}
