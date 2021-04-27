<template>
    <header class="header d-flex align-center">
        <nav class="d-flex align-center">
            <div
                id="header__burger"
                :class="{ active: isBurgerActive }"
                @click.prevent="toggleBurger"
            >
                <slot>
                    <button
                        type="button"
                        class="header__burger-button"
                        title="Menu"
                    >
                        <span class="header__burger-bar burger-bar--1"></span>
                        <span class="header__burger-bar burger-bar--2"></span>
                        <span class="header__burger-bar burger-bar--3"></span>
                    </button>
                </slot>
            </div>
            <div class="sidebar">
                <div
                    class="sidebar__backdrop"
                    @click="toggleBurger"
                    v-if="isBurgerActive"
                ></div>
                <transition name="slide">
                    <div v-if="isBurgerActive" class="sidebar__panel">
                        <ul class="sidebar__panel-nav">
                            <li>
                                <a
                                    @click="goto('home')"
                                    @keyup.enter="goto('home')"
                                    title="Presentation about Frontend Developer - Gothenburg"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    @click="goto('about')"
                                    @keyup.enter="goto('home')"
                                    title="Presentation of Gabrielle Jonsson - Junior Developer"
                                    >About</a
                                >
                            </li>
                            <li>
                                <a
                                    @click="goto('projects')"
                                    @keyup.enter="goto('home')"
                                    title="Frontend projects in Svelte, Vue, React and Angular"
                                    >Projects</a
                                >
                            </li>
                            <div class="list-spacer"></div>
                            <ul class="sidebar__panel-nav">
                                <li class="nav-icon">
                                    <a
                                        href="https://www.linkedin.com/in/gabbijonsson/"
                                        target="_blank"
                                        aria-label="Go to Gabrielles LinkedIn profile"
                                        title="Gabrielle Jonssons LinkedIn - Connect with a frontend developer in Gothenburg"
                                        ><font-awesome-icon
                                            :icon="['fab', 'linkedin']"
                                    /></a>
                                    <a
                                        href="https://github.com/gabbijonsson"
                                        target="_blank"
                                        aria-label="Go to Gabrielles Github"
                                        title="Gabrielle Jonssons GitHub repository for frontend development"
                                        ><font-awesome-icon
                                            :icon="['fab', 'github']"
                                    /></a>
                                    <a
                                        href="https://www.instagram.com/gabbient_/"
                                        target="_blank"
                                        aria-label="Go to Gabrielles Instagram profile"
                                        title="Gabrielle Jonssons Instagram - Updates on current frontend projects"
                                        ><font-awesome-icon
                                            :icon="['fab', 'instagram']"
                                    /></a>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=+46736797611"
                                        target="_blank"
                                        aria-label="Start a conversation with Gabrielle on WhatsApp"
                                        title="Contact Gabrielle Jonsson about frontend projects in Gothenburg or remote"
                                        ><font-awesome-icon
                                            :icon="['fab', 'whatsapp']"
                                    /></a>
                                </li>
                            </ul>
                            <div class="spacer-sidebar"></div>
                        </ul>
                    </div>
                </transition>
            </div>
            <div class="header__links d-flex align-center">
                <p class="header__links-link clr-c-blue" @click="goto('home')">
                    Home
                </p>
                <p class="header__links-link clr-c-blue" @click="goto('about')">
                    About
                </p>
                <p
                    class="header__links-link clr-c-blue"
                    @click="goto('projects')"
                >
                    Projects
                </p>
                <div class="icons-navbar d-flex align-center">
                    <a
                        class="clr-c-blue"
                        href="https://www.linkedin.com/in/gabbijonsson/"
                        target="_blank"
                        title="Gabrielle Jonssons LinkedIn - Connect with a frontend developer in Gothenburg"
                        ><font-awesome-icon :icon="['fab', 'linkedin']"
                    /></a>
                    <a
                        class="clr-c-blue"
                        href="https://github.com/gabbijonsson"
                        target="_blank"
                        title="Gabrielle Jonssons GitHub repository for frontend development"
                        ><font-awesome-icon :icon="['fab', 'github']"
                    /></a>
                    <a
                        class="clr-c-blue"
                        href="https://www.instagram.com/gabbient_/"
                        target="_blank"
                        title="Gabrielle Jonssons Instagram - Updates on current frontend projects"
                        ><font-awesome-icon :icon="['fab', 'instagram']"
                    /></a>
                    <a
                        class="clr-c-blue"
                        href="https://api.whatsapp.com/send?phone=+46736797611"
                        target="_blank"
                        title="Contact Gabrielle Jonsson about frontend projects in Gothenburg or remote"
                        ><font-awesome-icon :icon="['fab', 'whatsapp']"
                    /></a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import ScrollMagic from 'scrollmagic'

export default {
    name: 'NavBar',
    data() {
        return {
            isBurgerActive: false,
            mqls: [
                window.matchMedia('screen and (max-width: 599px)'),
                window.matchMedia(
                    'screen and (min-width: 600px) and (max-width: 959px)'
                ),
                window.matchMedia(
                    'screen and (min-width: 960px) and (max-width: 1263px)'
                ),
                window.matchMedia('screen and (min-width: 1264px)'),
            ],
            currentHeightValue: 0,
        }
    },
    methods: {
        toggleBurger() {
            this.isBurgerActive = !this.isBurgerActive
        },
        goto(refName) {
            if (refName == 'home') {
                this.isBurgerActive = false
                let element = document.getElementById('home')
                element.scrollIntoView({ behavior: 'smooth' })
            } else if (refName == 'about') {
                this.isBurgerActive = false
                let element = document.getElementById('about')
                element.scrollIntoView({ behavior: 'smooth' })
            } else if (refName == 'projects') {
                this.isBurgerActive = false
                let element = document.getElementById('projects')
                element.scrollIntoView({ behavior: 'smooth' })
            }
        },
        mediaQueryAction() {
            if (this.mqls[0].matches) {
                // xs
                this.currentHeightValue = 1
                return
            } else if (this.mqls[1].matches) {
                // sm
                this.currentHeightValue = 0.65
                return
            } else if (this.mqls[2].matches) {
                // md
                this.currentHeightValue = 0.75
                return
            } else if (this.mqls[3].matches) {
                // lg
                this.currentHeightValue = 0.85
                return
            }
        },
    },
    computed: {
        currHeight() {
            return window.innerHeight
        },
        calcHeight() {
            return this.currHeight * this.currentHeightValue
        },
    },
    mounted() {
        for (let i = 0; i < this.mqls.length; i++) {
            this.mediaQueryAction()
            this.mqls[i].addEventListener('change', this.mediaQueryAction)
        }

        const controller = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
            duration: this.currHeight, // How many px a scene should last
            offset: 0, // At what px the scene should start
        })
            .setClassToggle('header', 'bgclr-c-darkgrey')
            .addTo(controller)
        new ScrollMagic.Scene({
            duration: this.calcHeight,
            offset: this.currHeight,
        })
            .setClassToggle('header', 'bgclr-t-white')
            .addTo(controller)
        new ScrollMagic.Scene({
            duration: this.currHeight * 10,
            offset: this.currHeight + this.calcHeight,
        })
            .setClassToggle('header', 'bgclr-t-primary')
            .addTo(controller)
    },
}
</script>
