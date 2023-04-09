import Vue from "vue";
import axios from "axios";
import store from "../store";
let axiosInstance = null;

axiosInstance = axios.create({
    mode: "no-cors",
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // 'Access-Control-Allow-Origin': '*',
    },
});

//console.log("sdsd", axiosInstance);

axiosInstance.interceptors.request.use(
    (config) => {
        const token = store.getters["auth/token"];
        const tokenType = store.getters["auth/tokenType"];
        if (token && tokenType) {
            config.headers.Authorization = `${tokenType} ${token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async function(err) {
        const { config: originalRequest, response } = err;
        if (response && response.status === 401 && !originalRequest._retry) {
            try {
                originalRequest._retry = true;
                let refreshToken = localStorage.getItem("refreshToken");
                let email = JSON.parse(localStorage.getItem("user")).email;
                console.log("email", email, "refreshToken", refreshToken);
                const res = await axiosInstance.post("auth/refresh-token", {
                    email,
                    refreshToken,
                });
                let token = res.data.token.accessToken;
                let newrefreshToken = res.data.token.refreshToken;
                let expiresIn = res.data.token.expiresIn;
                let tokenType = res.data.token.tokenType;
                let user = res.data.admin;
                localStorage.setItem("token", token);
                localStorage.setItem("refreshToken", newrefreshToken);
                localStorage.setItem("expiresIn", expiresIn);
                localStorage.setItem("tokenType", tokenType);
                localStorage.setItem("user", JSON.stringify(user));
                response.config.headers["Authorization"] = `${tokenType} ${token}`;
                store.dispatch("auth/updateRefreshToken", res.data);
                return axiosInstance(originalRequest);
            } catch (e) {
                //   console.log(" 12312sds", e.response);
                if (
                    e === "user has not logged in" ||
                    (e.response && e.response.status === 401)
                ) {
                    store.dispatch("auth/logout", true);
                }
            }
        }
        return Promise.reject(err);
    }
);

// before any API call make sure that the access token is good
// axiosInstance.interceptors.request.use(async function () {
//   // console.log("dataDev", store.auth);
//   const loggedIn = localStorage.getItem("user");
//   if (loggedIn) {
//     await store.dispatch("auth/isLoggedIn");
//   }
// });

Vue.prototype.$http = axiosInstance;

export default Vue.prototype.$http;