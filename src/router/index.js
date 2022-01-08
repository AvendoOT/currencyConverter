import {createRouter, createWebHistory} from "vue-router";
import Homepage from "../views/Homepage";
import Converter from "../views/Converter";
import NotFound from "../views/NotFound";
import RequestedCurrencies from "../views/RequestedCurrencies";

const routes = [
    {
        path: "/",
        name: Homepage,
        component: Homepage,
    },
    {
        path: "/converter",
        name: Converter,
        component: Converter,
    },
    {
        path: "/list",
        name: RequestedCurrencies,
        component: RequestedCurrencies,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
