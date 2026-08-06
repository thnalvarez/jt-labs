import type { IconProps } from "./Icon.types";
import { iconStyles } from "./Icon.styles";
const paths: Record<IconProps["name"], React.ReactNode> = {
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  message: <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />,
  whatsapp: <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L4 20l1.1-3.7A8.5 8.5 0 1 1 20.5 11.6ZM8.5 7.9c-.2-.4-.5-.4-.8-.4h-.6c-.2 0-.6.1-.8.5s-1 1-1 1.1.1 2.2 1.8 4.3c1.4 1.7 3.3 2.9 4.6 3.4.4.2.8.1 1.1 0 .4-.2 1-.9 1.2-1.7.1-.4.1-.7 0-.8s-.3-.2-.6-.4l-1.5-.7c-.3-.1-.5-.1-.7.1l-.5.7c-.2.2-.4.2-.7.1a6 6 0 0 1-1.8-1.1 6.8 6.8 0 0 1-1.3-1.6c-.1-.3 0-.5.1-.7l.4-.5c.1-.2.1-.4 0-.6l-.7-1.7Z" />,
  mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  tiktok: <path d="M14 4v10.2a3.8 3.8 0 1 1-3-3.7M14 4c.7 2.5 2.3 4 5 4.4" />,
  code: <path d="m8 9-3 3 3 3m8-6 3 3-3 3M13 6l-2 12" />,
  layers: <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Zm-8 9 8 4.5 8-4.5M4 16l8 4.5 8-4.5" />,
  rocket: <path d="M14 5c2-2 5-2 5-2s0 3-2 5l-5 5-3-3 5-5ZM9 10l-4 1 3 2m5 0 1 4 2-3M7 17l-2 2" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  store: <path d="M4 10h16v10H4zM3 6h18l-1 4H4L3 6Zm5 8h4v6H8z" />,
  heart: (
    <path d="M20.8 8.6c0 5-8.8 10.4-8.8 10.4S3.2 13.6 3.2 8.6A4.3 4.3 0 0 1 11 6l1 1 1-1a4.3 4.3 0 0 1 7.8 2.6Z" />
  ),
  dumbbell: <path d="M5 9v6m3-8v10m8-10v10m3-8v6M8 12h8" />,
  building: <path d="M5 21V4h10v17M15 9h4v12M8 8h3m-3 4h3m-3 4h3" />,
  briefcase: <path d="M4 8h16v11H4zM9 8V5h6v3m-11 4h16" />,
  shopping: (
    <path d="M4 5h2l2 11h9l2-8H7m2 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  ),
  spark: <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />,
};
export function Icon({ name, size = 24, className = "", title }: IconProps) {
  return (
    <svg
      className={`${iconStyles} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {paths[name]}
    </svg>
  );
}
