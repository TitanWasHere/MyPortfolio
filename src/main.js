import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import gsap from "gsap";
import VueTypedJs from 'vue-typed-js';


const app = createApp(App)

app.use(VueTypedJs)


app.mount('#app')
