import baseURL from "../helpers/baseurl";
import moment from "moment-timezone";

export const buslayoutService = {
  getAll,
  create,
  update,
  deleteBustype,
  tranform,
  find,
  load,
};

async function load() {
  try {
    const response = await baseURL.get("buslayouts");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
async function getAll(Objparams) {
  try {
    const response = await baseURL.get("buslayouts/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function create(Objparams) {
  try {
    const response = await baseURL.post("buslayouts", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("buslayouts/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function find(id) {
  try {
    const response = await baseURL.get("buslayouts/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteBustype(id) {
  try {
    const response = await baseURL.delete("buslayouts/" + id);
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
      status: item.status == true ? "Active" : "Inactive",
      createdAt: moment.utc(item.createdAt).tz("Asia/Kolkata").format("LLL"),
    });
  });
  return selectableItems;
}
