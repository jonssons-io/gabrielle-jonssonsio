<template>
    <div>
        <NavBar />
        <HeroSection id="home" />
        <PresentationSection id="about" />
        <ProjectSection id="projects" />
    </div>
</template>

<script>
import NavBar from './../components/NavBar'
import HeroSection from './../components/HeroSection'
import PresentationSection from './../components/PresentationSection'
import ProjectSection from './../components/ProjectSection'

export default {
    name: 'Home',
    components: {
        NavBar,
        HeroSection,
        PresentationSection,
        ProjectSection,
    },
}
</script>
