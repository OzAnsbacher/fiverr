<template>
    <section class="login section">
        <div class="login-container">
            <h4>Sign In to Sixerr</h4>
            <form @submit.prevent="doLogin" class="login-details">
                <input type="text" v-model="loginCred.username" placeholder="Email / Username" />
                <input type="text" v-model="loginCred.password" placeholder="Password" />
                <button>Continue</button>
            </form>
            <div class="login-footer flex justify-center align-center">
                <p>Not a member yet?</p>
                <a @click="Join">Join Now</a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            loginCred: { username: '', password: '' },
        }
    },
    methods: {
        // async doLogin() {
        //     this.$emit('toggleLogin')
        //     try {
        //         this.$store.dispatch({ type: 'login', cred: this.loginCred })
        //     } catch (err) {
        //         console.log('error', err)
        //     }
        // },
        // Join() {
        //     this.$emit('join')
        // },
        // doLogout() {
        //     this.$store.dispatch({ type: 'logout' })
        // },
    },
    computed: {},
}
</script>
