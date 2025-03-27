/**
 * Heading Component Design Tokens
 * Apply semantic tokens to the Heading component
 */

import { semantic } from "./semantic";

export interface HeadingTokens {
  typography: {
    fontFamily: string;
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    fontWeight: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
    };
    lineHeight: {
      large: number;
      small: number;
    };
  };
  colors: {
    default: string;
    primary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  spacing: {
    marginBottom: string;
  };
}

export const heading: HeadingTokens = {
  typography: {
    fontFamily: semantic.typography.fontFamily.base,
    fontSize: {
      h1: semantic.typography.fontSize.heading1,
      h2: semantic.typography.fontSize.heading2,
      h3: semantic.typography.fontSize.heading3,
      h4: semantic.typography.fontSize.heading4,
      h5: semantic.typography.fontSize.heading5,
      h6: semantic.typography.fontSize.heading6,
    },
    fontWeight: {
      h1: semantic.typography.fontWeight.bold,
      h2: semantic.typography.fontWeight.bold,
      h3: semantic.typography.fontWeight.bold,
      h4: semantic.typography.fontWeight.medium,
      h5: semantic.typography.fontWeight.medium,
      h6: semantic.typography.fontWeight.medium,
    },
    lineHeight: {
      large: semantic.typography.lineHeight.heading,
      small: semantic.typography.lineHeight.body,
    },
  },
  colors: {
    default: semantic.colors.textPrimary,
    primary: semantic.colors.primary,
    success: semantic.colors.success,
    warning: semantic.colors.warning,
    error: semantic.colors.error,
    info: semantic.colors.info,
  },
  spacing: {
    marginBottom: "0.5em",
  },
};
