import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/main/css/app.css',
                'resources/main/css/index-lab.css',
                'resources/main/css/clouds-lab.css',
                'resources/main/js/app.js',
                'resources/main/js/index-lab.js',
                'resources/main/js/clouds-lab.js',
                'resources/admin/css/app.css',
                'resources/admin/js/app.js',
                'resources/main/js/main.js',
            ],
            refresh: true,
        }),
    ],
});
