import apiClient from "./AxiosClient.js";

export default {
  update_external_data(mm) {
    return apiClient.post("/External", {
      mm: mm,
    });
  },
  UnMarktoData(data) {
    return apiClient.post("/unmark_data", {
      id: data.id,
    });
  },
  MarktoData(data) {
    return apiClient.post("/mark_data", {
      userid: data.userid,
      Ingredients: data.Ingredients,
      title: data.title,
      recipe: data.recipe,
      image: data.image,
    });
  },
  Get_MarktoData(userid) {
    return apiClient.get("/get_mark_data/" + userid);
  },
  SearchFav(query, userid) {
    console.log("SearchFav");
    return apiClient.post("/mark_search", {
      query: query,
      userid: userid,
    });
  },
  SearchName(query) {
    console.log("searchname");
    return apiClient.post("/title_name", {
      query: query,
    });
  },
  SearchIngredient(query) {
    console.log("searchIngredient");
    return apiClient.post("/ingredients", {
      query: query,
    });
  },
  Login(data) {
    console.log(data);
    console.log(data.username);
    console.log(data.password);
    return apiClient.post("/Login", {
      username: data.username,
      password: data.password,
    });
  },
};
