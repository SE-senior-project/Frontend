import apiClient from "./AxiosClient.js";
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
  update_external_data(month) {
    return apiClient.post("/External", {
      mm: month,
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
  add_material(name, price, id){
    return apiClient.post("/Add_Material", {
      material_name: name,
      material_price: price,
      project_material_total: 1,
      project_id: id,
    })
  },
  get_all_category(){
    return apiClient.get("/All_Category")
  },

  get_all_project(id, status){
    return apiClient.post("/All_Projects", {
      contractor_id: id,
      status: status
    })
  },
  
  get_all_selection_type(material_category){
    return apiClient.post("/All_Selection_Type", {
      material_category: material_category,
    })
  },

  get_all_selection_in_type(material_type){
    return apiClient.post("/All_Material_Selection_Type", {
      material_type: material_type,
    })
  },
  
  number_material(total, id){
    return apiClient.post("/Number_Material", {
      project_material_total: total,
      project_material_id: id
    })
  },

  get_all_total_material_selection(id){
    return apiClient.post("/Get_All_Total_Material_Selection", {
      project_id: id,
    })
  },

  total_material_selection(id){
    return apiClient.post("/Total_Material_Selection", {
      project_id: id,
    })
  },

  delete_material_selection(id){
    return apiClient.post("/Delete_Material_Selection", {
      project_material_id: id,
    })
  },

  active_status_project(status, id){
    return apiClient.post("/Active_Status_Project", {
      status: status,
      project_id: id
    })
  },
  
  add_project(project_name, customer_name, project_description, deadline, status, id){
    return apiClient.post("/Add_Project", {
      project_name: project_name,
      customer_name: customer_name,
      project_description: project_description,
      deadline: deadline,
      status: status,
      contractor_id: id,
    })
  },

  search_result(name){
    return apiClient.post("/Search_Result", {
      material_name: name
    })
  },
};
