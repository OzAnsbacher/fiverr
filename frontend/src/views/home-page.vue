<template>
    <section>
        <sixerr-hero />
    </section>
</template>

<script>
import { gigService } from '../services/gig-service'
import sixerrHero from '../cmps/sixerr-hero.cmp.vue'
export default {
    data() {
        return {}
    },
    components: {
        // sixerrHeader,
        sixerrHero,
    },
    created() {
        this.get()
    },
    methods: {
        async get() {
            const res = await gigService.query()
            console.log('res', res)
        },
    },
    computed: {},
    unmounted() {},
}
</script>
