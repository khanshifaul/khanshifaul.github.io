import { db } from '@/main'
import { defineStore } from "pinia";
import { ref } from 'vue';
import { collection, addDoc } from "firebase/firestore";

export const useContactStore = defineStore('contact-store', {
    state: () => {
        return {
            name: '',
            email: '',
            subject: '',
            mailbody: '',
            showModal: ref(false),
            errors: []
        }
    },
    getters: {},
    actions: {
        preventdefaultSubmit(e) {
            e.preventDefault();
        },
        checkForm() {
            if (this.name && this.email && this.subject && this.mailbody) { return true }
            this.errors = []
            if (!this.name) {
                this.errors.push("Name Couldn't be empty.")
            }
            if (!this.email) {
                this.errors.push("Email Couldn't be empty.")
            }
            if (!this.subject) {
                this.errors.push("Subject Couldn't be empty.")
            }
            if (!this.mailbody) {
                this.errors.push("Message Couldn't be empty.")
            }
        },
        async sendMsg() {
            try {
                if (this.checkForm()) {
                    await addDoc(collection(db, "webmail"), {
                        fullname: this.name,
                        email: this.email,
                        subject: this.subject,
                        mailbody: this.mailbody
                    });
                    this.name = '';
                    this.email = '';
                    this.subject = '';
                    this.mailbody = '';
                    this.showModal = true
                }
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        },
    }
})
