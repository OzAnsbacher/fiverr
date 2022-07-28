<template>
    <section>
        <div class="main">
            <!-- routerlink class="gig-img">
                    <div class='img-container'>
                      img
                    </div> -->
            <!-- routerlink -->

            <div class="user-info flex">
                <!-- <pre>{{ orders }}</pre> -->
                <h3>{{ orders[0].buyer.fullname }}</h3>
                <h3>{{ orders[0].buyer.imageURL }}</h3>
                <!-- routerlink user image -->
            </div>
            <div class="gig-info flex">
                <span class="price">Price</span>
                <span></span>
            </div>
            <div class="delivery-container flex">
                <span class="delivery-time">Delivery Time</span>
                <span class="days"></span>
            </div>
            <div class="order-date flex">
                <span class="title">Issued At</span>
                <span class="date"></span>
            </div>
        </div>
        <div class="status-container">
            <span class="order-type">Order Status:</span>

            <div class="btn-wrapper flex">
                <button></button>
            </div>
            :
            <span>Order status</span>
        </div>
    </section>

    <!-- <pre>{{ orders }}</pre> -->
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
