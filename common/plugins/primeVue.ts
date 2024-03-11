import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

export default defineNuxtPlugin({
    name: 'primevue',
    parallel: true,
    setup(nuxtApp) {
        nuxtApp.vueApp.use(PrimeVue, {
            ripple: false,
        })
    
        nuxtApp.vueApp.use(ToastService)
        nuxtApp.vueApp.use(ConfirmationService)
    },
})

