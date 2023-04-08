<script setup>
import BlogItem from "./BlogItem.vue";
import BlogCard from "./BlogCard.vue";

</script>

<template>
  <section class="container-xl">
    <BlogItem :blogitem="blogitem" v-for="(blogitem, index) in sampleBlogPost" :key="index" />
  </section>
  <section class="container-xl grid-container">
    <BlogCard :blogcard="blogcard" v-for="(blogcard, index) in sampleBlogPost" :key="index" />
  </section>

</template>

<script>
export default {
  data() {
    return {
      sampleBlogPost: [
        {
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, nobis perferendis hic a veritatis nulla nam harum doloremque",
          dateposted: "09-Sep-2022 05:23 AM",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, nobis perferendis hic a veritatis nulla nam harum doloremque.Adipisci ab deleniti voluptatum a vero rerum, aut atque iusto est quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero repellendus adipisci asperiores sed modi ipsam illum quis, saepe voluptatibus ut velit aliquam praesentium beatae architecto enim cupiditate iusto quidem ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit.Iusto nihil reprehenderit explicabo quidem ab delectus quo aliquid dignissimos voluptate officiis laudantium ratione assumenda, optio alias sint accusantium provident quam quia!",
          blogCoverPhoto:
            "https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540",
          tags: ["HTML", "CSS"],
        },
        {
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, nobis perferendis hic a veritatis nulla nam harum doloremque",
          dateposted: "09-Sep-2022 05:23 AM",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, nobis perferendis hic a veritatis nulla nam harum doloremque.Adipisci ab deleniti voluptatum a vero rerum, aut atque iusto est quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero repellendus adipisci asperiores sed modi ipsam illum quis, saepe voluptatibus ut velit aliquam praesentium beatae architecto enim cupiditate iusto quidem ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit.Iusto nihil reprehenderit explicabo quidem ab delectus quo aliquid dignissimos voluptate officiis laudantium ratione assumenda, optio alias sint accusantium provident quam quia!",
          blogCoverPhoto:
            "https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540",
          tags: ["HTML", "CSS"],
        },
        {
          title:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, nobis perferendis hic a veritatis nulla nam harum doloremque",
          dateposted: "09-Sep-2022 05:23 AM",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, nobis perferendis hic a veritatis nulla nam harum doloremque.Adipisci ab deleniti voluptatum a vero rerum, aut atque iusto est quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.Vero repellendus adipisci asperiores sed modi ipsam illum quis, saepe voluptatibus ut velit aliquam praesentium beatae architecto enim cupiditate iusto quidem ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit.Iusto nihil reprehenderit explicabo quidem ab delectus quo aliquid dignissimos voluptate officiis laudantium ratione assumenda, optio alias sint accusantium provident quam quia!",
          blogCoverPhoto:
            "https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540",
          tags: ["HTML", "CSS"],

        },
      ],
    };
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {

  section {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .grid-container {
    display: inline-grid;
  }
}

@media screen and (min-width: 768px) {
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2rem;
  }
}
</style>
