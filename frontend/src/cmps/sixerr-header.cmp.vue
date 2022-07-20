<template>
    <header class="app-header full" :class="{ 'change-color': scrollPosition > 50 }">
        <button class="hamburger hide">☰</button>
        <main class="main-header" ref="nav">
            <div class="main-layout header-flex">
                <div class="logo-and-search">
                    <h1 to="/">
                        <router-link class="logo" to="/">
                            <div class="logo-part">
                                <p class="sixerr-logo">
                                    Sixerr
                                    <span class="point">.</span>
                                </p>
                            </div>
                        </router-link>
                    </h1>
                    <div class="hamburger-nav">
                        <!-- <ul>
                            <li class="btn-close-nav">X</li>
                            <a class="join-nav">Join</a>
                            <a>Sign in</a>
                            <router-link to="/explore">
                                <li>Explore</li>
                            </router-link>
                            <router-link to="/order-app">
                                <li>Become a seller</li>
                            </router-link>
                        </ul> -->
                    </div>
                    <!-- gig filter header to come next complete later -->
                </div>
                <nav class="nav">
                    <router-link to="/explore" class="explore">
                        <a :class="$route.meta.logoClass">Explore</a>
                    </router-link>
                    <router-link :class="$route.meta.logoClass" to="/" class="become-seller">Become a seller</router-link>
                    <div>
                        <!-- add functionality inside div tag later -->
                        <a class="sign-in" :class="$route.meta.logoClass">Sign in</a>
                        <a class="join" :class="$route.meta.bodyClass">Join</a>
                    </div>
                    <div class="login-modal">
                        <!-- add functionality inside div tag later -->
                    </div>
                    <div class="signup-modal">
                        <!-- add functionality inside div tag later -->
                    </div>
                    <div class="avatar-box">
                        <!-- add functionality inside div tag later -->
                    </div>
                    <div class="online-dot"></div>
                    <ul class="profile-nav">
                        <!-- add functionality inside ul tag later -->
                        <li>
                            <router-link to="/user-profile" class="profile-txt">
                                Profile
                                <!-- add functionality inside router-link tag later -->
                            </router-link>
                        </li>
                        <li class="line"></li>
                        <li class="logout-btn">Logout</li>
                        <li class="triangle"></li>
                    </ul>
                </nav>
            </div>
        </main>
    </header>

    <!-- <div class="toy-header flex">
        <router-link class="btn btn-header" to="/">Home</router-link>
        <router-link class="btn btn-header" to="/explore">Explore</router-link>
        <router-link class="btn btn-header" to="/gig">Gig</router-link>
    </div> -->
</template>

<script>
export default {
    template: `
        `,
    data() {
        return {}
    },
    created() {},
    methods: {},
    computed: {},
    unmounted() {},
}
</script>
