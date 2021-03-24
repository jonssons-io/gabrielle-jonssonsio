<template>
    <div>
        <NavBar />
        <HeroSection id="home" />
        <PresentationSection id="about" />
    </div>
</template>

<script>
import NavBar from './../components/NavBar'
import HeroSection from './../components/HeroSection'
import PresentationSection from './../components/PresentationSection'

export default {
    name: 'Home',
    components: {
        NavBar,
        HeroSection,
        PresentationSection,
    },
}
</script>
