import baseURL from "../helpers/baseurl";

export const cityService = {
  load,
};

async function load() {
  try {
    const response = await baseURL.get("cities");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
