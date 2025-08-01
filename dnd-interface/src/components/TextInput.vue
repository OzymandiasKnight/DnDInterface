<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{ 
    placeholder: string,
    value: string,
    post: boolean
}>(), {
    placeholder: '',
    value: '',
    post: false,
});

const rawInput = ref(props.value)
const inputValue = ref(props.value || '')
const fieldInp = ref<HTMLInputElement | null>(null)

function onKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        onEnter();
    }
}

function onEnter() {
        if (props.post) {
            emit('enter', inputValue.value)
            inputValue.value = ''
        }
        fieldInp.value?.focus();
}

function onInput(event: Event) {
  const raw = (event.target as HTMLInputElement).value;
  inputValue.value = raw.replace(/[^a-zA-Z ]/g, '').slice(0, 20);
  console.log(inputValue.value);
}

const emit = defineEmits<{
    (e: 'enter', value: string): void
}>()

</script>

<template>
    <div class="textinput">
        <input type="text" ref="Inp" 
        :placeholder="props.placeholder" v-model="inputValue" 
        @keydown="onKey" @change="onEnter" @input="onInput"></input>
    </div>
</template>