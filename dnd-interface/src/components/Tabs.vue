<script setup lang="ts">
import { ref, computed } from 'vue';

const props = withDefaults(defineProps<{
    slides: number,
}>(), {
    slides: 0,
});

const currentSlide = ref(0);

const slideArray = computed(() => Array.from({ length: props.slides }, (_, i) => i));

function selectSlide(index: number) {
    currentSlide.value = index;
    emit('pressed', index);
}

const emit = defineEmits<{
    (e: 'pressed', value: number): void
}>()

</script>

<template>
    <div class="slide-selection">
        <div v-for="(x, idx) in slideArray" :key="idx">
            <button class="slide-bullet" :class="{ selected: idx === currentSlide}" @click="selectSlide(idx)"></button>
        </div>
        <slot></slot>

    </div>
</template>