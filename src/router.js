//importare createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

//importare le componenti delle pagine
import Home from './pages/Home.vue';
import Portfolio from './pages/Portfolio.vue';
import Aboutme from './pages/Aboutme.vue';
import Contacts from './pages/Contacts.vue';
import People from './pages/People.vue';
import Hospitality from './pages/Hospitality.vue';
import Wedding from './pages/Wedding.vue';
import Commercial from './pages/Commercial.vue';
import Events from './pages/Events.vue';
import Street from './pages/Street.vue';
import ThankYou from './pages/ThankYou.vue';
import NotFound from './pages/NotFound.vue';

//creiamo l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/aboutme',
            name: 'about_me',
            component: Aboutme
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/people',
            name: 'people',
            component: People
        },
        {
            path: '/hospitality_industry',
            name: 'hospitality',
            component: Hospitality
        },
        {
            path: '/wedding',
            name: 'wedding',
            component: Wedding
        },
        {
            path: '/commercial',
            name: 'commercial',
            component: Commercial
        },
        {
            path: '/events',
            name: 'events',
            component: Events
        },
        {
            path: '/street_photography',
            name: 'street',
            component: Street
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