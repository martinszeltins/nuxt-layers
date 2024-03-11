export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
    ],

    typescript: {
        typeCheck: true,
        strict: true
    },

    css: [
        '~/common/assets/css/app.css',
    ],

    tailwindcss: {
        configPath: './config/tailwind.config.cjs',
    },

    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            'tailwindcss': {},
            'autoprefixer': {},
            'postcss-important-startstop': {},
        }
    },

    devtools: { enabled: true },

    i18n: {
        locales: [{
            code: 'en',
            file: 'en.json',
        }],
        lazy: false,
        langDir: 'lang',
        defaultLocale: 'en',
        detectBrowserLanguage: false
    },
})
