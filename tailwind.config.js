const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const brandColor = "#4c14bb";

module.exports = {
    mode: "jit",
    darkMode: "class",
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "340px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (min-width: 1024px) { ... }

                xl: "1280px",
                // => @media (min-width: 1280px) { ... }

                "2xl": "1536px",
                // => @media (min-width: 1536px) { ... }
            },
            colors: {
                gray: colors.gray,
                brand: brandColor,
                "gray-light": "#7B7F86",
                "gray-dark": "#7B7F86",
                "accent-1": "#FAFAFA",
                "accent-2": "#EAEAEA",
                "accent-7": "#333",
                success: "#0070f3",
                cyan: "#79eaff",
                brand: {
                    100: "#dbd0f1",
                    200: "#c9b9eb",
                    300: "#b7a1e4",
                    400: "#a68add",
                    500: "#9472d6",
                    600: "#825bcf",
                    700: "#5e2cc2",
                    800: "#6C39D0",
                    900: "#4C14BB",
                },
                dark: {
                    100: "#eeeeee",
                    200: "#e0e0e0",
                    300: "#bbbbbb",
                    400: "#666666",
                    500: "#444444",
                    600: "#2a2a2a",
                    700: "#1f1f1f",
                    800: "#212121",
                    900: "#141414",
                },
                gray: {
                    100: "#eeeeee",
                    200: "#e0e0e0",
                    300: "#bbbbbb",
                    400: "#666666",
                    500: "#444444",
                    600: "#2a2a2a",
                    700: "#1f1f1f",
                    800: "#161616",
                    900: "#121212",
                },
            },
            spacing: {
                28: "7rem",
                100: "30rem",
                104: "34rem",
                108: "38rem",
                112: "42rem",
                116: "46rem",
                120: "50rem",
                124: "54rem",
                128: "58rem",
            },
            letterSpacing: {
                tighter: "-.01em",
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                "sm": "0.9rem",
                "5xl": "2.5rem",
                "6xl": "2.75rem",
                "7xl": "4.5rem",
                "8xl": "6.25rem",
            },
            boxShadow: {
                "light-small": "0px 4px 8px 2px rgba(107, 114, 128, 0.08)",
                small: "0 5px 10px rgba(0, 0, 0, 0.12)",
                medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
                override: "0px 0px 0px rgba(0, 0, 0, 0)",
            },
            fontFamily: {
                sans: [
                    "inter-font",
                    "custom-font",
                    "roobert-font",
                    "BlinkMacSystemFont",
                    "-apple-system",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Fira Sans",
                    "Droid Sans",
                    "Helvetica Neue",
                    "Helvetica",
                    "Arial",
                    "sans-serif",
                ],
                mono: ["Source Code Pro", "Menlo", "monospace"],
            },
            translate: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            },
            stroke: (theme) => ({
                white: theme("colors.white"),
                black: theme("colors.black"),
            }),
            ringColor: {
                DEFAULT: brandColor["500"],
            },
            backdropFilter: {
                'none': 'none',
                'blur': 'blur(40px)',
            },
        },
    },
    variants: {
        animation: ['responsive', 'motion-safe', 'motion-reducer'],
        extend: {
            inset: ["group-hover"],
            stroke: ["dark"],
            height: ["hover"],
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
        require('tailwindcss-filters'),
    ],
};