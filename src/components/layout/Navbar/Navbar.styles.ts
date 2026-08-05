export const navbarStyles = {
  root: "sticky top-0 z-40 border-b border-white/10 bg-[#081525] shadow-[0_2px_14px_rgba(0,0,0,.16)] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[250ms] ease-out",
  scrolled:
    "border-white/15 bg-[#081525]/95 shadow-[0_8px_24px_rgba(0,0,0,.24)] backdrop-blur-[14px]",
  inner: "relative flex min-h-[72px] items-center justify-between gap-4",
  links: "hidden items-center gap-8 xl:gap-10 lg:flex",
  mobile:
    "absolute inset-x-0 top-full animate-[navbar-panel-in_250ms_ease-out] rounded-b-2xl border-x border-b border-white/15 bg-[#081525]/98 p-5 shadow-[0_18px_36px_rgba(0,0,0,.28)] backdrop-blur-[14px] lg:hidden",
};
