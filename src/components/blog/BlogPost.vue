<script setup>
import BlogItem from './BlogItem.vue';
</script>

<template>
    <section class="container">
        <BlogItem :blogPost="blogpost" v-for="(blogpost, index) in sampleBlogPost" v-bind:key="index" />
    </section>
</template>

<script>
export default {
    data() {
        return {
            sampleBlogPost: [
                {
                    title: "Project 1",
                    dateposted: "09-Sep-2022 05:23 AM",
                    description: "Website of N.R.K.F Digital School. Build with VueJS + Firebase.",
                    blogCoverPhoto: "https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540",
                },
                {
                    title: "Project 1",
                    dateposted: "09-Sep-2022 05:23 AM",
                    description: "Website of N.R.K.F Digital School. Build with VueJS + Firebase.",
                    blogCoverPhoto: "https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540",
                },
                {
                    title: "Project 1",
                    dateposted: "09-Sep-2022 05:23 AM",
                    description: "Website of N.R.K.F Digital School. Build with VueJS + Firebase.",
                    blogCoverPhoto: "https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540",
                },
            ],
        };
    },
}
</script>