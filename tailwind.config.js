/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'bungee': ['Bungee Spice', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

# esta es una sugerencia de nueva función 
# para margenes colores ....#

  /** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'bungee': ['Bungee Spice', 'sans-serif'],
      },
      colors: {
        primary: '#3498db', // Ejemplo de un color personalizado llamado "primary"
        secondary: '#2ecc71', // Ejemplo de otro color llamado "secondary"
      },
      spacing: {
        '2': '8px', // Ejemplo de un tamaño de espacio personalizado
        '4': '16px', // Otro ejemplo de tamaño de espacio personalizado
      },
      padding: {
        'half': '50%', // Ejemplo de un valor de relleno personalizado del 50%
        'full': '100%', // Otro ejemplo de un valor de relleno del 100%
      },
      margin: {
        'auto': 'auto', // Ejemplo de margen automático
        'custom': '24px', // Ejemplo de margen personalizado
      },
    },
  },
  plugins: [],
}

# espero os sirva #
    
