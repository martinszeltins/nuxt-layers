import PrimeButton from 'primevue/button'

declare module 'vue' {
    interface GlobalComponents {
        PrimeButton: typeof PrimeButton
    }
}

export default defineNuxtPlugin({
    name: 'global-components',
    parallel: false,
    setup(nuxtApp) {
        // nuxtApp.vueApp.component('PrimeButton', PrimeButton)
    },
})
