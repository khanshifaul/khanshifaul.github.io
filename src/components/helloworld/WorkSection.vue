<script setup>
import ProjectItem from "./ProjectItem.vue";
import ProjectCard from "./ProjectCard.vue";
</script>

<template>
  <section id="Work" class="work container-xl">
    <div>
      <h2 class="section-title border-bottom">My Work</h2>
    </div>
    <div>
      <ProjectItem :project="project" v-for="(project, index) in sampleProject" :key="index" />
    </div>
    <div class="grid-container">
      <ProjectCard :projectcard="projectcard" v-for="(projectcard, index) in sampleProject" :key="index" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sampleProject: [
        {
          title: "Project 1",
          description:
            "Website of N.R.K.F Digital School. Build with VueJS + Firebase.",
          projectCoverPhoto:
            "https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540",
        },
        {
          title: "Project 2",
          description:
            "Website of N.R.K.F Digital School. Build with VueJS + Firebase.",
          projectCoverPhoto:
            "https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540",
        },
        {
          title: "Project 3",
          description:
            "Website of N.R.K.F Digital School. Build with VueJS + Firebase.",
          projectCoverPhoto:
            "https://ik.imagekit.io/khanshifaul/wallpaper-_6__NUvftHpxI.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1662840082540",
        },
      ],
    };
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
    margin-top: 2rem;
  }
}
</style>
