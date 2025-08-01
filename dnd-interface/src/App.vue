<script setup lang="ts">
import './style.css'
import HomePage from './pages/Home.vue'
import CharacterPage from './pages/Character.vue'
import CharacterCard from './cards/CharacterCard.vue';
import Attack from './cards/Attack.vue'



</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet">
  <div class="centerer">
    <CharacterPage :create="false"></CharacterPage>
  </div>
  <div class="background"></div>
</template>
