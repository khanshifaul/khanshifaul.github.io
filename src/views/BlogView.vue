<script setup>
import Navigation from '@/components/blog/BlogNavigation.vue';
import Footer from '@/components/blog/BlogFooter.vue';
import BlogHome from "@/components/blog/BlogHome.vue";
</script>
    
<template>
    <header class="sticky-top">
        <component :is="Navigation" />
    </header>
    <main>
        <BlogHome />
    </main>
    <footer>
        <component :is="Footer" />
    </footer>

</template>
    