<script setup>
import HelloNavigation from '@/components/helloworld/HelloNavigation.vue';
import HelloFooter from '@/components/helloworld/HelloFooter.vue';
import Home from "@/components/helloworld/HomeSection.vue";
import Resume from "@/components/helloworld/ResumeSection.vue";
import About from "@/components/helloworld/AboutSection.vue";
import Work from "@/components/helloworld/WorkSection.vue";
import Contact from "@/components/helloworld/ContactSection.vue";
import modalAlert from '@/components/modalAlert.vue';
</script>

<template>
  <header class="sticky-top">
    <component :is="HelloNavigation" />
  </header>
  <main>
    <Home />
    <Resume />
    <About />
    <Work />
    <modalAlert />
    <Contact />
  </main>
  <footer>
    <component :is="HelloFooter" />
  </footer>
</template>
