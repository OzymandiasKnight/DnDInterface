<script setup lang="ts">

const props = defineProps<{ 
    msg: string,
    onclick?: () => void
}>()

</script>

<template>
    <div class="button">
        <button @click="props.onclick" >{{ msg }}</button>
    </div>
</template>