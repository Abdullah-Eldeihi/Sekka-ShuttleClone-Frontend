import baseURL from "../helpers/baseurl";
//import { AbilityBuilder } from "@casl/ability";

export const authService = {
  getAll,
  login,
  logout,
  register,
  sendPasswordRest,
  resetPassword,
  getAgents,
  updateProfile,
};

async function getAll(Objparams) {
  try {
    const response = await baseURL.get("users", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function updateProfile(id, Objparams) {
  try {
    const response = await baseURL.patch("users/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAgents(Objparams) {
  try {
    const response = await baseURL.get("agents", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function login(email, password) {
  try {
    let response = await baseURL.post("auth/login", { email, password });
    let token = response.data.token.accessToken;
    let refreshToken = response.data.token.refreshToken;
    let expiresIn = response.data.token.expiresIn;
    let tokenType = response.data.token.tokenType;
    let user = response.data.admin;
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("expiresIn", expiresIn);
    localStorage.setItem("tokenType", tokenType);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("role", user.role);
    //updateAbility(user);
    return response.data;
  } catch (e) {
    if (e.response.status === 401) {
      return e.response.data;
    }
  }
}

// function updateAbility(user) {
//   const { can, rules } = new AbilityBuilder();

//   if (user.role === "admin") {
//     can("manage", "all");
//   } else {
//     can("read", "all");
//   }

//   this.$ability.update(rules);
// }

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("expiresIn");
  localStorage.removeItem("tokenType");
  localStorage.removeItem("user");
  localStorage.removeItem("role");
}

async function register(user) {
  try {
    const register = await baseURL.post("auth/register", user);
    return register;
  } catch (e) {
    return e.response;
  }
}

async function sendPasswordRest(email) {
  try {
    const response = await baseURL.post("auth/send-password-reset", {
      email,
    });

    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function resetPassword(email, password, resetToken) {
  try {
    const response = await baseURL.post("auth/reset-password", {
      email,
      password,
      resetToken,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
