import apiClient from "../services/AxiosClient";
import GStore from "@/store";
export default {
  async login(user) {
    const response = await apiClient.post("/Login", {
      email: user.email,
      password: user.password,
    });
    if (response.data.check == false) {
      GStore.currentUser_fail = response.data.check;
      return;
    }
    localStorage.setItem("token", response.data[0].token);
    localStorage.setItem("user", JSON.stringify(response.data[0].user));
    GStore.currentUser = response.data[0].user;
    return await Promise.resolve(response.data);
  },
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
};
