<template>
    <div class="space-y-4 p-4 bg-gray-200 rounded-md text-[20px]">
        <div
            v-tooltip="'I am a users button'"
            @click="doSomething">
    
            User Button
        </div>

        <div>is focused: {{ focused }}</div>

        <SettingsButton name="adf" />
    </div>
</template>

<script setup lang="ts">
    const focused = useWindowFocus()

    const { loadSettings } = useSettings()
    const { doSomething } = useUserButton()

    onMounted(() => {
        loadSettings()
    })
</script>
