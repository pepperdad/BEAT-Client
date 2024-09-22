import React, { useRef } from "react";
import * as S from "./CardCarousel.styled";
import { Spacing } from "@components/commons";
import AdminButton from "@admin/compontets/commons/adminButton/AdminButton";
import LinkButton from "@admin/compontets/commons/linkButton/LinkButton";

const CardCarousel = ({ index, carouselImg, redirectUrl, deleteCarousel, handleLinkModal }) => {
  const ref = useRef<HTMLInputElement>(null);

  const fileHandler = () => {
    if (ref.current) {
      ref.current!.click();
    }
  };
  return (
    <S.CardCarouselWrapper>
      <S.SwitchIcon />
      <S.CarouselImg>
        <S.DeleteIcon
          onClick={() => {
            deleteCarousel(index);
          }}
        />
        {carouselImg ? (
          <img src={carouselImg} alt="carousel-img" />
        ) : (
          <S.EmptyImg>
            <S.ImgIcon />
          </S.EmptyImg>
        )}
      </S.CarouselImg>
      <AdminButton variant="line" onClick={fileHandler}>
        <input
          type="file"
          ref={ref}
          accept="image/png, image/jpg, image/jpeg, image/svg"
          style={{ display: "none" }}
        />
        {carouselImg ? "이미지 변경" : "이미지 등록"}
      </AdminButton>
      <Spacing marginBottom="0.8" />
      <LinkButton
        onClick={() => {
          handleLinkModal(index);
        }}
      >
        {redirectUrl}
      </LinkButton>
      <Spacing marginBottom="4.8" />
    </S.CardCarouselWrapper>
  );
};

export default CardCarousel;
