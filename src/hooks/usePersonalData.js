import { useQuery } from "@tanstack/react-query";
import { getPersonalData } from "../api/api";

export const usePersonalData = () => {
  return useQuery({
    queryKey: ["personalData"],
    queryFn: getPersonalData,
  });
};
