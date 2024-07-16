import { get, post } from "@apis/index";
import { components } from "@typings/api/schema";
import { ApiResponseType } from "@typings/commonType";
import { AxiosResponse } from "axios";

// 비회원 예매 API
export interface postGuestReq {
  scheduleId: number;
  purchaseTicketCount: number;
  scheduleNumber: string;
  bookerName: string;
  bookerPhoneNumber: string;
  birthDate: string;
  password: string;
  totalPaymentAmount: number;
  isPaymentCompleted: boolean;
}

type GuestBookingResponse = components["schemas"]["GuestBookingResponse"];

// 1. API 요청 함수 작성 및 타입 추가
export const postGuestBook = async (
  formData: postGuestReq
): Promise<GuestBookingResponse | null> => {
  try {
    const response: AxiosResponse<ApiResponseType<GuestBookingResponse>> = await post(
      "/bookings/guest",
      formData
    );

    return response.data.data;
  } catch (error) {
    console.error("error", error);

    return null;
  }
};

// 비회원 예매 조회 API

export interface postGuestBookingReq {
  bookerName: string;
  birthDate: string;
  bookerPhoneNumber: string;
  password: string;
}

type GuestBookingRetrieveRequest = components["schemas"]["GuestBookingRetrieveRequest"];

export const postGuestBookingList = async (
  formData: postGuestBookingReq
): Promise<GuestBookingRetrieveRequest | null> => {
  try {
    const response: AxiosResponse<ApiResponseType<GuestBookingResponse>> = await post(
      "/bookings/guest/retrieve",
      formData
    );

    return response.data.data;
  } catch (error) {
    console.error("error", error);

    return null;
  }
};
