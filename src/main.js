import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@/assets/css/main.css';
import "~bootstrap/scss/bootstrap.scss";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter, faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faBars, faDashboard, faDownload, faEye, faGear, faHome, faInbox, faPenToSquare, faRocket, faSignOut, faUpRightFromSquare, faUserCircle, faXmark } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebook, faGithub, faLinkedin, faTwitter, faPatreon, faUpRightFromSquare, faRocket, faBars, faDashboard, faInbox, faPenToSquare, faGear, faUserCircle, faSignOut, faEye, faDownload, faXmark, faHome)

import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMn8r4Xe2j5-9zsAVh0BFPQvdCadh2bEc",
  authDomain: "khanshifaul-dev.firebaseapp.com",
  projectId: "khanshifaul-dev",
  storageBucket: "khanshifaul-dev.appspot.com",
  messagingSenderId: "463219462639",
  appId: "1:463219462639:web:11107c4f95450a6614261a"
};
// Initialize Firebase
const fireApp = initializeApp(firebaseConfig)
export const db = getFirestore(fireApp);

import App from './App.vue';
import router from './router';
import VueWriter from 'vue-writer';
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(VueWriter);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
