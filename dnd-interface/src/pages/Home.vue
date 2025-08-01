<script setup lang="ts">
</script>

<template>
    <div class="centerer">
        <Surface>
            <h1>No dungeon active</h1>
            <Button msg="Host Dungeon"></Button>
        </Surface>
        <Surface>
            <h1>Create a dungeon</h1>
            <TextInput placeholder="Name..."></TextInput>
            <SpinBox mini="1" maxi="7" :value="1"><label>Players : </label></SpinBox>
            <SpinBox mini="1" maxi="10" :value="1"><label>Max inventory items : </label></SpinBox>
            <SpinBox mini="1" maxi="100" :value="20"><label>Health limit : </label></SpinBox>
            <SpinBox mini="1" maxi="100" :value="17"><label>Armor limit : </label></SpinBox>


            <Button msg="Create Dungeon"></Button>
        </Surface>
        <Surface>
            <h1>Dungeon name</h1>
            <h2>4 / 6 Players</h2>
            <Button msg="Join game"></Button>
        </Surface>
    </div>

</template>