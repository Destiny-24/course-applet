import wxRequest from "./../request/wxrequest.js";
import API from "./../request/api.js";

export default {
  index(params = {}) {
    return wxRequest.get(API.courseIndex, params);
  },
  item(id) {
    return wxRequest.get(API.courseItem(id));
  },
  category(params = {}) {
    return wxRequest.get(API.category, params);
  },
  search(params = {}) {
    return wxRequest.get(API.courseSearch, params);
  }
};