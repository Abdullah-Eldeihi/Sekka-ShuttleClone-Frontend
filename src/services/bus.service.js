import baseURL from "../helpers/baseurl";
import moment from "moment-timezone";

export const busService = {
  getAll,
  create,
  update,
  deleteBus,
  tranform,
  find,
  load,
  loadBusByRoute,
};

async function loadBusByRoute() {
  try {
    const response = await baseURL.get("buses/route");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function load() {
  try {
    const response = await baseURL.get("buses");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAll(Objparams) {
  try {
    const response = await baseURL.get("buses/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function create(Objparams) {
  try {
    const response = await baseURL.post("buses", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("buses/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function find(id) {
  try {
    const response = await baseURL.get("buses/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteBus(id) {
  try {
    const response = await baseURL.delete("buses/" + id);
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
      reg_no: item.reg_no,
      chassis_no: item.chassis_no,
      model_no: item.model_no,
      brand: item.brand,
      type: item.type ? item.type : "",
      created_by: item.created_by ? item.created_by : "",
      max_seats: item.max_seats,
      picture: item.picture,
      amenities: item.amenities,
      status: item.status == true ? "Active" : "Inactive",
      certificate_registration: item.certificate_registration,
      certificate_pollution: item.certificate_pollution,
      certificate_insurance: item.certificate_insurance,
      certificate_fitness: item.certificate_fitness,
      certificate_permit: item.certificate_permit,
      createdAt: moment.utc(item.createdAt).tz("Asia/Kolkata").format("LLL"),
    });
  });
  return selectableItems;
}
