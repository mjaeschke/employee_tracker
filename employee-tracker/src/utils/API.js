import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20&nat=us";

export default {
  getUsers: function () {
    return axios.get(BASEURL);
  },
};
