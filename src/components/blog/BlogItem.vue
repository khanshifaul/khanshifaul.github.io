<template>
    <div class="blog-item d-flex align-items-center justify-content-between">
        <div class="blog-CoverPhoto">
            <img class="img-fluid" :src="blogitem.blogCoverPhoto">
        </div>
        <div class="blog-details">
            <router-link class="blog-link" to="#">
                <h4 class="blog-title"> {{blogitem.title}} </h4>
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
            </router-link>
            <p class="blog-postedon">Posted on: {{blogitem.dateposted}}</p>
            <div class="blog-description">
                {{blogitem.description}}
            </div>
            <div class="blog-tags">
                <ul class="tag-list">
                    <li class="tag" v-for="tag in blogitem.tags" v-bind:key="tag">{{tag}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["blogitem"],
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .blog-item {
        display: flex;
        flex-direction: column;

        .blog-details {
            padding-bottom: 1rem;
            text-align: left;
            font-family: Oxygen, 'Open Sans', sans-serif;

            .blog-link {
                color: black;
                text-decoration: none;
                display: inline-flex;
                align-items: baseline;
                text-decoration: underline;
            }

            .blog-title {
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: justify;
                padding-right: .5rem;
            }


            .blog-description {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: justify;
            }

            .tag-list {
                list-style: none;
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: flex-start;
                padding: 0;
                margin: 0;

                .tag {
                    border: 1px solid var(--color-border);
                    padding: 0 .5rem;
                    margin: .5rem .5rem .5rem 0;
                }
            }
        }

        .blog-link {
            color: black;
            text-decoration: none;
        }
    }
}

@media screen and (min-width: 768px) {
    .blog-item {
        display: flex;
        flex-direction: row;

        &:nth-child(odd) {
            flex-direction: row-reverse;

            .blog-details {
                padding-right: 2rem;
            }
        }

        &:nth-child(even) {
            .blog-details {
                padding-left: 2rem;
            }
        }

        .blog-CoverPhoto {
            width: 55%;
        }

        .blog-details {
            width: 45%;
            text-align: left;
            font-family: Oxygen, 'Open Sans', sans-serif;

            .blog-link {
                color: black;
                text-decoration: none;
                display: inline-flex;
                align-items: baseline;

                &:hover {
                    text-decoration: underline;
                }
            }

            .blog-title {
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: justify;
                padding-right: .5rem;
            }


            .blog-description {
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-align: justify;
            }

            .tag-list {
                list-style: none;
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: flex-start;
                padding: 0;

                .tag {
                    border: 1px solid var(--color-border);
                    padding: 0 .5rem;
                    margin: .5rem .5rem .5rem 0;
                }
            }
        }
    }
}
</style>