import baseURL from "../helpers/baseurl";
import moment from "moment-timezone";

export const passService = {
  getAll,
  create,
  update,
  deletePass,
  tranform,
  find,
  load,
};

async function load() {
  try {
    const response = await baseURL.get("passes");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAll(Objparams) {
  try {
    const response = await baseURL.get("passes/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function create(Objparams) {
  try {
    const response = await baseURL.post("passes", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("passes/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function find(id) {
  try {
    const response = await baseURL.get("passes/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deletePass(id) {
  try {
    const response = await baseURL.delete("passes/" + id);
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
      no_of_rides: item.no_of_rides,
      no_of_valid_days: item.no_of_valid_days,
      price_per_km: item.price_per_km,
      discount: item.discount,
      terms: item.terms,
      description: item.description,
      status: item.status == true ? "Active" : "Inactive",
      createdAt: moment.utc(item.createdAt).tz("Asia/Kolkata").format("LLL"),
    });
  });
  return selectableItems;
}
