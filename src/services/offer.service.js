import baseURL from "../helpers/baseurl";
import moment from "moment-timezone";

export const offerService = {
  getAll,
  create,
  update,
  deleteOffer,
  tranform,
  find,
  load,
};

async function load() {
  try {
    const response = await baseURL.get("offers");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAll(Objparams) {
  try {
    const response = await baseURL.get("offers/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function create(Objparams) {
  try {
    const response = await baseURL.post("offers", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("offers/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function find(id) {
  try {
    const response = await baseURL.get("offers/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteOffer(id) {
  try {
    const response = await baseURL.delete("offers/" + id);
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
      start_date: item.start_date,
      end_date: item.end_date,
      code: item.code,
      discount: item.discount,
      type: item.type ? item.type : "",
      terms: item.terms,
      picture: item.picture,
      status: item.status == true ? "Active" : "Inactive",
      createdAt: moment.utc(item.createdAt).tz("Asia/Kolkata").format("LLL"),
    });
  });
  return selectableItems;
}
