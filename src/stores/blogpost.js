import { defineStore } from "pinia";

export const useblogpostStore = defineStore('blogpost', {
    state: () => {
        return {
            blogpost: []
        }
    },
})