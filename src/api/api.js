import axios from "axios";

const api = axios.create({
  baseURL: "https://66940e4fc6be000fa07e05b3.mockapi.io/api/v1",
});

export const getPersonalData = () => {
  return api
    .get("/personal-data")
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Failed to fetch personal data");
    });
};
