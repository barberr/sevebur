// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devServer: {
        host: '0.0.0.0', // слушать все IP-адреса
        port: 3000, // порт, который вы выбрали
    },
    app: {
        head: {
            meta: [
                {
                    name: 'viewport',
                    content:
                        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
                },
            ],
        },
    },
    compatibilityDate: '2025-06-16',
    modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper'],
    devtools: { enabled: false },
    vite: {
        build: {
            minify: true, // для проверки
        },
    },
});
