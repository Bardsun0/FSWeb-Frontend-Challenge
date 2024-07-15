import axios from "axios";

const api = axios.create({
  baseURL: "https://66940e4fc6be000fa07e05b3.mockapi.io/api/v1",
});

export const getPersonalData = async () => {
  const response = await api.get("/personal-data");
  return response.data[0];
};
