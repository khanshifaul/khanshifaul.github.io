<script setup>
import AdminNavigation from "@/components/admin/AdminNavigation.vue";

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'
const router = useRouter()
const authListener = onAuthStateChanged(getAuth(), function (user) {
    if (!user) { // not logged in
        router.push('/login')
    }
});
onBeforeUnmount(() => {
    // clear up listener
    authListener()
})
</script>

<template>
    <div class="adminpage">
        <aside>
            <component :is="AdminNavigation" />
        </aside>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>


<style lang="scss" scoped>
.adminpage {
    display: flex;
    flex-direction: row;
}

aside {
    width: 15vw;
    height: 100vh;
    padding: 1rem;
    position: fixed;
    font-family: 'Acme', sans-serif;
    font-size: large;
    font-weight: 400;
    color: #fff;
    background: #183153;
    z-index: 2;
}

main {
    margin-left: 15vw;
    width: 100%;
    // display: flex;
    justify-content: center;
    padding: 1rem;
}
</style>
        