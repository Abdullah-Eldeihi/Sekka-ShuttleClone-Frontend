import baseURL from "../helpers/baseurl";

export const timetableService = {
  getAll,
  create,
  update,
  deleteTimeTable,
  find,
  changeStatus,
};

async function changeStatus(status, id) {
  try {
    const response = await baseURL.patch("timetables/" + id + "/status", {
      status,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAll(Objparams) {
  try {
    const response = await baseURL.get("timetables", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function create(Objparams) {
  try {
    const response = await baseURL.post("timetables", Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("timetables/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function find(id) {
  try {
    const response = await baseURL.get("timetables/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteTimeTable(id) {
  try {
    const response = await baseURL.delete("timetables/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}
