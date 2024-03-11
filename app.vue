<template>
    <div>
        <div v-tooltip="'You have new messages.'">
            {{ $t('hello') }} --- this comes from i18n! locale: {{ locale }}
        </div>
        
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
    const { locale } = useNuxtApp().$i18n
</script>
