<template>
    <section>
        <div class="resume container-xl">
            <img class="img-fluid" width="150" height="150" src="/src/assets/icons/resume.png" alt="Resume Icon"
                title="Resume Icon">
            <div class="title-view-dl">
                <h3 class="section-title border-bottom">My Resume</h3>
                <div class="view-dl-btns">
                    <router-link class="btn btn-primary resume-link" :to="{name: 'resume'}">Preview
                        <font-awesome-icon icon="fa-solid fa-eye" />
                    </router-link>
                    <a class="btn btn-outline-primary resume-link"
                        href="https://raw.githubusercontent.com/khanshifaul/khanshifaul.github.io/main/src/assets/CV_Shifaul.pdf">
                        Download
                        <font-awesome-icon icon="fa-solid fa-download" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 0;
    color: #fff;
    background-color: #6610f2;
}

.section-title {
    height: fit-content;
}

.resume {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 2.5rem 1rem;

    .title-view-dl {
        display: grid;
        grid-template-rows: auto auto;
        grid-auto-flow: row;
    }

    .view-dl-btns {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 0 .5rem;
        width: fit-content;
        height: fit-content;
        font-family: "Acme", sans-serif;
    }

    .resume-link {
        color: #fff;
    }
}
</style>