<template>
    <div>
        <HeroSection />
        <PresentationSection />
    </div>
</template>

<script>
import PresentationSection from './../components/PresentationSection'
import HeroSection from './../components/HeroSection'

export default {
    name: 'Home',
    components: {
        PresentationSection,
        HeroSection,
    },
}
</script>
