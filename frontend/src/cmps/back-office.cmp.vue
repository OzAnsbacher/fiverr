<template>
    <div class="user-board-content main-layout">
        <main class="user-main">
            <div class="profile-details-container">
                <div class="user-details">
                    <div class="user-stats-wrapper">
                        <span class="online-status online">Online</span>
                        <div class="container-user-img">
                            <div class="user-img">
                                <span class="spanclass">T</span>
                                <div class="undefined"></div>
                            </div>
                        </div>
                        <div class="fullname">{{ orders[0].buyer.fullname }}</div>
                        <div class="stars">
                            <div class="stars-svg">
                                <span class="stars-details">
                                    <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                                        ></path>
                                    </svg>
                                    <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                                        ></path>
                                    </svg>
                                    <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                                        ></path>
                                    </svg>
                                    <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                                        ></path>
                                    </svg>
                                    <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                                        ></path>
                                    </svg>
                                </span>
                                <span class="rate-num">(1k+)</span>
                            </div>
                        </div>
                        <div class="user-info-wrapper">
                            <div class="user-stats">
                                <div class="origin-wrapper">
                                    <div>
                                        <svg
                                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                            focusable="false"
                                            aria-hidden="true"
                                            viewBox="0 0 24 24"
                                            data-testid="LocationOnIcon"
                                        >
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                            ></path>
                                        </svg>
                                        From
                                    </div>
                                    <div class="origin"></div>
                                    <div class="member-since">
                                        <div>
                                            <svg
                                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                                focusable="false"
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                data-testid="PersonIcon"
                                            >
                                                <path
                                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                                                ></path>
                                            </svg>
                                            Member Since
                                        </div>
                                        <div class="date">יולי 2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="seller-details-container">0</div>
                    </div>
                    <div class="orders-section">
                        <main class="orders-content">
                            <ul class="clean-list order-list">
                                <li class="order-item flex">
                                    <section class="order-preview flex">
                                        <div class="main">
                                            <a href="https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530__340.png" class="gig-img">
                                                <div class="img-container">
                                                    <img src="" alt="" />
                                                </div>
                                            </a>
                                            <div class="user-info flex">
                                                <h5>{{ orders[0].seller.fullname }}</h5>
                                                <a class="clean-list" href="">
                                                    <div class="user-img">
                                                        <img :src="orders[0].seller.imgUrl" alt="" />
                                                        <div></div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="gig-info flex">
                                                <span class="price">Price</span>
                                                <span>{{ orders[0].gig.price }}.00$</span>
                                            </div>
                                            <div class="delivery-container flex">
                                                <span class="delivery-time">Delivery Time</span>
                                                <span class="days">{{ orders[0].timeToDeliver }} Days</span>
                                            </div>
                                            <div class="order-date flex">
                                                <span class="title">Issued At</span>
                                                <span class="date">09:48 יולי 2022</span>
                                            </div>
                                        </div>
                                        <div class="status-container">
                                            <span class="order-type">Order Status:</span>
                                            <span class="status gray">Pending</span>
                                        </div>
                                    </section>
                                </li>
                            </ul>
                        </main>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <!-- <pre>{{ orders }}</pre> -->
</template>

<script>
import aboutBuyer from '../cmps/about-buyer.cmp.vue'
export default {
    props: ['buyer'],

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
        getBuyer() {
            return this.orders[0].buyer
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
    components: {
        aboutBuyer,
    },
}
</script>
