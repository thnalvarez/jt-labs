import { badgeStyles } from "./Badge.styles";
import type { BadgeProps } from "./Badge.types";
export function Badge({ tone = "blue", className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${badgeStyles[tone]} ${className}`}
      {...props}
    />
  );
}
