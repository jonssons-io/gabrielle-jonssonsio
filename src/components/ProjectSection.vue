<template>
    <section class="projects d-flex flex-wrap justify-center">
        <div class="triangles">
            <div class="triangles__light"></div>
            <div class="triangles__dark"></div>
        </div>
        <div class="projects__wrapper d-flex flex-wrap justify-center">
            <div
                class="projects__card"
                v-for="(project, index) in projects"
                :key="index"
            >
                <a :href="project.url" class="desktop" target="_blank">
                    <div class="projects__card-title">
                        <h2>{{ project.name }}</h2>
                    </div>
                </a>
                <div class="mobile">
                    <div class="projects__card-title">
                        <h2>{{ project.name }}</h2>
                    </div>
                </div>
                <div class="projects__card-description">
                    <p class="card-text">{{ project.description }}</p>
                </div>
                <div
                    class="project__card-chips d-flex flex-wrap justify-center"
                >
                    <p
                        class="chip"
                        v-for="(chip, index) in project.chips"
                        :key="index"
                    >
                        {{ chip }}
                    </p>
                </div>
                <div class="projects__card-links d-flex justify-center">
                    <a :href="project.links.gh" target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                    <a :href="project.links.published" target="_blank">
                        <font-awesome-icon icon="external-link-alt" />
                    </a>
                </div>
            </div>
        </div>
        <div class="scrollindicator-up d-flex justify-center">
            <font-awesome-icon
                icon="angle-up"
                @click="scrollInto()"
                class="fai"
            />
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectSection',
    data() {
        return {
            projects: [
                {
                    name: 'Portfolio',
                    url: 'https://gabrielle.jonssons.io',
                    stack: 'Vue, gsap, ScrollMagic, Firebase',
                    bgURL: require('./../assets/images/projects/cardjonssonsio.png'),
                    description:
                        'Designed and built my own portfolio. Challenged myself by adding and learning new libraries.',
                    links: {
                        gh:
                            'https://github.com/jonssons-io/gabrielle-jonssonsio',
                        published: 'https://gabrielle.jonssons.io',
                    },
                    chips: ['Vue', 'SCSS', 'gsap', 'ScrollMagic', 'Firebase'],
                },
                {
                    name: 'Jonssons.io',
                    url: 'https://jonssons.io',
                    stack: 'Vue, Firebase',
                    bgURL: require('./../assets/images/projects/cardjonssonsio.png'),
                    description:
                        'Designed and built our placeholder-website for Jonssons.io.',
                    links: {
                        gh: 'https://github.com/jonssons-io/main-jonssonsio',
                        published: 'https://jonssons.io',
                    },
                    chips: ['Vue', 'SCSS', 'Firebase'],
                },
                {
                    name: 'HamsterWars',
                    url: 'https://hamsterwars-hamsterburen.herokuapp.com/',
                    stack: 'React, NodeJS, Express, MongoDB',
                    bgURL: require('./../assets/images/projects/cardhamsterwars.png'),
                    description:
                        'Full scale school project using the MERN-stack. Goal was to implement all previous classes in a team environment.',
                    links: {
                        gh:
                            'https://github.com/gabbijonsson/hamsterwars-hamsterburen',
                        published:
                            'https://hamsterwars-hamsterburen.herokuapp.com/',
                    },
                    chips: ['React', 'MongoDB', 'Express', 'NodeJS'],
                },
                {
                    name: 'AngularSaloon',
                    url: 'https://gabbijonsson.github.io/angular-saloon/',
                    stack: 'angular',
                    bgURL: require('./../assets/images/projects/cardangularsaloon.jpg'),
                    description:
                        'First time using a JS framework. Part of a school project to learn state management in Angular.',
                    links: {
                        gh: 'https://github.com/gabbijonsson/angular-saloon',
                        published:
                            'https://gabbijonsson.github.io/angular-saloon/',
                    },
                    chips: ['Angular'],
                },
            ],
        }
    },
    methods: {
        scrollInto() {
            let element = document.getElementById('home')
            element.scrollIntoView({ behavior: 'smooth' })
        },
    },
}
</script>

<style scoped></style>
