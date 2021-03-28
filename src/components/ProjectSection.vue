<template>
    <section class="projects d-flex flex-wrap justify-center">
        <div class="container">
            <div class="light"></div>
            <div class="dark"></div>
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
                    bgUrl: './../assets/images/projects/cardangularsaloon.jpg',
                    credit:
                        'Photo by <a href="https://unsplash.com/@danteov_seen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nikola Jovanovic</a> on <a href="https://unsplash.com/s/photos/pub?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
                    description:
                        'First time using a JS framework. Part of a school project to learn state management in Angular.',
                },
                {
                    name: 'HamsterWars',
                    url: 'https://hamsterwars-hamsterburen.herokuapp.com/',
                    stack: 'React, NodeJS, Express, MongoDB',
                    bgUrl: './../assets/images/projects/cardhamsterwars.PNG',
                    description:
                        'Full scale school project using the MERN-stack. Goal was to implement all previous classes in a team environment.',
                },
                {
                    name: 'Jonssons.io',
                    url: 'https://hamsterwars-hamsterburen.herokuapp.com/',
                    stack: 'Vue, gsap, ScrollMagic',
                    bgUrl: './../assets/images/projects/cardjonssonsio.PNG',
                    description:
                        'Designed and built my own portfolio. Challenged myself by adding and learning new libraries.',
                },
            ],
        }
    },
}
</script>

<style scoped></style>
