import baseURL from "../helpers/baseurl";
//import moment from "moment-timezone";

export const assignService = {

    create,
    getAll,
    transform,
    deleteAssign,
    update,
    find
}


async function find(id) {
    try {
      const response = await baseURL.get("booking-assigns/" + id);
      return response.data;
    } catch (e) {
      return e.response;
    }
  }


async function create(Objparams) {
    try {
        const response = await baseURL.post("booking-assigns", Objparams);
        return response.data;
    } catch (e) {
      return e.response;
    }
}

async function update(id, Objparams) {
    try {
      const response = await baseURL.patch("booking-assigns/" + id, Objparams);
      return response.data;
    } catch (e) {
      return e.response;
    }
  }
  

async function getAll(Objparams) {
    try {
        const response = await baseURL.get("booking-assigns/search", {
            params: Objparams,
        });
        return response.data;
    } catch (e) {
      return e.response;
    }
}


async function deleteAssign(id) {
    try {
        const response = await baseURL.delete("booking-assigns/" + id);
        return response.data;
    } catch (e) {
      return e.response;
    }
}


function transform(rows) {
    const selectableItems = [];
    let i = 1;
    rows.forEach((item) => {
        selectableItems.push({
            id: i++,
            vendor_name: item.admin_name,
            route_name: item.route_name,
            driver_name: item.driver_name,
            date_time: item.date_time,
            assistantId: item.assistantId
        });
    });
    return selectableItems;
}