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
    faExternalLinkSquareAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './../public/stylesheets/styles.css'

library.add(faAngleDown, faAngleUp, faGithubSquare, faExternalLinkSquareAlt)

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
