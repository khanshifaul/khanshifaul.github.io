<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
const modules = {
    module: BlotFormatter
};
</script>
    
<template>
    <section class="container-fluid">
        <h1>Rich Text Editor</h1>
        <div class="editor-page">
            <form @submit.prevent="">
                <div class="form-floating py-1">
                    <input type="text" id="floatingName" class="form-control" aria-required="true"
                        placeholder="Post Title..." />
                    <label for="floatingName" class="form-label">Post Title...</label>
                    <span class="text-danger"></span>
                </div>
                <div>
                    <QuillEditor theme="snow" toolbar="full" :modules="modules"></QuillEditor>
                </div>
                <div class="btns">
                    <button class="btn btn-primary">Preview & Publish</button>
                    <button class="btn btn-outline-primary">Save as draft</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
}

form div {
    margin: 1rem 0;
}

.form-control,
.btn {
    border-radius: 0;
}

.btns {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: .5rem;

}
</style>