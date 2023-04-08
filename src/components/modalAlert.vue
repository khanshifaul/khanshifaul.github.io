<script setup>
import { useContactStore } from '@/stores/contact.store';
const contactStore = useContactStore()
</script>

<template>
    <div v-if="contactStore.showModal" class="modal">
        <button class="btn close" @click="contactStore.showModal=false">
            <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
        <h5>Message sent successfully.</h5>
    </div>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: rgba(23, 255, 15, 0.25);
    height: 10rem;
    width: 30rem;
    border-radius: .5rem;

    .close {
        position: absolute;
        top: 0;
        right: 0;
    }
}
</style>