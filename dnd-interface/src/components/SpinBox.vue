<script setup lang="ts">


const props = withDefaults(defineProps<{
    mini: string
    maxi: string
    value?: string
}>(), {
    mini: '0',
    maxi: '1',
    value: '0'
})


</script>

<template>
    <div class="spinbox">
        <slot></slot>
        <input type="number" :min=mini :max=maxi :value="props.value"
        @input="e =>{
            
            const target = e.target as HTMLInputElement | null
            if (target) {
                const val = target.value
                if (!/^\d+$/.test(val)) {
                    target.value = val.replace(/\D/g, '')
                }
                else {
                    target.value = Math.max(Math.min(parseInt(val), parseInt(props.maxi)), parseInt(props.mini)).toString()
                }
            }
        }"
        ></input>
    </div>
</template>