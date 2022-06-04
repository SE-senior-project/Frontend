import apiClient from "../services/AxiosClient";
export default {
  async login(user) {
    const response = await apiClient
      .post("/Login", {
        email: user.email,
        password: user.password
      });
    localStorage.setItem("token", response.data[0].token);
    localStorage.setItem("user", JSON.stringify(response.data[0].user));
    return await Promise.resolve(response.data);
  },
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  register(user) {
    return apiClient.post("/register", {
      username: user.username,
      password: user.password,
    });
  },
};