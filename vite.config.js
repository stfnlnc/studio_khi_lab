import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/main/css/app.css',
                'resources/main/css/index-lab.css',
                'resources/main/css/footer-lab.css',
                'resources/main/js/app.js',
                'resources/main/js/index-lab.js',
                'resources/main/js/footer-lab.js',
                'resources/admin/css/app.css',
                'resources/admin/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
