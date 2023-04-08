<script setup>
import { RouterView } from 'vue-router'
import LoadingSpinner from '@/components/loadingSpinner.vue'
</script>

<template>
  <loadingSpinner v-if="isLoading" />
  <RouterView v-if="!isLoading" />
</template>

<script>
export default {
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
</script>