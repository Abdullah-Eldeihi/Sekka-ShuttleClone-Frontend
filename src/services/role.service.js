import baseURL from "../helpers/baseurl";
import moment from "moment-timezone";

export const roleService = {
  getAll,
  create,
  update,
  deleteRole,
  tranform,
  find,
  load,
};

async function load() {
  try {
    const response = await baseURL.get("roles");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAll(Objparams) {
  try {
    const response = await baseURL.get("roles/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function create(Objparams) {
  try {
    const response = await baseURL.post("roles", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("roles/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function find(id) {
  try {
    const response = await baseURL.get("roles/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteRole(id) {
  try {
    const response = await baseURL.delete("roles/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

function tranform(rows) {
  const selectableItems = [];
  let i = 1;
  rows.forEach((item) => {
    selectableItems.push({
      id: i++,
      name: item.name,
      slug: item.slug,
      createdAt: moment.utc(item.createdAt).tz("Asia/Kolkata").format("LLL"),
    });
  });
  return selectableItems;
}
