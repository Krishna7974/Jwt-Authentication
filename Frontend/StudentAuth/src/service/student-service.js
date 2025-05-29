import { myAxios } from "./helper";

// const url = "/api/student";

export const register = (student) => {
  return myAxios.post("/register", student).then((response) => response.data);
};

export const login = (student) => {
  return myAxios.post("/login2", student).then((response) => response.data);
};

export const getStudents = (token) => {
  return myAxios
    .get("/getAll", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};
