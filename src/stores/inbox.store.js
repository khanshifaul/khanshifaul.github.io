import { db } from '@/main'
import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";

export const useInboxStore = defineStore('Inbox-store', {
    state: () => {
        return {
            webmails: [],
        }
    },
    getters: {},
    actions: {
        async readMsg() {
            try {
                const querySnapshot = await getDocs(collection(db, "webmail"));
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id, '=>', doc.data());
                    const webmail = {
                        from: doc.data().fullname,
                        email: doc.data().email,
                        subject: doc.data().subject,
                        mailbody: doc.data().mailbody
                    }
                    this.webmails.push(webmail)
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }
})
