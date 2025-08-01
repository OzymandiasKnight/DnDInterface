<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
    editable: boolean,
    value: string[],
}>(), {
    editable: true,
    value: () => [],
});

const labels = ref<string[]>(props.value);

function addItem(name:string) {
    labels.value.push(name);
}

function removeItem(name:string) {
    const index = labels.value.indexOf(name);
    if (index > -1) {
        labels.value.splice(index, 1);
    }
}

const display = ref(true);

</script>

<template>
    <div class="grid">
        <div v-if="props.editable">
            <TextInput placeholder="Add item" @enter="addItem" :post="true"></TextInput>
        </div>
        <div class="panel" :class="{ 'static-info': !props.editable}">
            <div class="element" v-for="(label, idx) in labels" :key="idx">
                <label>{{label}}</label>
                <div class="delete" v-show="props.editable">
                    <Button msg="X" :onclick="() => removeItem(label)"></Button>
                </div>
            </div>

        </div>
    </div>
</template>