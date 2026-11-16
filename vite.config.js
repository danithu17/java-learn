import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // ඔයාට කැමති port එකක් මෙතනට දෙන්න පුළුවන් (උදා: 3000, 8080, 5000)
    open: false
  }
});
