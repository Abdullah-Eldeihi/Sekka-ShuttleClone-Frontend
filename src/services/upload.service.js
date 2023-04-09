import baseURL from "../helpers/baseurl";
//import moment from "moment-timezone";

export const uploadService = {
    store,
    remove
}

async function store(Objparams) {
    try {
        const response = await baseURL.post("uploads/store", Objparams);
        console.log("response ", response);
        return response.data;
        //return Objparams;
    } catch (e) {
        return e.response.data;
    }
}

async function remove(Objparams) {
    try {
        const response = await baseURL.delete("uploads/delete", Objparams);
        return response.data;
    } catch (e) {
        return e.response.data;
    }
}