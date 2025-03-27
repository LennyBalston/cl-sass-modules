/**
 * Semantic Design Tokens
 * Map foundation tokens to functional design attributes
 */

import { foundation } from "./foundation";

export interface SemanticTokens {
  colors: {
    primary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    textPrimary: string;
    textSecondary: string;
  };
  typography: {
    fontFamily: {
      base: string;
    };
    fontSize: {
      heading1: string;
      heading2: string;
      heading3: string;
      heading4: string;
      heading5: string;
      heading6: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      bold: number;
    };
    lineHeight: {
      heading: number;
      body: number;
    };
  };
  spacing: {
    button: {
      sm: string;
      md: string;
      lg: string;
    };
  };
  borderRadius: {
    button: string;
  };
  transition: {
    interactive: string;
  };
}

export const semantic: SemanticTokens = {
  colors: {
    primary: foundation.colors.blue[500],
    success: foundation.colors.green[500],
    warning: foundation.colors.orange[500],
    error: foundation.colors.red[500],
    info: foundation.colors.blue[300],
    textPrimary: foundation.colors.gray[900],
    textSecondary: foundation.colors.gray[700],
  },
  typography: {
    fontFamily: {
      base: foundation.typography.fontFamily.base,
    },
    fontSize: {
      heading1: foundation.typography.fontSize["3xl"],
      heading2: foundation.typography.fontSize["2xl"],
      heading3: foundation.typography.fontSize.xl,
      heading4: foundation.typography.fontSize.lg,
      heading5: foundation.typography.fontSize.md,
      heading6: foundation.typography.fontSize.sm,
    },
    fontWeight: {
      regular: foundation.typography.fontWeight.regular,
      medium: foundation.typography.fontWeight.medium,
      bold: foundation.typography.fontWeight.bold,
    },
    lineHeight: {
      heading: foundation.typography.lineHeight.tight,
      body: foundation.typography.lineHeight.base,
    },
  },
  spacing: {
    button: {
      sm: `${foundation.spacing.xs} ${foundation.spacing.sm}`,
      md: `${foundation.spacing.sm} ${foundation.spacing.lg}`,
      lg: `${foundation.spacing.md} ${foundation.spacing.xl}`,
    },
  },
  borderRadius: {
    button: foundation.borderRadius.sm,
  },
  transition: {
    interactive: foundation.transition.fast,
  },
};
