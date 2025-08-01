import { createApp } from 'vue';
import App from './App.vue';
import ComponentPack from './components/ComponentPack.ts';

const app = createApp(App);
app.use(ComponentPack);
app.mount('#app');