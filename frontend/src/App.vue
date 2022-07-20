<template>
    <header></header>
    <sixerr-header />
    <router-view />
    <!-- <home-page></home-page> -->
</template>

<script>
import sixerrHeader from '../src/cmps/sixerr-header.cmp.vue'
// import homePage from './views/home-page.vue'
// import { RouterLink } from 'vue-router'

export default {
    data() {
        return {}
    },
    components: {
        sixerrHeader,
        // homePage,
    },
    created() {
        // this.$store.dispatch({ type: 'loadCategories' })
    },
    methods: {},
    computed: {},
    unmounted() {},
}
</script>
