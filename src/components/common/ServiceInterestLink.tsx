"use client";

import { trackEvent } from "@/utils/analytics";
import type { ReactNode } from "react";

export function ServiceInterestLink({
  service,
  children,
  className,
}: {
  service: string;
  children: ReactNode;
  className: string;
}) {
  return (
    <a
      href="#contacto"
      className={className}
      onClick={() => trackEvent("service_interest", { service })}
    >
      {children}
    </a>
  );
}
