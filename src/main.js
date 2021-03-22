import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import './../public/stylesheets/styles.css'

gsap.registerPlugin(TextPlugin)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    gsap,
    render: (h) => h(App),
}).$mount('#app')
