const mix = require('laravel-mix');

mix.ts("resources/js/react/index.tsx", "public/js").react()
    .ts("resources/js/vue/main.ts", "public/admin/js").vue();
