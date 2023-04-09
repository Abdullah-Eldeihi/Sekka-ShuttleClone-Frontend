import { authService } from "../../services";
import router from "@/router";
import Vue from "vue";
// import apiAxios from "../../utils/apiAxios";

const user = JSON.parse(localStorage.getItem("user"));
const role = localStorage.getItem("role");
const token = localStorage.getItem("token");
const refreshToken = localStorage.getItem("refreshToken");
const expiresIn = localStorage.getItem("expiresIn");
const tokenType = localStorage.getItem("tokenType");
// const cancelToken = localStorage.getItem("cancelToken");

const initialState = user
  ? {
      authStatus: "",
      status: { loggedIn: true },
      user,
      role,
      token,
      refreshToken,
      expiresIn,
      tokenType,
    }
  : {
      authStatus: "",
      status: {},
      user: {},
      role: null,
      token: null,
      refreshToken: null,
      expiresIn: null,
      tokenType: null,
    };

export const auth = {
  namespaced: true,
  state: initialState,
  getters: {
    authStatus: (state) => state.authStatus,
    role: (state) => state.role,
    token: (state) => state.token,
    tokenType: (state) => state.tokenType,
    isLoggedIn: (getters) => {
      // quick check of the state
      return getters.authStatus === "success";
    },
  },
  actions: {
    login({ dispatch, commit }, { email, password }) {
      // commit("loginRequest", { email });
      authService.login(email, password).then(
        (auth) => {
          if (auth.status == 401) {
            Vue.$toast.open({
              message: auth.message,
              type: "error",
              position: "top",
              duration: 3000,
            });
          } else {
            Vue.$toast.open({
              message: "sigin...",
              type: "success",
              position: "bottom-right",
              duration: 3000,
            });
            commit("loginSuccess", auth);
            // console.log("auth", auth);
            router.push(`/${auth.admin.role}/dashboard`);
          }
        },
        (error) => {
          commit("loginFailure", error);
          dispatch("alert/error", error, { root: true });
        }
      );
    },
    logout({ commit }) {
      authService.logout();
      commit("logout");
    },
    updateRefreshToken({ commit }, authData) {
      if (authData) {
        commit("loginSuccess", authData);
      } else {
        commit("loginFailure");
      }
    },
  },
  mutations: {
    loginSuccess(state, authdata) {
      state.authStatus = "success";
      state.status = { loggedIn: true };
      state.user = authdata.admin;
      state.role = authdata.admin.role;
      state.token = authdata.token.accessToken;
      state.refreshToken = authdata.token.refreshToken;
      state.expiresIn = authdata.token.expiresIn;
      state.tokenType = authdata.token.tokenType;
    },
    setUser(state, authData) {
      //  console.log("authData", authData);
      state.user = authData.admin;
      state.role = authData.admin.role;
    },
    loginFailure(state) {
      state.authStatus = "";
      state.status = {};
      state.user = {};
      state.role = null;
      state.token = null;
      state.refreshToken = null;
      state.expiresIn = null;
      state.tokenType = null;
    },
    logout(state) {
      state.authStatus = "";
      state.status = {};
      state.user = {};
      state.role = null;
      state.token = null;
      state.refreshToken = null;
      state.expiresIn = null;
      state.tokenType = null;
    },
  },
};
