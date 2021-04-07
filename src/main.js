import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
    faFacebook,
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
    faFacebook,
    faWhatsapp
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
gsap.registerPlugin(TextPlugin, ScrollTrigger)
Vue.use(ScrollMagic)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    gsap,
    render: (h) => h(App),
}).$mount('#app')
