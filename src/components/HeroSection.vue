<template>
    <div class="hero_wrapper d-flex flex-wrap align-start fill-height">
        <div class="spacer"></div>
        <h1 ref="hero__title" id="text" class="hero__title"></h1>
        <h1 ref="cursor" id="cursor" class="hero__title">|</h1>
        <h1 ref="hero__titletwo" id="text-two" class="hero__title"></h1>
        <h1 ref="cursortwo" id="cursor-two" class="hero__title">|</h1>
    </div>
</template>

<script>
// import { TimelineMax, SteppedEase } from 'gsap'
import { SteppedEase, gsap } from 'gsap'

export default {
    name: 'HeroSection',
    data() {
        return {
            heroTitle1: 'const gabrielle =',
            heroTitle2: ' new Developer()',
            shortDuration: 2,
            longDuration: 3.5,
        }
    },
    mounted() {
        let tlCursor = gsap.timeline()
        let tlText = gsap.timeline()
        tlCursor
            .fromTo(
                this.$refs.cursor,
                { autoAlpha: 0, x: -20 },
                {
                    autoAlpha: 1,
                    duration: 1,
                    repeat: this.longDuration,
                    ease: SteppedEase.config(1),
                }
            )
            .to(this.$refs.cursor, {
                autoAlpha: 0,
            })
            .fromTo(
                this.$refs.cursortwo,
                { autoAlpha: 0 },
                {
                    autoAlpha: 1,
                    duration: 1,
                    repeat: this.shortDuration + 3,
                    ease: SteppedEase.config(1),
                }
            )
            .to(this.$refs.cursortwo, {
                autoAlpha: 0,
            })

        tlText
            .to(this.$refs.hero__title, {
                text: { value: this.heroTitle1 },
                duration: this.longDuration,
                delay: 1,
                ease: 'none',
            })
            .to(this.$refs.hero__titletwo, {
                text: { value: this.heroTitle2 },
                duration: this.shortDuration,
                delay: 1,
                ease: 'none',
            })
        // const tl = new TimelineMax({
        //     paused: false,
        // })
        // // letter animation
        // tl.fromTo(
        //     'anim-typewriter',
        //     8,
        //     {
        //         width: '0',
        //     },
        //     {
        //         width: '20.18em' /*same as CSS .line-1 width */,
        //         ease: SteppedEase.config(37),
        //     },
        //     0
        // )
        // // text cursor animation
        // tl.fromTo(
        //     'anim-typewriter',
        //     0.5,
        //     {
        //         'border-right-color': 'rgba(255,255,255,0.75)',
        //     },
        //     {
        //         'border-right-color': 'rgba(255,255,255,0)',
        //         repeat: -1,
        //         ease: SteppedEase.config(37),
        //     },
        //     0
        // )
        // tl.play()
    },
}
</script>

<style scoped></style>
