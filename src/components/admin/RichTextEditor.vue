<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
</script>

<template>
    <div class="container">
        <h1>Rich Text Editor</h1>
        <QuillEditor theme="snow" toolbar="full" />
    </div>
</template>

<style scoped>
div {
    padding: 5rem 0;
}
.ql-container.ql-editor{
    min-height: 70vh;
    height:70vh;
}
</style>