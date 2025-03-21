import * as S from "./PeopleCard.styled";

interface PeopleCardProps {
  photo: string;
  role: string;
  name: string;
}

const PeopleCard = ({ photo, role, name }: PeopleCardProps) => {
  return (
    <S.PeopleCardContainer>
      {photo && <S.PeopleCardPhoto src={photo} />}
      <S.PeopleCardTextBox>
        <S.PeopleCardRole>{role}</S.PeopleCardRole>
        <S.PeopleCardName>{name}</S.PeopleCardName>
      </S.PeopleCardTextBox>
    </S.PeopleCardContainer>
  );
};

export default PeopleCard;
