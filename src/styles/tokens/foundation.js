/**
 * Foundation Design Tokens
 * Represent the most basic design decisions and variables
 */
export const foundation = {
    colors: {
        blue: {
            300: "#007aff",
            500: "#3366ff",
        },
        green: {
            500: "#34c759",
        },
        orange: {
            500: "#ff9500",
        },
        red: {
            500: "#ff3b30",
        },
        gray: {
            700: "#555555",
            900: "#333333",
        },
    },
    typography: {
        fontFamily: {
            base: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        },
        fontSize: {
            xs: "0.875rem",
            sm: "1rem",
            md: "1.25rem",
            lg: "1.5rem",
            xl: "1.75rem",
            "2xl": "2rem",
            "3xl": "2.5rem",
        },
        fontWeight: {
            regular: 400,
            medium: 500,
            bold: 700,
        },
        lineHeight: {
            tight: 1.2,
            base: 1.5,
        },
    },
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
    },
    borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
    },
    transition: {
        fast: "all 0.2s ease-in-out",
    },
};
