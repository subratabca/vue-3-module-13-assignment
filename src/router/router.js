import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Sidebar from '../components/Sidebar.vue'
import Profile from '../components/Profile.vue'
import ProfileEdit from '../components/ProfileEdit.vue';

const routes = [
    {
        path: '/', components: {
            default: Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/profile', components: {
            default: Profile,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/profile/edit', components: {
            default: ProfileEdit,
            LeftSideBar: Sidebar
        }
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router