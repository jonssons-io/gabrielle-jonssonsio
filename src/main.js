import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from 'vue-gtag'
import ScrollMagic from 'scrollmagic'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faAngleDown,
    faAngleUp,
    faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './../public/stylesheets/styles.css'

library.add(
    faAngleDown,
    faAngleUp,
    faGithub,
    faExternalLinkAlt,
    faLinkedin,
    faInstagram,
    faWhatsapp
)
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
gsap.registerPlugin(TextPlugin, ScrollTrigger)
Vue.use(ScrollMagic)
Vue.use(VueGtag, {
    config: { id: 'G-3V9KZVDRT0' },
})

new Vue({
    router,
    store,
    gsap,
    render: (h) => h(App),
}).$mount('#app')
