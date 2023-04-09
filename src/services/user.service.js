import baseURL from "../helpers/baseurl";
//import moment from "moment-timezone";

export const userService = {
  getAll,
  tranform,
  create,
  changeStatus,
  update,
  find,
  deleteUser,
};

async function find(id) {
  try {
    const response = await baseURL.get("auth/" + id);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function changeStatus(status, role, id) {
  try {
    const response = await baseURL.patch("auth/" + id + "/status", {
      status,
      role,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function getAll(Objparams) {
  try {
    //Objparams.role = "agent";
    const response = await baseURL.get("auth", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function create(Objparams) {
  try {
    const response = await baseURL.post("auth", Objparams);
    console.log("response ", response);
    return response.data;
    //return Objparams;
  } catch (e) {
    return e.response;
  }
}

async function update(id, Objparams) {
  try {
    const response = await baseURL.patch("auth/" + id, Objparams);
    return response.data;
  } catch (e) {
    return e.response;
  }
}

async function deleteUser(id) {
  try {
    const response = await baseURL.delete("auth/" + id);
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
      profile_picture: item.picture,
      firstname: item.firstname,
      lastname: item.lastname,
      email: item.email,
      phone: item.phone,
      city: item.city,
      role: item.role,
      address_1: item.address_1,
      address_2: item.address_2,
      pincode: item.pincode,
      status: item.is_active,
      last_login: item.last_login,
      createdAt: item.createdAt,
    });
  });
  return selectableItems;
}
