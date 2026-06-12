// components/ui/star-border.jsx
import { CSSProperties } from "react";

export function StarBorder({
  as: Component = "button",
  className = "",
  color = "#AAFF5E",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}) {
  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-xl py-2 px-4 ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] aspect-square"
        style={{
          background: `radial-gradient(ellipse at center, ${color}, transparent 10%), radial-gradient(ellipse at center, ${color}66, transparent 20%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: `star-rotate ${speed} linear infinite`,
        }}
      />
      <div
        className="absolute inset-0 rounded-xl"
        style={{ border: `${thickness}px solid ${color}22` }}
      />
      <div className="relative z-10 backdrop-blur-md bg-white/10 rounded-xl px-3 py-2">
        {children}
      </div>
    </Component>
  );
}