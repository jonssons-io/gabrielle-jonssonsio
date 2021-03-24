<template>
    <header class="header">
        <nav>
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
            <div class="header__links d-flex justify-space">
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
            windowHeight: window.innerHeight,
            isBurgerActive: false,
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
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.windowHeight = window.innerHeight
        })

        const controller = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
            duration: this.windowHeight, // How many px a scene should last
            offset: this.windowHeight * 0, // At what px the scene should start
        })
            .setClassToggle('header', 'bgclr-c-darkgrey')
            .addTo(controller)
        new ScrollMagic.Scene({
            duration: this.windowHeight / 2,
            offset: this.windowHeight * 1,
        })
            .setClassToggle('header', 'bgclr-t-white')
            .addTo(controller)
        new ScrollMagic.Scene({
            duration: this.windowHeight,
            offset: this.windowHeight * 1.5,
        })
            .setClassToggle('header', 'bgclr-t-primary')
            .addTo(controller)
    },
}
</script>
