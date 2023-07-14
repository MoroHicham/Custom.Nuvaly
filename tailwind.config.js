/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        'arial': ['Arial'],
  
      },
      screens: {
        // 'mobile':'750',
        // => @media (min-width: 750px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1360px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      extend: {
        backgroundImage: {
          'header-image': "url('https://cdn.shopify.com/s/files/1/0791/4215/8631/files/access.jpg?v=1689285131')"
        } 
      },
    },
    plugins: [
    
    ],
}
  