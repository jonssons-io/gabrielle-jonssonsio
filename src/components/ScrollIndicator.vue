<template>
    <font-awesome-icon icon="angle-down" @click="scrollInto()" />
</template>

<script>
export default {
    name: 'ScrollIndicator',
    props: {
        sectionclass: String,
        link: String,
    },
    methods: {
        scrollInto() {
            if (this.link == 'presentation') {
                let element = document.getElementById('about')
                element.scrollIntoView({ behavior: 'smooth' })
            } else if (this.link == 'projects') {
                let element = document.getElementById('projects')
                element.scrollIntoView({ behavior: 'smooth' })
            }
        },
    },
}
</script>

<style scoped></style>
