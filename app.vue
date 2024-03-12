<template>
    <div>
        <div v-tooltip="'You have new messages.'">
            {{ $t('hello') }} --- this comes from i18n! locale: {{ locale }}
        </div>

        <div class="mt-4 bg-blue-50 rounded-md shadow-md ring-2 ring-blue-200 w-64 h-24 flex-center">
            flex-center
        </div>

        <CommonButton />
        
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
    const { locale } = useNuxtApp().$i18n
</script>
