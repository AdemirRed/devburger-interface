import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(resolve(__dirname, './src/config/server.key')), // Caminho para a chave
      cert: fs.readFileSync(resolve(__dirname, './src/config/server.cert')), // Caminho para o certificado
    },
    host: '0.0.0.0', // Permite que o servidor seja acessado externamente
    port: 3002,  // Altere para a porta desejada
  },
});
