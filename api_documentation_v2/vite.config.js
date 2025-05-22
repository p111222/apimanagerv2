import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig({
  build:{
    minify:'terser',
    terserOptions:{
      compress:{
        drop_console:true,
      }
    },
  },
  plugins: [
    react(),
    // basicSsl()
  ],
  optimizeDeps: {
    include: ['@mui/material/Tooltip', '@emotion/styled'],
  },
})