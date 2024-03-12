export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        'nuxt-primevue',
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

    primevue: {
        options: {
            ripple: false,
        },

        components: {
            prefix: 'Prime',
            include: ['Menu', 'Card', 'Chip', 'InlineSvg', 'Steps', 'Dialog', 'Avatar', 'Column', 'Button', 'Message', 'Divider', 'TabView', 'Checkbox', 'Textarea', 'Calendar', 'Dropdown', 'TabPanel', 'Password', 'Skeleton', 'InputText', 'DataTable', 'InputSwitch', 'MultiSelect', 'ProgressBar', 'InputNumber', 'ConfirmPopup', 'OverlayPanel', 'Rating']
        },

        composables: {
            include: ['useConfirm']
        },

        directives: {
            exclude: ['Tooltip']
        },    
    },
})
