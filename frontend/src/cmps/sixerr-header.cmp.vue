<template>
    <header
        class="app-header full"
        :style="{ position: isHome ? 'fixed' : 'static' }"
        :class="{ 'change-color': scrollPosition > 50 || getIsNotHome }"
    >
        <main class="main-header" ref="nav">
            <div class="main-layout header-flex">
        <button class="hamburger hide" @click="toggleActive">☰</button>
                <div class="logo-and-search">
                    <h1 to="/">
                        <router-link class="logo" to="/">
                            <div class="logo-part">
                                <p :class="$route.meta.logoClass" class="sixerr-logo">
                                    Sixerr
                                    <span class="point">.</span>
                                </p>
                            </div>
                        </router-link>
                    </h1>

                    <div class="hamburger-nav" v-if="showNav">
                        <ul>
                            <li class="btn-close-nav" @click="toggleActive">X</li>
                            <router-link to="/">Home</router-link>
                            <!-- <a @click="toggleSignup" class="join-nav">Join</a> -->
                            <a @click="toggleLogin">Sign in</a>
                            <router-link to="/explore">
                                <li>Explore</li>
                            </router-link>
                            <router-link to="/order-app">
                                <li>Become a seller</li>
                            </router-link>
                        </ul>
                    </div>
                    <header-filter @setFilter="setFilter" :class="{ 'search-header': scrollPosition > 100 || getIsNotHome }" class="hide" />
                </div>
                <nav class="nav">
                    <div class="left-links">
                        <router-link to="/explore" class="explore">
                            <a :class="$route.meta.logoClass">Explore</a>
                        </router-link>
                        <router-link :class="$route.meta.logoClass" to="/" class="become-seller">Become a seller</router-link>

                        <!-- add functionality inside div tag later -->
                        <a class="sign-in" :class="$route.meta.logoClass" @click="toggleLogin">Sign in</a>
                    </div>
                    <a class="join" :class="$route.meta.bodyClass" @click="toggleSignUp">Join</a>

                    <div class="login-modal" v-show="showLogin" @click="closeLogin">
                        <sign-in @toggleLogin="toggleLogin" @closeLogin="toggleLogin" />
                    </div>
                    <div class="signup-modal" v-show="showSignUp" @click="closeSignUp">
                        <sign-up @toggleSignUp="toggleSignUp" @closeSignUp="toggleSignUp" />
                    </div>
                    <!-- <div class="avatar-box"> -->
                    <!-- add functionality inside div tag later -->
                    <!-- </div> -->

                    <!-- <div class="online-dot"></div> -->

                    <!-- <ul class="profile-nav"> -->
                    <!-- add functionality inside ul tag later -->
                    <!-- <li> -->
                    <!-- <router-link to="/user-profile" class="profile-txt"> -->
                    <!-- Profile -->
                    <!-- add functionality inside router-link tag later -->
                    <!-- </router-link> -->
                    <!-- </li>
                        <li class="line"></li>
                        <li class="logout-btn">Logout</li>
                        <li class="triangle"></li>
                    </ul> -->
                </nav>
            </div>
        </main>
    </header>
</template>

<script>
import headerFilter from './header-filter.cmp.vue'
import signIn from './sign-in.cmp.vue'
import signUp from './sign-up.cmp.vue'

export default {
    data() {
        return {
            scrollPosition: null,
            isNotHome: null,
            showLogin: false,
            showSignUp: false,
            showNav: false,
        }
    },
    components: {
        headerFilter,
        signIn,
        signUp,
    },
    created() {
        window.addEventListener('scroll', this.updateScroll)
        document.body.addEventListener('click', this.closeProfilePopover)
    },
    methods: {
        updateScroll() {
            if (!this.isHome) {
                return
            }
            this.scrollPosition = window.scrollY
        },
        toggleLogin() {
            this.showLogin = !this.showLogin
        },
        closeLogin(event) {
            const elModal = document.getElementsByClassName('login-container')[0]
            if (elModal.contains(event.target)) return
            this.showLogin = false
        },
        join() {
            this.toggleLogin()
            this.toggleSignUp()
        },
        toggleSignUp() {
            this.showSignUp = !this.showSignUp
        },
        closeSignUp(event) {
            const elModal = document.getElementsByClassName('sign-up-container')[0]
            if (elModal.contains(event.target)) return
            this.showSignUp = false
        },
        toggleActive() {
            this.showNav = !this.showNav
        },
        closeProfilePopover(event) {
            const elModal = document.getElementsByClassName('profile-nav')[0]
            if (elModal?.contains(event.target)) return
            this.showProfileNav = false
        },
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    },

    computed: {
        isHome() {
            return this.$route.path === '/'
        },
        getIsNotHome() {
            var path = this.$route.path
            if (!path.endsWith('#/')) {
                this.isNotHome = true
            } else this.isNotHome = false
            return this.isNotHome
        },
    },
    watch: {
        isHome: {
            handler() {
                if (!this.isHome) this.scrollPosition = 0
            },
        },
    },
    unmounted() {},
}
</script>
