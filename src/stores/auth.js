import { defineStore } from "pinia";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { useRouter } from 'vue-router'


export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            email: '',
            password: '',
            errMsg: '',
            router: useRouter(),
            isAuthenticated: true
        }
    },
    actions: {
        preventDefaultSignIn(e) {
            e.preventDefault();
        },
        async signIn() {
            await setPersistence(getAuth(), browserSessionPersistence)
                .then(async () => {
                    try {
                        await signInWithEmailAndPassword(getAuth(), this.email, this.password);
                        console.log('Successfully logged in!');
                        this.router.push('/admin/dashboard');
                    } catch (error) {
                        switch (error.code) {
                            case 'auth/invalid-email':
                                this.errMsg = 'Invalid email';
                                break;
                            case 'auth/user-not-found':
                                this.errMsg = 'No account with that email was found';
                                break;
                            case 'auth/wrong-password':
                                this.errMsg = 'Incorrect password';
                                break;
                            default:
                                this.errMsg = 'Email or password was incorrect';
                                break;
                        }
                    }
                })
                .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                })
        },


    },
})