<script setup>
import { useContactStore } from '@/stores/contact.store';
const contactStore = useContactStore()
</script>

<template>
    <section id="Contact" class="contact container-xl">
        <div class="mb-4">
            <h2 class="section-title border-bottom">Drop me a Message</h2>
        </div>
        <form @submit.prevent="contactStore.preventdefaultSubmit">
            <div class="errors py-1" v-if="contactStore.errors.length">
                <p class="error" v-for="error in contactStore.errors">{{error}}</p>
            </div>
            <div class="form-floating py-1">
                <input type="text" id="floatingName" class="form-control" aria-required="true" placeholder="John Doe"
                    v-model="contactStore.name" />
                <label for="floatingName" class="form-label">Name</label>
                <span class="text-danger"></span>
            </div>
            <div class="form-floating py-1">
                <input type="email" id="floatingEmail" class="form-control" aria-required="true"
                    placeholder="name@example.com" v-model="contactStore.email" />
                <label for="floatingEmail" class="form-label">Email</label>
                <span class="text-danger"></span>
            </div>
            <div class="form-floating py-1">
                <input id="floatingSubject" class="form-control" aria-required="true" placeholder="Subject"
                    v-model="contactStore.subject" />
                <label for="floatingSubject" class="form-label">Subject</label>
                <span class="text-danger"></span>
            </div>
            <div class="form-floating py-1">
                <textarea id="floatingTextarea" class="form-control textarea-msg" aria-required="true"
                    placeholder="Leave your message here" style="height: 350px"
                    v-model="contactStore.mailbody"></textarea>
                <label for="floatingTextarea" class="form-label">Message</label>
                <span class="text-danger"></span>
            </div>
            <div class="py-1">
                <button @click="contactStore.sendMsg" id="message-submit" type="submit"
                    class="w-100 btn btn-lg btn-primary">
                    Send Message
                    <font-awesome-icon icon="fa-solid fa-rocket" />
                </button>
            </div>
        </form>
    </section>
</template>
    
<style lang="scss" scoped>
.errors {
    .error {
        background: #fa00001f;
        margin: .5rem 0;
        padding: .5rem;
        color: #fa0000;
    }
}
</style>
    