import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=";

export default {
  getUsers: function (size) {
    return axios.get(BASEURL + size);
  },
};
