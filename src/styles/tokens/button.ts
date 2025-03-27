/**
 * Button Component Design Tokens
 * Apply semantic tokens to the Button component
 */

import { semantic } from "./semantic";

export interface ButtonTokens {
  colors: {
    primary: {
      bg: string;
      hover: string;
      active: string;
    };
    secondary: {
      bg: string;
      color: string;
      border: string;
      hover: string;
      active: string;
    };
    success: {
      bg: string;
      hover: string;
      active: string;
    };
    warning: {
      bg: string;
      hover: string;
      active: string;
    };
    error: {
      bg: string;
      hover: string;
      active: string;
    };
    ghost: {
      bg: string;
      color: string;
      hover: string;
      active: string;
    };
  };
  typography: {
    fontFamily: string;
    fontWeight: number;
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
  };
  spacing: {
    padding: {
      small: string;
      medium: string;
      large: string;
    };
  };
  borderRadius: string;
  disabled: {
    opacity: number;
  };
  transition: string;
}

export const button: ButtonTokens = {
  colors: {
    primary: {
      bg: semantic.colors.primary,
      hover: semantic.colors.primary,
      active: semantic.colors.primary,
    },
    secondary: {
      bg: "transparent",
      color: semantic.colors.primary,
      border: semantic.colors.primary,
      hover: semantic.colors.primary,
      active: semantic.colors.primary,
    },
    success: {
      bg: semantic.colors.success,
      hover: semantic.colors.success,
      active: semantic.colors.success,
    },
    warning: {
      bg: semantic.colors.warning,
      hover: semantic.colors.warning,
      active: semantic.colors.warning,
    },
    error: {
      bg: semantic.colors.error,
      hover: semantic.colors.error,
      active: semantic.colors.error,
    },
    ghost: {
      bg: "transparent",
      color: semantic.colors.textPrimary,
      hover: semantic.colors.textPrimary,
      active: semantic.colors.textPrimary,
    },
  },
  typography: {
    fontFamily: semantic.typography.fontFamily.base,
    fontWeight: semantic.typography.fontWeight.medium,
    fontSize: {
      small: semantic.typography.fontSize.heading6,
      medium: semantic.typography.fontSize.heading6,
      large: semantic.typography.fontSize.heading5,
    },
  },
  spacing: {
    padding: {
      small: semantic.spacing.button.sm,
      medium: semantic.spacing.button.md,
      large: semantic.spacing.button.lg,
    },
  },
  borderRadius: semantic.borderRadius.button,
  disabled: {
    opacity: 0.6,
  },
  transition: semantic.transition.interactive,
};
