import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import { createI18n } from 'vue-i18n';
import { messages } from './lang/messages';


const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages
})

const app=createApp(App) 

app.use(i18n)
app.use(router).mount('#app')

