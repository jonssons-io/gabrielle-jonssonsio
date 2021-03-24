import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollMagic from 'scrollmagic'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './../public/stylesheets/styles.css'

gsap.registerPlugin(TextPlugin, ScrollTrigger)
Vue.use(ScrollMagic)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    gsap,
    render: (h) => h(App),
}).$mount('#app')
