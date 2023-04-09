import baseURL from "../helpers/baseurl";
//import moment from "moment-timezone";

export const dashboardService = {
  loadCountData,
};

async function loadCountData() {
  try {
    const response = await baseURL.get("dashboard/count");
    return response.data;
  } catch (e) {
    return e.response;
  }
}
