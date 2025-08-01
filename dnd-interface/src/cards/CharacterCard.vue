<script setup lang="ts">
import { ref } from 'vue';
import Grid from '../components/Grid.vue';
import NoteInput from '../components/NoteInput.vue';

function setPage(page_idx: number) {
    page.value = page_idx;
}

const page= ref(0);

</script>

<template>
    <Surface>
        <Tabs :slides="3" @pressed="setPage"></Tabs>
        <div class="row">
            <h2>Rexy</h2>
            <div class="column-separator"></div>
            <h2>HP : 20</h2>
        </div>
        <div class="row" style="width: 100%">
            <!--Character-->
            <div class="row static-info" v-show="page === 0">
                <div class="column">
                    <label>Class</label>
                    <label>Race</label>
                </div>
                <div class="column-separator"></div>
                <div class="column">
                    <label>Strong stat</label>
                    <label>Intelligence stat</label>
                    <label>Weight strenght</label>
                </div>
            </div>
            <!--Inventory-->
            <div class="column" v-show="page === 1">
                <div class="row">
                    <div class="static-info centerer">
                        <label>Money : 250</label>
                    </div>
                    <div class="column-separator"></div>
                    <Grid :editable="false" :value="['Main', 'Secondary']"></Grid>
                </div>
                <div class="row-separator"></div>
                <div class="row static-info">
                    <label>Armor Name</label>
                    <div class="column-separator"></div>
                    <label>17</label>
                </div>
                    
            </div>
            <!--Notes-->
            <div class="row" v-show="page === 2" style="width: 100%">
                <NoteInput placeholder="Your notes" value=""></NoteInput>
            </div>
        </div>
    </Surface>
</template>