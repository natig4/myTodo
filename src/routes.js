import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs.jsx'
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
    }
]

export default routes;