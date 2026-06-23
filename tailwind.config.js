import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Apple "gallery white" palette — see design.md.
        // Existing semantic token names are kept so every component recolors at once.
        ink: '#1d1d1f',
        graphite: '#707070',
        azure: '#0071e3',
        'cobalt-link': '#0066cc',
        fog: '#f5f5f7',
        snow: '#ffffff',

        // Primary = the single azure permission-to-act color
        primary: '#0071e3',
        'on-primary': '#ffffff',
        'primary-container': '#0066cc',
        'on-primary-container': '#ffffff',
        'primary-fixed': '#e8e8ed',
        'primary-fixed-dim': '#0071e3',
        'inverse-primary': '#0071e3',
        'surface-tint': '#0071e3',

        // Secondary / tertiary collapse to neutral ink (no decorative color)
        secondary: '#1d1d1f',
        'on-secondary': '#ffffff',
        'secondary-container': '#f5f5f7',
        'on-secondary-container': '#1d1d1f',
        'secondary-fixed': '#e8e8ed',
        'secondary-fixed-dim': '#d2d2d7',
        'on-secondary-fixed': '#1d1d1f',
        'on-secondary-fixed-variant': '#474747',

        tertiary: '#1d1d1f',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#f5f5f7',
        'on-tertiary-container': '#1d1d1f',
        'tertiary-fixed': '#f5f5f7',
        'tertiary-fixed-dim': '#e8e8ed',
        'on-tertiary-fixed': '#1d1d1f',
        'on-tertiary-fixed-variant': '#474747',

        // Surfaces — canvas fog, cards snow, hairline silver-mist borders
        background: '#f5f5f7',
        'on-background': '#1d1d1f',
        surface: '#ffffff',
        'on-surface': '#1d1d1f',
        'on-surface-variant': '#707070',
        'surface-variant': '#e8e8ed',
        'surface-bright': '#ffffff',
        'surface-dim': '#e8e8ed',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#ffffff',
        'surface-container': '#f5f5f7',
        'surface-container-high': '#ececef',
        'surface-container-highest': '#f5f5f7',

        outline: '#86868b',
        'outline-variant': '#e8e8ed',

        'inverse-surface': '#1d1d1f',
        'inverse-on-surface': '#f5f5f7',

        error: '#b3261e',
        'on-error': '#ffffff',
        'error-container': '#f9dedc',
        'on-error-container': '#410e0b',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '12px',
        xl: '28px',
        '2xl': '28px',
        '3xl': '32px',
        full: '9999px',
      },
      spacing: {
        sm: '12px',
        xl: '48px',
        xs: '4px',
        'margin-desktop': '64px',
        md: '20px',
        gutter: '24px',
        lg: '32px',
        base: '8px',
        'margin-mobile': '16px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        'label-sm': ['Inter', 'system-ui', 'sans-serif'],
        'display-lg-mobile': ['Inter', 'system-ui', 'sans-serif'],
        'display-lg': ['Inter', 'system-ui', 'sans-serif'],
        'headline-lg': ['Inter', 'system-ui', 'sans-serif'],
        'body-md': ['Inter', 'system-ui', 'sans-serif'],
        'headline-md': ['Inter', 'system-ui', 'sans-serif'],
        'body-lg': ['Inter', 'system-ui', 'sans-serif'],
        'label-lg': ['Inter', 'system-ui', 'sans-serif'],
        'headline-xl': ['Inter', 'system-ui', 'sans-serif'],
        'body-sm': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Apple SF-style scale: heavy display weights with progressive negative tracking
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0', fontWeight: '600' }],
        'display-lg-mobile': ['40px', { lineHeight: '1.07', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['64px', { lineHeight: '1.05', letterSpacing: '-0.022em', fontWeight: '700' }],
        'headline-lg': ['28px', { lineHeight: '1.14', letterSpacing: '-0.015em', fontWeight: '600' }],
        'body-md': ['17px', { lineHeight: '1.47', letterSpacing: '-0.006em', fontWeight: '400' }],
        'headline-md': ['21px', { lineHeight: '1.24', letterSpacing: '-0.012em', fontWeight: '600' }],
        'body-lg': ['19px', { lineHeight: '1.45', letterSpacing: '-0.01em', fontWeight: '400' }],
        'label-lg': ['15px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-xl': ['40px', { lineHeight: '1.1', letterSpacing: '-0.018em', fontWeight: '700' }],
        'body-sm': ['14px', { lineHeight: '1.43', letterSpacing: '-0.003em', fontWeight: '400' }],
      },
    },
  },
  plugins: [forms, containerQueries],
}
