import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'node',
    deps: {
      interopDefault: true
    },
    // Ajouter la configuration de timeout global
    timeout: 30000, // 10 secondes en millisecondes
  },
});
