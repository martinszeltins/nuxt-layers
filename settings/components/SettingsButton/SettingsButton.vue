<template>
    <div @click="doSettingsButton">Settings Button</div>
    <div>{{ props.name }}</div>
</template>

<script setup lang="ts">
    const { doSettingsButton } = useSettingsButton()

    const props = defineProps<{
        name: string
    }>()
</script>
