const ENV: ObjectKey = import.meta.env.VITE_APP_ENV || "dev";

const BASE_URL = {
  dev: "http://localhost:8080/api",
  test: "",
  prod: "",
};

type ObjectKey = keyof typeof BASE_URL;

export const PATH = {
  getLists: `${BASE_URL[ENV]}/lists`,
  getTasks: `${BASE_URL[ENV]}/tasks`,
  updateTask: `${BASE_URL[ENV]}/tasks/update`,
  deleteTask: `${BASE_URL[ENV]}/tasks/delete`,
  createTask: `${BASE_URL[ENV]}/tasks`,

};


