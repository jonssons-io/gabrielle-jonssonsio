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
                            <li><a @click="goto('home')">Home</a></li>
                            <li>
                                <a @click="goto('about')">About</a>
                            </li>
                            <li><a @click="goto('projects')">Projects</a></li>
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
        mediaQueryAction(mql) {
            console.log(mql)
            if (this.mqls[0].matches) {
                // xs
                console.log('xs')
                this.currentHeightValue = 1
                return
            } else if (this.mqls[1].matches) {
                // sm
                console.log('sm')
                this.currentHeightValue = 0.65
                return
            } else if (this.mqls[2].matches) {
                // md
                console.log('md')
                this.currentHeightValue = 0.75
                return
            } else if (this.mqls[3].matches) {
                // lg
                console.log('lg')
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
            this.mediaQueryAction(this.mqls[i])
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
            duration: this.currHeight,
            offset: this.currHeight + this.calcHeight,
        })
            .setClassToggle('header', 'bgclr-t-primary')
            .addTo(controller)
    },
}
</script>
