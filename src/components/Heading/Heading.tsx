import React from "react";
import styles from "./Heading.module.scss";

export type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingColor =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "default";

export interface HeadingProps {
  /**
   * The heading variant which determines size and styling
   */
  variant: HeadingVariant;

  /**
   * The text content of the heading
   */
  text: string;

  /**
   * Optional color for the heading
   */
  color?: HeadingColor;

  /**
   * Optional className to add to the heading
   */
  className?: string;

  /**
   * Any additional props to pass to the heading element
   */
  [x: string]: any;
}

export const Heading: React.FC<HeadingProps> = ({
  variant = "h1",
  text,
  color = "default",
  className = "",
  ...props
}) => {
  // Use createElement instead of JSX to avoid TypeScript errors
  const headingClasses = [
    styles.heading,
    styles[variant],
    color !== "default" ? styles[color] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return React.createElement(
    variant,
    {
      className: headingClasses,
      ...props,
    },
    text
  );
};

export default Heading;
