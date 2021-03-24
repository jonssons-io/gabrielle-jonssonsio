<template>
    <section class="presentation d-flex flex-wrap justify-center">
        <div class="presentation__greeting d-grid">
            <h4 ref="greeting">
                <span class="presentation__hello clr-t-primary">Hello. </span
                >I'm Gabrielle.
            </h4>
            <div class="presentation__story">
                <p>
                    I started my journey to become a frontend developer in 2019.
                </p>
                <p></p>
            </div>
            <img
                ref="profilebubble"
                class="presentation__profilebubble"
                src="./../assets/images/Gab.png"
            />
        </div>
    </section>
</template>

<script>
import { gsap } from 'gsap'
export default {
    name: 'PresentationSection',
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
