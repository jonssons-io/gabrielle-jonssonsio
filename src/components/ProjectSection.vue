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
                <div class="projects-wip" v-if="project.wip">
                    <span>Coming soon</span>
                </div>
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
                    <a
                        :href="project.links.gh"
                        target="_blank"
                        :class="{ 'disabled__project-link': project.disabled }"
                    >
                        <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                    <a
                        :href="project.links.published"
                        target="_blank"
                        :class="{
                            'disabled__project-link': project.disabled == true,
                        }"
                    >
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
                    name: 'Glim Fotografi',
                    url: '#',
                    stack: 'Svelte, sapper',
                    description:
                        'Creating a photography showcase portfolio for the photographer Ninna Glimmerås.',
                    links: {
                        gh: '',
                        published: '',
                    },
                    chips: ['Svelte', 'Sapper', 'SCSS'],
                    wip: true,
                    disabled: true,
                },
                {
                    name: 'Portfolio',
                    url: 'https://gabrielle.jonssons.io',
                    stack: 'Vue, gsap, ScrollMagic, Firebase',
                    description:
                        'I designed and built my own portfolio. For this project, I challenged myself by adding and learning new libraries.',
                    links: {
                        gh:
                            'https://github.com/jonssons-io/gabrielle-jonssonsio',
                        published: 'https://gabrielle.jonssons.io',
                    },
                    chips: ['Vue', 'SCSS', 'gsap', 'ScrollMagic', 'Firebase'],
                    wip: false,
                    disabled: false,
                },
                {
                    name: 'Jonssons.io',
                    url: 'https://jonssons.io',
                    stack: 'Vue, Firebase',
                    description:
                        'I designed and built our placeholder website for Jonssons.io.',
                    links: {
                        gh: 'https://github.com/jonssons-io/main-jonssonsio',
                        published: 'https://jonssons.io',
                    },
                    chips: ['Vue', 'SCSS', 'Firebase'],
                    wip: false,
                    disabled: false,
                },
                {
                    name: 'HamsterWars',
                    url: 'https://hamsterwars-hamsterburen.herokuapp.com/',
                    stack: 'React, NodeJS, Express, MongoDB',
                    description:
                        'Full scale school project using the MERN-stack. The goal was to implement all previous classes in a team environment. My responsibility and focus was mainly the backend.',
                    links: {
                        gh:
                            'https://github.com/gabbijonsson/hamsterwars-hamsterburen',
                        published:
                            'https://hamsterwars-hamsterburen.herokuapp.com/',
                    },
                    chips: ['React', 'MongoDB', 'Express', 'NodeJS'],
                    wip: false,
                    disabled: false,
                },
                {
                    name: 'AngularSaloon',
                    url: 'https://gabbijonsson.github.io/angular-saloon/',
                    stack: 'angular',
                    description:
                        'The first time I was using a JS framework, early in 2020. This was part of a school project to learn state management in Angular.',
                    links: {
                        gh: 'https://github.com/gabbijonsson/angular-saloon',
                        published:
                            'https://gabbijonsson.github.io/angular-saloon/',
                    },
                    chips: ['Angular'],
                    wip: false,
                    disabled: false,
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
