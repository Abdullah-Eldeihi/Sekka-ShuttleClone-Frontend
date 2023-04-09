import baseURL from "../helpers/baseurl";

export const notificationService = {
  create,
  deleteNotification,
  getAll,
  tranform
};


async function getAll(Objparams) {
  try {
    const response = await baseURL.get("notifications/search", {
      params: Objparams,
    });
    return response.data;
  } catch (e) {
    return e.response;
  }
}


async function create(Objparams) {
    try {
      const response = await baseURL.post("notifications", Objparams);
      return response.data;
    } catch (e) {
      return e.response;
    }
  }
  

  async function deleteNotification(id) {
    try {
      const response = await baseURL.delete("notifications/" + id);
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
        to: item.to,
        user_type: item.user_type,
        days: item.days,
        time: item.time,
        schedule: item.schedule,
        notification_title:item.notification.title,
        notification_body:item.notification.body,
        notification_picture:item.notification.picture,
        createdAt: item.createdAt,
    
      });
    });
    return selectableItems;
  }