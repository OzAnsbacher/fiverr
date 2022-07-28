<template>
    <h1>Back office</h1>
    <div>Testing</div>
    <pre>{{ orders }}</pre>
</template>

<script>
export default {
    data() {
        return {
            orders: null,
            gigs: null,
        }
    },
    async created() {
        await this.loadUserOrders()
        console.log(this.orders)
    },
    computed: {
        user() {
            return this.$store.getters.getUser
        },
    },
    methods: {
        async loadUserOrders() {
            const userId = this.user._id
            this.orders = await this.$store.dispatch({
                type: 'getOrdersById',
                userId,
            })
        },
    },
}
</script>
