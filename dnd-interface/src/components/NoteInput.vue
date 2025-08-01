<script setup lang="ts">
import { ref } from 'vue'

const props = withDefaults(defineProps<{ 
    placeholder: string,
    value: string,
}>(), {
    placeholder: '',
    value: ''
});

const inputValue = ref(props.value)

function onEnter(event: KeyboardEvent) {
    if ( inputValue.value.length > 250 ) {
        inputValue.value = inputValue.value.slice(0, 250)
    }
}


</script>

<template>
    <div class="notes">
        <textarea :placeholder="props.placeholder" v-model="inputValue" @keydown="onEnter"></textarea>
    </div>
</template>