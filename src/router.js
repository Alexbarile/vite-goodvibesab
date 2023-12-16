//importare createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

//importare le componenti delle pagine
import Home from './pages/Home.vue';
import Aboutme from './pages/Aboutme.vue';
import Video from './pages/Video.vue';
import Contacts from './pages/Contacts.vue';
import ThankYou from './pages/ThankYou.vue';
import NotFound from './pages/NotFound.vue';

//creiamo l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/homepage',
            name: 'home',
            component: Home
        },
        {
            path: '/about-me',
            name: 'about_me',
            component: Aboutme
        },
        {
            path: '/video',
            name: 'video',
            component: Video
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: ThankYou
        },

        //rotta per errore 404 (sempre per ultima)
        {
            path: '/*',
            name: 'not-found',
            component: NotFound
        },
    ]
})

//4 esportiamo il router

export { router };