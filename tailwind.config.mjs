/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "on-surface": "#181c20",
        "tertiary": "#040607",
        "on-secondary-fixed-variant": "#5d4200",
        "inverse-on-surface": "#eef1f6",
        "primary-container": "#001f3f",
        "on-primary-container": "#6f88ad",
        "tertiary-fixed-dim": "#c5c7c8",
        "secondary-fixed": "#ffdea6",
        "on-primary-fixed-variant": "#2f486a",
        "on-secondary": "#ffffff",
        "inverse-surface": "#2d3135",
        "surface-container-low": "#f1f4f9",
        "surface-container-highest": "#e0e3e8",
        "on-tertiary-fixed": "#191c1d",
        "surface-container-high": "#e5e8ee",
        "outline-variant": "#c4c6cf",
        "primary-fixed": "#d4e3ff",
        "outline": "#74777f",
        "on-tertiary": "#ffffff",
        "surface-tint": "#476083",
        "on-secondary-fixed": "#271900",
        "error": "#ba1a1a",
        "surface-container": "#ebeef3",
        "secondary-container": "#fdc34d",
        "secondary-fixed-dim": "#f7bd48",
        "secondary": "#7b5800",
        "on-tertiary-container": "#848688",
        "on-tertiary-fixed-variant": "#454748",
        "inverse-primary": "#afc8f0",
        "primary": "#000613",
        "error-container": "#ffdad6",
        "surface-variant": "#e0e3e8",
        "on-error": "#ffffff",
        "on-primary-fixed": "#001c3a",
        "on-primary": "#ffffff",
        "surface-dim": "#d7dadf",
        "on-error-container": "#93000a",
        "background": "#f7f9ff",
        "surface-bright": "#f7f9ff",
        "surface": "#f7f9ff",
        "on-surface-variant": "#43474e",
        "tertiary-container": "#1c1f20",
        "surface-container-lowest": "#ffffff",
        "primary-fixed-dim": "#afc8f0",
        "tertiary-fixed": "#e1e3e4",
        "on-background": "#181c20",
        "on-secondary-container": "#715000",
        "gold": "#B8860B",
        "navy": "#001f3f"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "wave-amplitude": "40px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "section-padding": "80px",
        "container-max": "1200px"
      },
      fontFamily: {
        "display-lg": ["Libre Caslon Text", "serif"],
        "label-caps": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Libre Caslon Text", "serif"],
        "title-sm": ["Hanken Grotesk", "sans-serif"],
        "display-lg-mobile": ["Libre Caslon Text", "serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "title-sm": ["18px", { lineHeight: "1.5", letterSpacing: "0.05em", fontWeight: "600" }],
        "display-lg-mobile": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  },
  plugins: [],
}