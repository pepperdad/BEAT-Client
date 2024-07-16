import { useQuery } from "@tanstack/react-query";
import { getAllScheduleList } from "./api";

const QUERY_KEY = {
  LIST: "list",
};

// 2. 쿼리 작성
export const useGetAllScheduleList = () => {
  return useQuery({
    queryKey: [QUERY_KEY.LIST],
    queryFn: () => getAllScheduleList(), // API 요청 함수
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  });
};