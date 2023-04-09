import baseURL from "../helpers/baseurl";

export const helperService = {
  getAll,
  deleteHelper,
  update
  // tranform,
};

async function getAll(Objparams) {
  try {
    const response = await baseURL.get("helpers/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;

  }
}


async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("helpers/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteHelper(id) {
  try {
    const response = await baseURL.delete("helpers/" + id);
    return response.data;
  } catch (e) {
    return e.response;

  }
}
