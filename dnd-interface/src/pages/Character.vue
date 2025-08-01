<script setup lang="ts">

import { ref } from 'vue'

const props = withDefaults(defineProps<{
    create: boolean,
}>(), {
    create: false,
});

type CharacterInfo = {
  username: string
  class: string
  race: string
  weapons: string[]
  health: number
  armor: string
  armorPoints: number
}

const defaultInfos: CharacterInfo = {
  username: '',
  class: '',
  race: '',
  weapons: [],
  health: 0,
  armor: '',
  armorPoints: 0,
}

const infos = ref<CharacterInfo>(defaultInfos);

</script>

<template>
    <div class="centerer">
        <Surface>
            <h1 v-show="props.create">Create Character</h1>
            <h1 v-show="!props.create">Modify Character</h1>
            <Surface>
                <TextInput placeholder="Character name" :value="infos.username"></TextInput>
                <TextInput placeholder="Class" :value="infos.class"></TextInput>
                <TextInput placeholder="Race" :value="infos.race"></TextInput>
                <Grid :editable="true" :value="infos.weapons">
                    <TextInput placeholder="Type and enter to add weapon"></TextInput>
                </Grid>
                <SpinBox mini="1" maxi="20" :value="infos.health"><label>Health points : </label></SpinBox>
                <TextInput placeholder="Armor" :value="infos.armor"></TextInput>
                <SpinBox mini="0" maxi="20" :value="infos.armorPoints"><label>Armor points : </label></SpinBox>
            </Surface>
            <Button msg="Create Character"></Button>
        </Surface>
    </div>
</template>