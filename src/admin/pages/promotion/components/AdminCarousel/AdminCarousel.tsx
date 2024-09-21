import * as S from "./AdminCarousel.styled";
import CardCarousel from "../cardCarousel/CardCarousel";
import { useEffect, useState } from "react";

const promotionListTest = [
  {
    isExternal: false,
    performanceId: 56,
    promotionId: 1,
    promotionPhoto:
      "https://beat-dev-bucket.s3.ap-northeast-2.amazonaws.com/poster/8a8efe39-83bf-47b6-b40d-256164928ce7-poster-1723813907142",
    redirectUrl: null,
  },
  {
    isExternal: true,
    performanceId: 57,
    promotionId: 2,
    promotionPhoto:
      "https://avatars.githubusercontent.com/u/58854041?s=400&u=fdb4a8dbf5b7ec8d7f327954a4ca97e064b560ee&v=4",
    redirectUrl: "https://github.com/pepperdad",
  },
  {
    isExternal: true,
    performanceId: 58,
    promotionId: 3,
    promotionPhoto: "https://avatars.githubusercontent.com/u/66528589?v=4",
    redirectUrl: "https://github.com/sinji2102",
  },
  {
    isExternal: true,
    performanceId: 58,
    promotionId: 4,
    promotionPhoto: "https://avatars.githubusercontent.com/u/66528589?v=4",
    redirectUrl: "https://github.com/sinji2102",
  },
  {
    isExternal: true,
    performanceId: 58,
    promotionId: 5,
    promotionPhoto: "https://avatars.githubusercontent.com/u/66528589?v=4",
    redirectUrl: "https://github.com/sinji2102",
  },
];

interface PromotionProps {
  promotionId?: number;
  promotionPhoto?: string;
  performanceId?: number;
  isExternal?: boolean;
  redirectUrl?: string;
}

const AdminCarousel = () => {
  const [carouselList, setCarouselList] = useState<PromotionProps[]>();

  useEffect(() => {
    setCarouselList(promotionListTest);
  }, []);

  const addCarousel = () => {
    const newCarousel = {
      promotionId: carouselList.length,
      promotionPhoto: null,
      performanceId: null,
      isExternal: false,
      redirectUrl: null,
    };

    const updatedCarouselList = [...carouselList, newCarousel];

    setCarouselList(updatedCarouselList);
  };

  const deleteCarousel = (idx: number) => {
    const updatedCarouselList = carouselList.filter((_, index) => index !== idx);
    setCarouselList(updatedCarouselList);
  };

  return (
    <S.AdminCarouselWrapper>
      <S.Notification>
        *캐러셀은 왼쪽부터 순서대로 노출되며, 최대 7개 등록 가능합니다.
      </S.Notification>
      <S.CarouselContainer>
        {carouselList?.map((item, idx) => {
          return (
            <CardCarousel
              index={idx}
              carouselImg={item.promotionPhoto}
              redirectUrl={item.redirectUrl}
              deleteCarousel={deleteCarousel}
            />
          );
        })}
        {carouselList?.length <= 6 && (
          <S.AddCarouselContainer
            onClick={() => {
              addCarousel();
            }}
          >
            <S.AddIcon />
            <S.AddText>추가하기</S.AddText>
          </S.AddCarouselContainer>
        )}
      </S.CarouselContainer>
    </S.AdminCarouselWrapper>
  );
};

export default AdminCarousel;
