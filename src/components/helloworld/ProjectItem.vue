<template>
    <div class="project-item d-flex align-items-center justify-content-between">
        <div class="project-photo">
            <img class="img-fluid" :src="project.projectCoverPhoto" alt="">
        </div>
        <div class="project-details">
            <h4> {{project.title}} </h4>
            <p> {{project.description}} </p>
            <router-link class="btn btn-dark" to="#">Visit
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["project"],
};
</script>

<style scoped>
.project-details {
    padding: 0;
    text-align: left;
    font-family: Oxygen, 'Open Sans', sans-serif;
}

.btn {
    --bs-btn-border-radius: 0 !important;
}

@media screen and (max-width: 768px) {
    .project-item {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        width: 100%;
        background-color: #f5f5f5;
    }

    .project-item:nth-child(even) {
        flex-direction: column;
    }

    .project-details {
        width: 100%;
        height: 10rem;
        padding: .5rem;
    }

    .project-photo {
        width: 100%;
    }
}

@media screen and (min-width: 768px) {
    .project-item {
        padding: 0;
        display: flex;
        flex-direction: row;
    }

    .project-details {
        width: 45%;
    }


    .project-item:nth-child(odd) .project-details {
        padding-left: 5%;
    }

    .project-item:nth-child(even) {
        flex-direction: row-reverse;
    }

    .project-photo {
        width: 55%;
    }

    .project-photo img {
        width: 100%;
        height: auto;
    }
}
</style>
