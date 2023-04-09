import baseURL from "../helpers/baseurl";

export const resourceService = {
  //   getAll,
  //   create,
  //   update,
  //   deleteOffer,
  //   tranform,
  //   find,
  load,
};

async function load(role) {
  try {
    const response = await baseURL.get("resources/"+role);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
