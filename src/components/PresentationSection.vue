<template>
    <section class="presentation_wrapper d-flex flex-wrap justify-center">
        <div class="greeting">
            <h4 ref="greeting">
                <span class="hello clr-t-primary">Hello. </span>I'm Gabrielle.
            </h4>
            <img
                ref="profilebubble"
                class="profilebubble"
                src="./../assets/images/GabLilacG.png"
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
                { autoAlpha: 0, x: 500 },
                {
                    scrollTrigger: this.$refs.greeting,
                    duration: 4,
                    delay: 2,
                    autoAlpha: 1,
                    x: 500,
                }
            )
        },
    },
}
</script>

<style scoped></style>
