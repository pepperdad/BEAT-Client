import { useEffect, useState } from "react";
import * as S from "./Main.styled";

import Loading from "@components/commons/loading/Loading";

import { useGetAllScheduleList } from "@apis/domains/home/queries";
import {
  Carousel,
  Chips,
  Floating,
  Footer,
  MainNavigation,
  Performance,
} from "@pages/main/components";
import { navigateAtom } from "@stores";
import { useAtom } from "jotai";

const Main = () => {
  const { data, isLoading } = useGetAllScheduleList();

  const [genre, setGenre] = useState("ALL");
  const [navigateUrl, setNavigateUrl] = useAtom(navigateAtom);

  const handleGenre = (value: string) => {
    setGenre(value);
  };

  const onClickHi = async () => {
    const res = await fetch("/api/hi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("testres is: ", res.json());

    if (res.ok) {
      console.log("testres successful");
    } else {
      console.error("testres failed");
    }
  };

  const onClickHello = async () => {
    const res = await fetch("/api/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("testres is: ", res.json());

    if (res.ok) {
      console.log("testres successful");
    } else {
      console.error("testres failed");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div
        className="deploy-loading"
        style={{
          width: "100vw", // 100% 너비
          height: "100vh", // 100% 높이
          zIndex: 1000, // z-index 값
          position: "fixed", // 화면에 고정
          top: 0, // 상단 고정
          left: 0, // 좌측 고정
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 반투명 배경
          display: "flex", // 플렉스 박스 사용
          justifyContent: "center", // 가로 중앙 정렬
          alignItems: "center", // 세로 중앙 정렬
          color: "white", // 텍스트 색상
          fontSize: "24px", // 텍스트 크기
        }}
      />
      <S.MainWrapper>
        {/* <button style={{ color: "white" }} onClick={onClickHi}>
            하이 테스트
          </button>
          <button style={{ color: "white" }} onClick={onClickHello}>
            헬로 테스트
          </button> */}
        <MainNavigation />
        <Carousel promotionList={data?.promotionList ?? []} />
        <Chips handleGenre={handleGenre} />
        <Floating />
        <Performance genre={genre} performanceList={data?.performanceList ?? []} />
        <Footer />
      </S.MainWrapper>
    </>
  );
};

export default Main;
