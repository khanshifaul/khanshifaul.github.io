<template>
    <div class="header-content border-bottom">
        <nav class="navbar navbar-expand-md">
            <div class="container-xl">
                <router-link class="navbar-brand neon-light" :to="{ name: 'home' }">KhanShifaul</router-link>
                <div class="d-md-flex" v-show="!mobile">
                    <ul class="navbar-nav me-auto mb-lg-0 flex">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'home', hash: '#Home' }">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'home', hash: '#About' }">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'home', hash: '#Work' }">Work</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'home', hash: '#Contact' }">Contact</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{ name: 'blog' }">Blog</router-link>
                        </li>
                    </ul>
                    <a class="btn btn-outline-primary" href="https://fiver.com/khanshifaul">Hire Me</a>
                </div>
                <font-awesome-icon icon="fa-solid fa-bars" class="menu-icon" @click="toggleMobileNav" color="#fff"
                    size="2x" v-show="mobile" />
            </div>
            <div class="mobileNav" v-show="mobileNav">
                <ul class="navbar-nav">
                    <li class="nav-item" @click="toggleMobileNav">
                        <router-link class="nav-link" :to="{ name: 'home', hash: '#Home' }">Home</router-link>
                    </li>
                    <li class="nav-item" @click="toggleMobileNav">
                        <router-link class="nav-link" :to="{ name: 'home', hash: '#About' }">About</router-link>
                    </li>
                    <li class="nav-item" @click="toggleMobileNav">
                        <router-link class="nav-link" :to="{ name: 'home', hash: '#Work' }">Work</router-link>
                    </li>
                    <li class="nav-item" @click="toggleMobileNav">
                        <router-link class="nav-link" :to="{ name: 'home', hash: '#Contact' }">Contact</router-link>
                    </li>
                    <li class="nav-item" @click="toggleMobileNav">
                        <router-link class="nav-link" :to="{ name: 'blog' }">Blog</router-link>
                    </li>
                </ul>
                <a class="btn btn-outline-primary" href="https://fiver.com/khanshifaul">Hire Me</a>
            </div>
        </nav>
    </div>
</template>

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
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
    },
}
</script>

<style lang="scss" scoped>
.header-content {
    height: 4rem;

    nav {
        color: #fff;
        background: #183153;
    }

    .nav-link {
        font-size: 1rem;
        color: #fff;
        font-weight: 700;
        text-decoration: none;
    }

    .navbar-brand {
        color: #fff;
        font-family: 'Quick Starter', sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
    }

    li {
        &.nav-item {
            list-style: none;
        }
    }

    .btn {
        color: #fff;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            margin: 0;
        }

        @media screen and (min-width: 768px) {
            margin: 0 0.5rem;
        }


        &:hover {
            box-shadow: 0 0 5px #fff;
        }
    }

    .menu-icon {
        cursor: pointer;
    }

    .mobileNav {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: left;
        padding-right: calc(var(--bs-gutter-x) * .5);
        padding-left: calc(var(--bs-gutter-x) * .5);
    }
}
</style>
