import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {registerLicense} from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xLeUx0RWFab196d1JMYFRBNQtUQF1hSn5SdE1jWHxWc3FQQ2Rf');


import App from './App.vue'
import router from './router'

import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)


app.mount('#app')
