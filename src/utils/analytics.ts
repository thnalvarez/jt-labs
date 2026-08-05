export type AnalyticsEvent =
  | "whatsapp_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "service_interest"
  | "project_click";

export function trackEvent(event: AnalyticsEvent, detail?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("jt-labs:analytics", { detail: { event, ...detail } }));
}
