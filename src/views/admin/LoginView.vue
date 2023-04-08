<script setup>
import { onBeforeMount } from 'vue';
import { useAuthStore } from '@/stores/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import router from '../../router';
const authStore = useAuthStore()
onBeforeMount(() => {
    onAuthStateChanged(getAuth(), (user) => {
        if (user) {
            router.push('/admin')
        }
    })
})
</script>

<template>
    <section class="container-xl">
        <div class="logo">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                        <path fill="#8A3FFC"
                            d="M49,-74.1C64.1,-66.6,77.3,-54,84.3,-38.5C91.2,-23.1,91.9,-4.9,87,10.8C82.1,26.5,71.5,39.7,59.1,47.6C46.6,55.5,32.2,58.2,18.4,61.7C4.6,65.3,-8.6,69.8,-19.1,66.2C-29.6,62.6,-37.4,50.9,-44,40C-50.5,29.1,-55.7,18.9,-57.9,8C-60.1,-3,-59.1,-14.8,-55.1,-25.8C-51.1,-36.8,-43.9,-47.1,-34.2,-57C-24.6,-67,-12.3,-76.6,2.3,-80.3C17,-83.9,33.9,-81.6,49,-74.1Z"
                            transform="translate(100 100)" />
                    </clipPath>
                </defs>
                <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                    xlink:href="/src/assets/khanshifaul.webp" clip-path="url(#user-space)" />
            </svg>
        </div>
        <h1> Administration Login </h1>
        <form @submit.prevent="authStore.preventDefaultSignIn" class="login-form">
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                    autocomplete="username" v-model='authStore.email' />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                    autocomplete="current-password" v-model='authStore.password'>
                <label for="floatingPassword">Password</label>
            </div>
            <p class="errmsg" v-if="authStore.errMsg"> {{ authStore.errMsg }} </p>
            <button type="submit" class="btn btn-primary" @click="authStore.signIn"> Sign in </button>
        </form>
        <div>
            <p>Not an admin then <router-link to="/"> go to homepage</router-link>
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background: --color-background-soft;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        width: 90vw;
        text-align: center;
        @media screen and (min-width: 768px) {
            width: 30rem;
        }
    }

    .logo {
        width: 10rem;
        height: 10rem;
    }
}

.login-form {
    display: grid;
    grid-template-columns: auto;
    grid-gap: .5rem;
    text-align: center;

    .errmsg {
        padding: 0;
        margin: 0;
        color: #ff0000;
    }
}
</style>
