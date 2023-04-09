import baseURL from "../helpers/baseurl";

export const settingService = {
  get,
  find,
  update,
};

async function get() {
  try {
    const response = await baseURL.get("settings/");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function find(type) {
  try {
    const response = await baseURL.get("settings/" + type);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("settings/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
