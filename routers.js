import HomeUp from './components/HomeUp.vue'
import SignUp from './components/SignUp.vue'
import Elite from './components/Elite.vue'
import Submit from './components/Submit.vue'
import Reset from './components/Reset.vue'
import{createRouter,createWebHistory} from 'vue-router'

const routes =[
    {
        name:'HomeUp',
        component:HomeUp,
        path: '/HomeUp'
    },
    {
        name:'SignUp',
        component:SignUp,
        path: '/'
    },
    {
        name:'Elite',
        component:Elite,
        path: '/Elite'
    },
    {
        name:'Submit',
        component:Submit,
        path: '/Submit'
    },
    {
        name:'Reset',
        component:Reset,
        path: '/Reset'
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router