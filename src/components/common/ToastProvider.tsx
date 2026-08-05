"use client";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
type ToastContextValue = { showToast: (message: string) => void };
const ToastContext = createContext<ToastContextValue | null>(null);
export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string>();
  const showToast = useCallback((next: string) => {
    setMessage(next);
    window.setTimeout(() => setMessage(undefined), 4200);
  }, []);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed inset-x-4 bottom-5 z-50 mx-auto max-w-md"
      >
        {message && (
          <div
            role="status"
            className="rounded-xl bg-[#071326] px-5 py-4 text-sm font-semibold text-white shadow-2xl"
          >
            {message}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast debe utilizarse dentro de ToastProvider");
  return context;
}
