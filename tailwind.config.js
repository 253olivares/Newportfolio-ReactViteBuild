/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Akshar:['Akshar', 'sans-serif']
      },
      colors: {
        "PrimaryWhite" : "var(--rPrimaryWhite)",
        "SidebarGray" : "var(--rSidebarGray)",
        "SiteYellow" : "var(--rYellow)"

      },
      screens: {
        'sMobile': '640px',
        // => @media (min-width: 640px) { ... }

        'mMobile': '768px',
        // => @media (min-width: 768px) { ... }

        'sLaptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'mLaptop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'desktop': '1536px',
        // => @media (min-width: 1536px) { ... }

        'largeDesktop': '1830px'
        // => @media (min-width: 1830px) { ... }
      },
    },
  },
  plugins: [],
}