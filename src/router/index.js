import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
NProgress.configure({ easing: "ease", speed: 3000, showSpinner: false });
// Dashboard Components
//import store from "../store";

//  Admin Components
import mainView from "../views/mainview";

import login from "../views/auth/login";
import register from "../views/auth/register";
import forget from "../views/auth/forget";
import change from "../views/auth/change";

import term from "../views/term";
import policy from "../views/policy";

Vue.use(VueRouter);

const routes = [
    {
        // Admin Dashboard
        path: "/admin",
        name: "admin",
        // redirect: "/dashboard",
        component: mainView,
        children: [{
            path: "dashboard",
            name: "admin.dashboard",
            component: () =>
                import("../views/admin/dashboard"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "my-profile",
            name: "admin.profile",
            component: () =>
                import("../views/auth/profile.vue"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "buses",
            name: "bus",
            component: () =>
                import("../views/admin/buses"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bus/create",
            name: "buscreate",
            component: () =>
                import("../views/admin/buses/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bus/:id",
            name: "busedit",
            component: () =>
                import("../views/admin/buses/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },

        {
            path: "bustypes",
            name: "admin.bustype",
            component: () =>
                import("../views/admin/bustypes"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bustype/create",
            name: "admin.bustypecreate",
            component: () =>
                import("../views/admin/bustypes/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bustype/:id",
            name: "admin.bustypeedit",
            component: () =>
                import("../views/admin/bustypes/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },

        {
            path: "locations",
            name: "location",
            component: () =>
                import("../views/admin/locations"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "location/create",
            name: "locationcreate",
            component: () =>
                import("../views/admin/locations/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "location/:id",
            name: "locationedit",
            component: () =>
                import("../views/admin/locations/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "routes",
            name: "admin.route",
            component: () =>
                import("../views/admin/routes"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "route/create",
            name: "admin.routecreate",
            component: () =>
                import("../views/admin/routes/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "route/:id",
            name: "admin.routeedit",
            component: () =>
                import("../views/admin/routes/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "drivers",
            name: "admin.driver",
            component: () =>
                import("../views/admin/drivers"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "driver/create",
            name: "admin.drivercreate",
            component: () =>
                import("../views/admin/drivers/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "driver/:id",
            name: "admin.driveredit",
            component: () =>
                import("../views/admin/drivers/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "agents",
            name: "admin.agent",
            component: () =>
                import("../views/admin/agents"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "agent/create",
            name: "admin.agentcreate",
            component: () =>
                import("../views/admin/agents/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "users",
            name: "user",
            component: () =>
                import("../views/admin/users"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "user/create",
            name: "usercreate",
            component: () =>
                import("../views/admin/users/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "user/:id",
            name: "useredit",
            component: () =>
                import("../views/admin/users/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "buslayouts",
            name: "buslayout",
            component: () =>
                import("../views/admin/buslayout"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "buslayout/create",
            name: "buslayoutcreate",
            component: () =>
                import("../views/admin/buslayout/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "buslayout/:id",
            name: "buslayoutedit",
            component: () =>
                import("../views/admin/buslayout/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "help-and-support",
            name: "helpandsupport",
            component: () =>
                import("../views/admin/helpAndSupport"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "application-settings",
            name: "applicationsetting",
            component: () =>
                import("../views/admin/applicationSetting"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "trips/assign/list",
            name: "tripassignlist",
            component: () =>
                import("../views/trips/assign/list"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            }
        },
        {
            path: "trips/assign/create",
            name: "tripassigncreate",
            component: () =>
                import("../views/trips/assign/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "trips/assign/:id",
            name: "tripassignedit",
            component: () =>
                import("../views/trips/assign/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },

        {
            path: "timetable/create",
            name: "admin.timetablecreate",
            component: () =>
                import("../views/admin/timetables/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "timetables",
            name: "admin.timeTables",
            component: () =>
                import("../views/admin/timetables"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "timetable/:id",
            name: "admin.timetableedit",
            component: () =>
                import("../views/admin/timetables/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "offers",
            name: "offer",
            component: () =>
                import("../views/admin/offers"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "offer/create",
            name: "offercreate",
            component: () =>
                import("../views/admin/offers/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "offer/:id",
            name: "offeredit",
            component: () =>
                import("../views/admin/offers/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "passes",
            name: "pass",
            component: () =>
                import("../views/admin/passes"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "pass/create",
            name: "passcreate",
            component: () =>
                import("../views/admin/passes/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "pass/:id",
            name: "passedit",
            component: () =>
                import("../views/admin/passes/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "roles",
            name: "role",
            component: () =>
                import("../views/admin/roles"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "role/create",
            name: "rolecreate",
            component: () =>
                import("../views/admin/roles/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "role/:id",
            name: "roleedit",
            component: () =>
                import("../views/admin/roles/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "assign-role",
            name: "assignrole",
            component: () =>
                import("../views/admin/roles/assign/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bookings/:travel_status",
            name: "booking",
            component: () =>
                import("../views/admin/bookings"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "booking/:id",
            name: "bookingredit",
            component: () =>
                import("../views/admin/bookings/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "payments/:travel_status",
            name: "payment",
            component: () =>
                import("../views/admin/payments"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "referrals",
            name: "referral",
            component: () =>
                import("../views/referrals"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "referrals/:userId",
            name: "referralview",
            component: () =>
                import("../views/referrals/view"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "customers",
            name: "customer",
            component: () =>
                import("../views/customers"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "customer/:id",
            name: "customeredit",
            component: () =>
                import("../views/customers/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "customer-wallet-history/:userId/:walletId",
            name: "customerwallethistory",
            component: () =>
                import("../views/customers/wallet/history"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "customers/wallet-recharge",
            name: "customerwalletrecharge",
            component: () =>
                import("../views/customers/wallet/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "suggests",
            name: "suggest",
            component: () =>
                import("../views/admin/suggests"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "notifications/create",
            name: "notification-create",
            component: () =>
                import("../views/notifications/create"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "notifications",
            name: "notification-list",
            component: () =>
                import("../views/notifications"),
            meta: {
                requiresAuth: true,
                authorize: ["admin"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        ],
    },
    {
        // staff Dashboard
        path: "/staff",
        name: "staff",
        component: mainView,
        children: [{
            path: "dashboard",
            name: "staff.dashboard",
            component: () =>
                import("../views/staff/dashboard"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "my-profile",
            name: "staff.profile",
            component: () =>
                import("../views/auth/profile.vue"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "buses",
            name: "staff.bus",
            component: () =>
                import("../views/staff/buses"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bus/create",
            name: "staff.buscreate",
            component: () =>
                import("../views/admin/buses/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bus/:id",
            name: "staff.busedit",
            component: () =>
                import("../views/admin/buses/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "buslayouts",
            name: "staff.buslayout",
            component: () =>
                import("../views/admin/buslayout"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "buslayout/create",
            name: "staff.buslayoutcreate",
            component: () =>
                import("../views/admin/buslayout/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "buslayout/:id",
            name: "staff.buslayoutedit",
            component: () =>
                import("../views/admin/buslayout/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },

        {
            path: "bustypes",
            name: "staff.bustype",
            component: () =>
                import("../views/admin/bustypes"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bustype/create",
            name: "staff.bustypecreate",
            component: () =>
                import("../views/admin/bustypes/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bustype/:id",
            name: "staff.bustypeedit",
            component: () =>
                import("../views/admin/bustypes/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },

        {
            path: "locations",
            name: "staff.location",
            component: () =>
                import("../views/admin/locations"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "location/create",
            name: "staff.locationcreate",
            component: () =>
                import("../views/admin/locations/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "location/:id",
            name: "staff.locationedit",
            component: () =>
                import("../views/admin/locations/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "routes",
            name: "staff.route",
            component: () =>
                import("../views/admin/routes"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "route/create",
            name: "staff.routecreate",
            component: () =>
                import("../views/admin/routes/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "timetable/create",
            name: "staff.timetablecreate",
            component: () =>
                import("../views/admin/timetables/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "timetables",
            name: "staff.timeTables",
            component: () =>
                import("../views/admin/timetables"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "timetable/:id",
            name: "staff.timetableedit",
            component: () =>
                import("../views/admin/timetables/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "agents",
            name: "staff.agent",
            component: () =>
                import("../views/admin/agents"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "agent/create",
            name: "staff.agentcreate",
            component: () =>
                import("../views/admin/agents/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "drivers",
            name: "driver",
            component: () =>
                import("../views/admin/drivers"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "driver/create",
            name: "drivercreate",
            component: () =>
                import("../views/admin/drivers/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "driver/:id",
            name: "driveredit",
            component: () =>
                import("../views/admin/drivers/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "help-and-support",
            name: "helpandsupport",
            component: () =>
                import("../views/admin/helpAndSupport"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "trips/assign/list",
            name: "tripassignlist",
            component: () =>
                import("../views/trips/assign/list"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            }
        },
        {
            path: "trips/assign/create",
            name: "tripassigncreate",
            component: () =>
                import("../views/trips/assign/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "trips/assign/:id",
            name: "tripassignedit",
            component: () =>
                import("../views/trips/assign/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "bookings/:travel_status",
            name: "booking",
            component: () =>
                import("../views/admin/bookings"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "booking/:id",
            name: "bookingredit",
            component: () =>
                import("../views/admin/bookings/edit"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "payments/:travel_status",
            name: "payment",
            component: () =>
                import("../views/admin/payments"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "notifications",
            name: "notification-list",
            component: () =>
                import("../views/notifications"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "offers",
            name: "offer",
            component: () =>
                import("../views/admin/offers"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "offer/create",
            name: "offercreate",
            component: () =>
                import("../views/admin/offers/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "passes",
            name: "pass",
            component: () =>
                import("../views/admin/passes"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        {
            path: "pass/create",
            name: "passcreate",
            component: () =>
                import("../views/admin/passes/create"),
            meta: {
                requiresAuth: true,
                authorize: ["staff"],
                redirect: { name: "login" },
                forbiddenRedirect: "/403",
            },
        },
        ],
    },
    {
        path: "/403",
        name: "403",
        component: () =>
            import("../views/errors/403"),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/404",
        name: "404",
        component: () =>
            import("../views/errors/404"),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "*",
        // redirect: "/auth/error_404",
        component: {
            render(c) {
                return c("router-view");
            },
        },
        children: [{
            path: "/auth/login",
            name: "login",
            component: login,
        },
        {
            path: "/auth/register",
            name: "register",
            component: register,
        },
        {
            path: "/auth/forget-password",
            name: "forget",
            component: forget,
        },
        {
            path: "/auth/new-password/:resetToken",
            name: "change",
            component: change,
        },
        {
            path: "/terms",
            name: "term",
            component: term,
        },
        {
            path: "/cookies-&-policy",
            name: "policy",
            component: policy,
        },
        ],
    },
];

const router = new VueRouter({
    linkActiveClass: "active",
    mode: "hash",
    //  base: process.env.BASE_URL,
    routes,
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});

router.afterEach(() => {
    NProgress.done();
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     console.log("router isAuthenticated: ", store.getters.isAuthenticated);
//     if (store.getters.isAuthenticated) {
//       next();
//       return;
//     }
//     next("/auth/login");
//   } else {
//     next();
//   }
// });

router.beforeEach(async (to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = [
        "/auth/login",
        "/auth/forget-password",
        "/auth/register",
        "/terms",
        "/cookies-&-policy",
    ];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("user");
    //let loggedIn = await store.dispatch("auth/isLoggedIn");

    const { authorize, forbiddenRedirect } = to.meta;
    //console.log("router.meta", to.meta);

    console.log("authRequired", authorize, forbiddenRedirect);
    const role = localStorage.getItem("role");
    if (to.name == "change" && !loggedIn) {
        next();
    } else if (authRequired && !loggedIn) {
        return next("/auth/login");
    } else if (authorize && !authorize.includes(role)) {
        console.log("sadasdas ");
       return  next("/403");
    }
    // console.log("34234 ");

    //  else if (
    //   authorize &&
    //   authorize.length &&
    //   !authorize.includes(this.$store.auth.role)
    // ) {
    //   console.log("to.path", to.path, "authorize", authorize, forbiddenRedirect);
    //   router.push({ path: forbiddenRedirect });
    // }

    next();
});

export default router;