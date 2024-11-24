import React from "react";
import * as S from "./SearchBar.styled";

interface SearchBarProps {
  handleFilter: () => void;
}

const SearchBar = ({ handleFilter }: SearchBarProps) => {
  return (
    <S.SearchBarWrapper>
      <S.SearchBar type="text" placeholder="예매자를 검색해보세요."></S.SearchBar>
      {/* TODO: 상태 DEFAULT일 때만 필터 버튼 노출 */}
      <S.FilterBtn onClick={handleFilter} />
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
