import type { ImageProps } from "next/image";
export type BrandLogoProps = Pick<
  ImageProps,
  "width" | "height" | "priority" | "sizes" | "className"
>;
