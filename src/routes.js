import Homepage from "./home-page/homepage";
import DetailMovie from "./home-page/content/detailAllMovie/detailMovie";
import DetailTvSeries from "./home-page/content/detailAllMovie/detailTvSeries";
import DetailCartoon from "./home-page/content/detailAllMovie/detailCartoon";
import AboutComponent from './home-page/about/aboutComponent';
import ourPartners from "./home-page/partners/ourPartners";
import Footer from "./home-page/footer/footer";
import Modal from "./home-page/content/cart/modal";

import Profile from "./home-page/signIn__signUp/profile";

import DashboardAdmin from "./admin/dashboardAdmin";
import MovieAdmin from "./admin/movieAdmin";
import UserAdmin from "./admin/userAdmin";
import AddMovie from "./admin/addMovie";
import DeleteMovie from "./admin/deleteMovie";
import UpdateMovie from "./admin/updateMovie";

const routeHome = [
    {
        path:"/",
        exact: true,
        component: Homepage
    },
    {
        path:"/",
        exact: true,
        component:ourPartners
    },
    {
        path:"/",
        exact:true,
        component:Footer
    },
    {
        path:"/about-us",
        exact: false,
        component: AboutComponent
    },
    {
        path:"/detail-movie/:id",
        exact: false,
        component: DetailMovie
    },
    {
        path:"/detail-tv-series/:id",
        exact: false,
        component: DetailTvSeries
    },
    {
        path:"/detail-cartoon/:id",
        exact: false,
        component: DetailCartoon
    },
    
]
const routeProfie = [
    {
        path:"/login/user",
        exact:true,
        component: Profile
    },
    {
        path:"/login/cart",
        exact:true,
        component:Modal
    }
]

const routeAdmin = [
    {
        path:"/admin/dashboard",
        exact:true,
        component:DashboardAdmin
    },
    {
        path:"/admin/list-movie",
        exact: false,
        component:MovieAdmin
    },
    {
        path:"/admin/list-user",
        exact:false,
        component:UserAdmin
    },
    {
        path:"/admin/add-movie",
        exact:false,
        component:AddMovie
    },
    {
        path:"/admin/delete-movie",
        exact:false,
        component:DeleteMovie,
    },
    {
        path:"/admin/update-movie",
        exact:false,
        component:UpdateMovie
    }
]

export {routeHome, routeProfie, routeAdmin};