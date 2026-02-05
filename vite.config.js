import { defineConfig } from 'vite';

export default defineConfig({
    base: '/designo-multi-page-website/',
    build: {
        assetsInlineLimit: (filePath, buffer) => {
            return filePath.endsWith('.svg') ? false : null;
        }
    }
});
