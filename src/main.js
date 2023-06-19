import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './css/styles.css'
import App from './App.vue'

let app = createApp(App)

import AppButton from './components/app/AppButton.vue'
app.component('AppButton', AppButton)

import AppFilter from './components/app/AppFilter.vue'
app.component('AppFilter', AppFilter)

import FormInput from './components/app/FormInput.vue'
app.component('FormInput', FormInput)

app.use(createPinia()).mount('#app')
