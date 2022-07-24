<template>
    <div class="sign-up-container">
        <h3>Join Sixerr</h3>

        <form @submit.prevent="signUp" class="signup-details">
            <input type="text" placeholder="Fullname" />
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />

            <button>Continue</button>
            <h4>By joining I agree to receive emails from Sixerr.</h4>
            <div class="sign-up-footer flex justify-center align-center">
                <p>Already a member? &nbsp</p>
                <a @click="Join">Sign in</a>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        signUp() {
            console.log('testing sign up')
        },
    },
}
</script>
