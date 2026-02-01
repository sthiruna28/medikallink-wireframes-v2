/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a90d9',
        success: '#10b981',
        error: '#ef4444',
        background: {
          DEFAULT: '#ffffff',
          secondary: '#f8fafc',
        },
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        'ui': '14px',
        'content': '16px',
        'headline': '24px',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
      },
      spacing: {
        'min': '24px',
      },
      transitionDuration: {
        'fast': '200ms',
      },
    },
  },
  plugins: [],
}
