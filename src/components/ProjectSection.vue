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
                <a :href="project.url">
                    <!-- <div
                        class="projects__card__image"
                        :style="{
                            'background-image': 'url(' + project.bgURL + ')',
                        }"
                    > -->
                    <div class="projects__card-title">
                        <h5>{{ project.name }}</h5>
                    </div>
                    <!-- </div> -->
                </a>
                <div class="projects__card-description">
                    <p class="card-text">{{ project.description }}</p>
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
                    name: 'AngularSaloon',
                    url: 'https://gabbijonsson.github.io/angular-saloon/',
                    stack: 'angular',
                    bgURL: require('./../assets/images/projects/cardangularsaloon.jpg'),
                    credit:
                        'Photo by <a href="https://unsplash.com/@danteov_seen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nikola Jovanovic</a> on <a href="https://unsplash.com/s/photos/pub?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
                    description:
                        'First time using a JS framework. Part of a school project to learn state management in Angular.',
                },
                {
                    name: 'HamsterWars',
                    url: 'https://hamsterwars-hamsterburen.herokuapp.com/',
                    stack: 'React, NodeJS, Express, MongoDB',
                    bgURL: require('./../assets/images/projects/cardhamsterwars.png'),
                    description:
                        'Full scale school project using the MERN-stack. Goal was to implement all previous classes in a team environment.',
                },
                {
                    name: 'Jonssons.io',
                    url: 'https://hamsterwars-hamsterburen.herokuapp.com/',
                    stack: 'Vue, gsap, ScrollMagic',
                    bgURL: require('./../assets/images/projects/cardjonssonsio.png'),
                    description:
                        'Designed and built my own portfolio. Challenged myself by adding and learning new libraries.',
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
