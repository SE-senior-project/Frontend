import apiClient from "./AxiosClient.js";

export default {
  update_external_data(mm) {
    return apiClient.post("/External", {
      mm: mm,
    });
  },
  get_all_waiting_user(){
    return apiClient.get("/New_User");
  },
  get_all_disable_contractor(){
    return apiClient.get("/Disable_Contractor");
  },
  get_all_active_contractor(){
    return apiClient.get("/Active_Contractor");
  },
  register(user){
    return apiClient.post("/Register",{
      first_name: user.firstname,
      last_name: user.lastname,
      email: user.email,
      password: user.password
    })
  }

};
