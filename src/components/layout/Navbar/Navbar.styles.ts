export const navbarStyles = {
  root: "sticky top-0 z-40 border-b border-transparent bg-transparent backdrop-blur-none transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[250ms] ease-out",
  scrolled:
    "border-[#071326]/[.08] bg-white/78 shadow-[0_10px_30px_rgba(7,19,38,.1)] backdrop-blur-[14px]",
  inner: "relative flex min-h-[72px] items-center justify-between gap-4",
  links: "hidden items-center gap-8 xl:gap-10 lg:flex",
  mobile:
    "absolute inset-x-0 top-full animate-[navbar-panel-in_250ms_ease-out] rounded-b-2xl border-x border-b border-[#071326]/[.08] bg-white/92 p-5 shadow-[0_18px_36px_rgba(7,19,38,.14)] backdrop-blur-[14px] lg:hidden",
};
