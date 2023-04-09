import baseURL from "../helpers/baseurl";

export const walletService = {
  create
};



async function create(Objparams) {
    try {
      const response = await baseURL.post("wallets", Objparams);
      return response.data;
    } catch (e) {
      return e.response;
    }
  }
  