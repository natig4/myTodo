import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs.jsx'
import { Login } from './pages/LoginPage.jsx'
import TodoApp from './pages/TodoApp'


const routes = [{
        path: '/home',
        component: HomePage,
    },
    {
        path: '/todo',
        component: TodoApp,
    },
    {
        path: '/about',
        component: AboutUs,
    },
    {
        path: '/login',
        component: Login,
    }
]

export default routes;