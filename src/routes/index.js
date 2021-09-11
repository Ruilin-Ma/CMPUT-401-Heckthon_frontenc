import PageNotFound from "../pages/PageNotFound"
import dashboard from "../pages/dashboard";


export const mainRoutes = [{
    path: '/404',
    component: PageNotFound
}]

export const dashBoardRoutes = [
    {
    path: '/dashboard',
    component: dashboard,
    isShow: true,
    title: 'Dashboard',
}]