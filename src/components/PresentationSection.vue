<template>
    <section class="presentation d-flex flex-wrap justify-center">
        <div class="presentation__greeting d-grid">
            <h2 ref="greeting">
                <span class="presentation__hello clr-t-primary">Hello. </span
                >I'm Gabrielle.
            </h2>
            <div class="presentation__story">
                <p class="presentation__story-section">
                    I started my journey to become a frontend developer in 2019.
                </p>
                <p class="presentation__story-section">
                    Although JavaScript is my strong suit, I recently found an
                    interest in accessibility, UX and UI.
                </p>
                <p class="presentation__story-section">
                    On the odd chance I am not working on a project, you'll
                    probably find me challenging my husband in CodeWars. :)
                </p>
            </div>
            <img
                ref="profilebubble"
                class="presentation__profilebubble"
                src="./../assets/images/Gab.png"
            />
        </div>
        <ScrollIndicator
            class="scrollindicator scrollindicator__presentation"
            link="projects"
        />
    </section>
</template>

<script>
import { gsap } from 'gsap'
import ScrollIndicator from './ScrollIndicator'

export default {
    name: 'PresentationSection',
    components: {
        ScrollIndicator,
    },
    mounted() {
        this.scrollAnimation()
    },
    methods: {
        scrollAnimation() {
            gsap.fromTo(
                this.$refs.profilebubble,
                { autoAlpha: 0 },
                {
                    scrollTrigger: this.$refs.greeting,
                    duration: 4,
                    delay: 2,
                    autoAlpha: 1,
                }
            )
        },
    },
}
</script>

<style scoped></style>
