import type { App } from 'vue'

import Button from './Button.vue'
import Surface from './Surface.vue'
import TextInput from './TextInput.vue'
import SpinBox from './SpinBox.vue'
import Grid from './Grid.vue'
import NoteInput from './NoteInput.vue'
import Tabs from './Tabs.vue'

const ComponentPack = {
  install(app: App) {
    app.component('Button', Button)
    app.component('Surface', Surface)
    app.component('TextInput', TextInput)
    app.component('SpinBox', SpinBox)
    app.component('Grid', Grid)
    app.component('NoteInput', NoteInput)
  }
}

export default ComponentPack