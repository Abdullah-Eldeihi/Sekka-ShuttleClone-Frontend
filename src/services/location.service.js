import baseURL from "../helpers/baseurl";

export const locationService = {
  getAll,
  tranform,
  create,
  search,
  update,
  deleteLocation,
  find,
  markers,
};

async function find(id) {
  try {
    const response = await baseURL.get("locations/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAll(Objparams) {
  try {
    const response = await baseURL.get("locations", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function create(Objparams) {
  try {
    const response = await baseURL.post("locations", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("locations/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteLocation(id) {
  try {
    const response = await baseURL.delete("locations/" + id);
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
      title: item.title,
      type: item.type,
      address: item.location_address,
      latitude: item.location_lat,
      longitude: item.location_lng,
      status: item.status,
      createdAt: item.createdAt,
    });
  });
  return selectableItems;
}

async function markers() {
  try {
    const response = await baseURL.get("locations/markers");
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function search(Objparams) {
  try {
    //locations/search
    const response = await baseURL.get("locations/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}
