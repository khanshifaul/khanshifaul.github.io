<script>
export default {
  data() {
    return { arr: ["Web Developer", "Designer", "Cybersecurity Researcher"] };
  },
};
</script>
  
<template>
  <section id="Home" class="hero py-3">
    <div class="container-xl">
      <div class="d-md-flex align-items-center">
        <div class="col order-sm-1">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                <path fill="#8A3FFC"
                  d="M49,-74.1C64.1,-66.6,77.3,-54,84.3,-38.5C91.2,-23.1,91.9,-4.9,87,10.8C82.1,26.5,71.5,39.7,59.1,47.6C46.6,55.5,32.2,58.2,18.4,61.7C4.6,65.3,-8.6,69.8,-19.1,66.2C-29.6,62.6,-37.4,50.9,-44,40C-50.5,29.1,-55.7,18.9,-57.9,8C-60.1,-3,-59.1,-14.8,-55.1,-25.8C-51.1,-36.8,-43.9,-47.1,-34.2,-57C-24.6,-67,-12.3,-76.6,2.3,-80.3C17,-83.9,33.9,-81.6,49,-74.1Z"
                  transform="translate(100 100)" />
              </clipPath>
            </defs>
            <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
              xlink:href="/src/assets/khanshifaul.webp" clip-path="url(#user-space)" />
          </svg>
        </div>
        <div class="hero-line col text-md-start order-sm-0">
          <h1>
            Hi, <br />
            I'm <span class="display">Shifaul</span>
          </h1>
          <h2 class="neon">
            <VueWriter :array="arr" :eraseSpeed="50" :typeSpeed="100" :delay="2000" />
          </h2>
          <a class="btn btn-lg btn-primary" href="https://cutt.ly/khanshifaul">Hire Me</a>
        </div>
      </div>
    </div>
    <div class="social container-xl d-flex justify-content-center justify-content-md-start">
      <a href="https://facebook.com/khanshifaul/" aria-label="facebook">
        <font-awesome-icon icon="fa-brands fa-facebook" size="2x" />
      </a>
      <a href="https://github.com/khanshifaul" aria-label="github">
        <font-awesome-icon icon="fa-brands fa-github" size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/khan-shifaul/" aria-label="linkedin">
        <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
      </a>
      <a href="https://twitter.com/khanshifaul" aria-label="twitter">
        <font-awesome-icon icon="fa-brands fa-twitter" size="2x" />
      </a>
      <a href="https://www.patreon.com/khanshifaul" aria-label="patreon">
        <font-awesome-icon icon="fa-brands fa-patreon" size="2x" />
      </a>
    </div>
  </section>
</template>
  
<style lang="scss" scoped>
.hero {
  font-weight: 400;
  line-height: 5rem;
}

.hero-line {
  font-family: "Acme", sans-serif;
  text-align: center;

  .display {
    font-family: 'Bacode', sans-serif;
    font-size: 3rem;
  }
}

.is-typed {
  span {
    &.typed {
      color: black;
    }

    &.cursor {
      display: inline-block;
      width: 3px;
      background-color: black;
      animation: blink 1s infinite;
    }

    &.underscore {
      display: inline-flex;
      width: 10px;
      height: 1px;
      align-items: flex-end;
      background-color: black;
      animation: blink 1s infinite;
    }
  }
}

.social {
  a {
    padding: 0 1rem;
    border-bottom: 1px solid transparent;
  }
}

.social {
  a {
    &:hover {
      color: var(--bs-indigo);
      border-bottom: 1px solid var(--bs-indigo);
    }
  }
}

@keyframes blink {
  10% {
    background-color: black;
  }

  50% {
    background-color: black;
  }

  99% {
    background-color: transparent;
  }
}
</style>
  
