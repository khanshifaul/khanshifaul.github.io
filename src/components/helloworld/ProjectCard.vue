<template>
    <router-link to="#" class="project-card align-items-center justify-content-between">
        <div class="project-CoverPhoto">
            <img class="img-fluid" :src="projectcard.projectCoverPhoto">
        </div>
        <div class="project-details">
            <h4 class="project-title"> {{projectcard.title}} </h4>
            <div class="project-description">
                {{projectcard.description}}
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ["projectcard"],
};
</script>



<style lang="scss" scoped>
.btn {
    --bs-btn-border-radius: 0 !important;
}

@media screen and (max-width: 768px) {
    .project-card {
        position: relative;
        display: flex;
        flex-direction: column;
        color: #111;
        text-decoration: none;

        .project-details {
            text-align: left;
            font-family: Oxygen, 'Open Sans', sans-serif;

            .project-link {
                color: black;
                text-decoration: none;
                display: inline-flex;
                align-items: baseline;

                &:hover {
                    text-decoration: underline;
                }
            }

            .project-title {
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: justify;
                padding-right: .5rem;
            }


            .project-description {
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: justify;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .project-card {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: .5rem;
        border: 1px solid #c1c1c1;
        color: #111;
        text-decoration: none;

        &:hover {
            transform: scale(1.05) rotate(1deg);
            transition: ease-out 1s;
        }

        .project-details {
            text-align: left;
            font-family: Oxygen, 'Open Sans', sans-serif;

            .project-link {
                color: black;
                text-decoration: none;
                display: inline-flex;
                align-items: baseline;

                &:hover {
                    text-decoration: underline;
                }
            }

            .project-title {
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: justify;
                padding-right: .5rem;
            }


            .project-description {
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: justify;
            }
        }
    }
}
</style>