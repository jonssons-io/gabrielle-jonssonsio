<template>
    <section class="hero_wrapper d-flex flex-wrap align-start fill-height">
        <div class="spacer ten"></div>
        <h1 ref="hero__title" id="text" class="hero__title"></h1>
        <h1 ref="cursor" id="cursor" class="hero__title">|</h1>
        <h1 ref="hero__titletwo" id="text-two" class="hero__title"></h1>
        <h1 ref="cursortwo" id="cursor-two" class="hero__title">|</h1>
        <div class="spacer"></div>
        <h1 ref="hero__titlethree" id="text-three" class="hero__title"></h1>
        <h1 ref="cursorthree" id="cursor-three" class="hero__title">|</h1>
        <div class="spacer"></div>
        <div ref="data" class="interface d-grid">
            <h3 class="interface__interfacedata clr-c-yellow">{</h3>
            <div class="spacer"></div>
            <div class="d-flex indent-1">
                <h3 class="interface__interfacedata clr-c-blue">"person"</h3>
                <h3 class="interface__interfacedata clr-c-grey">
                    {{ `:  ` }}
                </h3>
                <h3 class="interface__interfacedata clr-c-pink">{</h3>
            </div>
            <div class="spacer"></div>
            <div class="d-flex indent-2">
                <h3 class="interface__interfacedata clr-c-blue">"name"</h3>
                <h3 class="interface__interfacedata clr-c-grey">
                    {{ `:  "gabrielle jonsson",` }}
                </h3>
            </div>
            <div class="spacer"></div>
            <div class="d-flex indent-2">
                <h3 class="interface__interfacedata clr-c-blue">"location"</h3>
                <h3 class="interface__interfacedata clr-c-grey">
                    {{ `:  "gothenburg",` }}
                </h3>
            </div>
            <div class="spacer"></div>
            <div class="d-flex indent-2">
                <h3 class="interface__interfacedata clr-c-blue">"level"</h3>
                <h3 class="interface__interfacedata clr-c-grey">
                    {{ `:  "junior"` }}
                </h3>
            </div>
            <div class="spacer"></div>
            <div class="d-flex indent-1">
                <h3 class="interface__interfacedata clr-c-pink">}</h3>
                <h3 class="interface__interfacedata clr-c-grey">
                    {{ ` ,` }}
                </h3>
            </div>
            <div class="spacer"></div>
            <div class="d-flex indent-1">
                <h3 class="interface__interfacedata clr-c-blue">"stack"</h3>
                <h3 class="interface__interfacedata clr-c-grey">
                    {{ `:  ` }}
                </h3>
                <h3 class="interface__interfacedata clr-c-pink">[</h3>
                <h3 class="interface__interfacedata clr-c-grey">
                    "react", "vue", "angular"
                </h3>
                <h3 class="interface__interfacedata clr-c-pink">]</h3>
            </div>
            <div class="spacer"></div>
            <div class="d-flex indent-1">
                <h3 class="interface__interfacedata clr-c-blue">"cats"</h3>
                <h3 class="interface__interfacedata clr-c-grey">
                    {{ `:  ` }}
                </h3>
                <h3 class="interface__interfacedata clr-c-pink">[</h3>
                <h3 class="interface__interfacedata clr-c-grey">
                    "zephyr", "chen", "sven"
                </h3>
                <h3 class="interface__interfacedata clr-c-pink">]</h3>
            </div>
            <div class="spacer"></div>
            <h3 class="interface__interfacedata clr-c-yellow">}</h3>
        </div>
        <ScrollIndicator class="scrollindicator scrollindicator__hero" />
    </section>
</template>

<script>
import { SteppedEase, gsap } from 'gsap'
import ScrollIndicator from './ScrollIndicator'

export default {
    name: 'HeroSection',
    components: {
        ScrollIndicator,
    },
    data() {
        return {
            heroTitle1: 'const gabrielle = ',
            heroTitle2: 'new Developer()',
            heroTitle3: 'console.log(gabrielle)',
            shortDuration: 2,
            longDuration: 3.5,
            interfaceData: {
                person: {
                    name: 'gabrielle jonsson',
                    age: '32',
                    city: 'gothenburg',
                },
                stack: ['javascript', 'vue', 'react'],
            },
            interfaceData2: ` {
            "person"  :  {
                "firstName":  "gabrielle",
                "lastName":  "jonsson",
                "age":  "32",
                "city":  "gothenburg"
            },
            "stack"  :  ["javascript",  "vue",  "react"],
    }`,
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
            .to(this.$refs.cursor, { opacity: 0, display: 'none' })
            .fromTo(
                this.$refs.cursortwo,
                { autoAlpha: 0 },
                {
                    autoAlpha: 1,
                    duration: 1,
                    repeat: this.shortDuration,
                    ease: SteppedEase.config(1),
                }
            )
            .to(this.$refs.cursortwo, { opacity: 0, display: 'none' })
            .fromTo(
                this.$refs.cursorthree,
                { autoAlpha: 0 },
                {
                    autoAlpha: 1,
                    duration: 1,
                    repeat: this.shortDuration + 3,
                    ease: SteppedEase.config(1),
                }
            )
            .to(this.$refs.cursorthree, { opacity: 0, display: 'none' })

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
            .to(this.$refs.hero__titlethree, {
                text: { value: this.heroTitle3 },
                duration: this.shortDuration,
                delay: 1,
                ease: 'none',
            })
            .fromTo(
                this.$refs.data,
                {
                    x: -500,
                    display: 'none',
                },
                {
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'power2.out',
                    x: 0,
                    display: 'block',
                }
            )
    },
}
</script>

<style scoped></style>
