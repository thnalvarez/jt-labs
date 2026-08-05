import { buttonSizes, buttonVariants } from "./Button.styles";
import type { ActionButtonProps, ButtonProps, LinkButtonProps } from "./Button.types";
export function Button(props: ActionButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    className = "",
  } = props;
  const styles = `inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-colors disabled:pointer-events-none disabled:opacity-50 ${buttonVariants[variant]} ${variant === "link" ? "" : buttonSizes[size]} ${fullWidth ? "w-full" : ""} ${className}`;
  const label = (
    <>
      {loading && (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
      {children}
    </>
  );
  if ("href" in props) {
    const {
      children: _,
      variant: __,
      size: ___,
      fullWidth: ____,
      loading: _____,
      className: ______,
      target,
      rel,
      ...linkProps
    } = props as LinkButtonProps;
    return (
      <a
        className={styles}
        target={target}
        rel={target === "_blank" && !rel ? "noopener noreferrer" : rel}
        {...linkProps}
      >
        {label}
      </a>
    );
  }
  const {
    children: _,
    variant: __,
    size: ___,
    fullWidth: ____,
    loading: _____,
    className: ______,
    ...buttonProps
  } = props as ButtonProps;
  return (
    <button className={styles} disabled={buttonProps.disabled || loading} {...buttonProps}>
      {label}
    </button>
  );
}
