<script setup>
</script>
<template>
  <section>
    <div>
      <h2>404</h2>
      <h3>Oops! This Page Could Not Be Found</h3>
      <p>Sorry! The page you are looking for does not exist, have been removed, name changed or is temporarily
        unavailable.</p>
      <router-link to="/" class="btn btn-outline-dark">Go To Homepage</router-link>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 2.5rem 0;
  height: 86vh;
  text-align: center;
  box-sizing: border-box;
}

div {
  display: inline-block;
  padding: 0 2rem;
}

h2 {
  font-family: 'Greenhouse Gas', sans-serif;
  font-size: 20vw;
  font-weight: 800;
}

.btn {
  color: #000;
  font-family: Ubuntu, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;

}
</style>
