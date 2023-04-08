<template>
    <div class="navigation">
        <div class="nav-tab">
            <router-link :to="{name: 'dashboard'}">
                <font-awesome-icon icon="fa-solid fa-home" class="menu-icon" color="#fff" size="lg" />
                <!-- <Icon icon="mdi-light:home" font-size="1.5rem" /> -->
                <span v-show="!mobile">Dashboard</span>
            </router-link>
            <router-link :to="{name: 'inbox'}">
                <font-awesome-icon icon="fa-solid fa-inbox" class="menu-icon" color="#fff" size="lg" />
                <span v-show="!mobile">Inbox</span>
            </router-link>
            <router-link :to="{name: 'post'}">
                <font-awesome-icon icon="fa-solid fa-pen-to-square" class="menu-icon" color="#fff" size="lg" />
                <span v-show="!mobile">Post a Blog</span>
            </router-link>
            <router-link :to="{name: 'setting'}">
                <font-awesome-icon icon="fa-solid fa-gear" class="menu-icon" color="#fff" size="lg" />
                <span v-show="!mobile">Setting</span>
            </router-link>
        </div>
        <div class="nav-profile">
            <router-link :to="{name: 'setting'}">
                <font-awesome-icon icon="fa-solid fa-user-circle" class="menu-icon" color="#fff" size="lg" />
                <span v-show="!mobile">KhanShifaul</span>
            </router-link>
            <a @click="handleSignOut">
                <font-awesome-icon icon="fa-solid fa-sign-out" class="menu-icon" color="#fff" size="lg" />
                <span v-show="!mobile">Signout</span>
            </a>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleSignOut = () => {
    signOut(getAuth())
    router.push('/login')
}
</script>

<script>
export default {
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 768) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
    },
}
</script>

<style lang="scss" scoped>
.navigation {
    width: 100%;
    height: 100%;
    // margin-left: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;

    .nav-tab {
        display: flex;
        flex-direction: column;
    }

    .nav-tab,
    .nav-profile {
        display: flex;
        flex-direction: column;

        a {
            color: #fff;
            text-decoration: none;
            margin: .5rem 0;
            padding: 0 .5rem;
            border-left: .25rem solid transparent;
            border-right: .25rem solid transparent;
            align-items: baseline;

            span {
                padding: 0 .5rem;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>