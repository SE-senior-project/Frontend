import apiClient from "./AxiosClient.js";
import GStore from '@/store'
export default {
  register(user) {
    return apiClient.post("/Register", {
      first_name: user.firstname,
      last_name: user.lastname,
      email: user.email,
      password: user.password
    })
  },
  ///////////// Admin /////////////////
  update_external_data(mm) {
    return apiClient.post("/External", {
      mm: mm,
    });
  },
  get_all_waiting_user() {
    return apiClient.get("/New_User");
  },
  get_all_active_contractor() {
    return apiClient.get("/Active_Contractor");
  },
  get_all_disable_contractor() {
    return apiClient.get("/Disable_Contractor");
  },
  disable_contractor(id) {
    return apiClient.post("/Disable", {
      contractor_id: id,
    })
  },
  active_contractor(id) {
    return apiClient.post("/Active", {
      contractor_id: id,
    })
  },approve_user(id){
    return apiClient.post("/Approve", {
      user_id: id,
    })
  }
  ,unapprove_user(id){
    return apiClient.post("/Unapprove", {
      user_id: id,
    })
  },
  ///////////// PM /////////////////
  get_all_materials() {
    return apiClient.get("/All_Materials");
  },

};
