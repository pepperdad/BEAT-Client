import styled from "styled-components";

export const TicketHolderListWrpper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;
`;

export const TitleSticky = styled.section`
  position: sticky;
  top: 5.6rem;

  background-color: ${({ theme }) => theme.colors.gray_900};
`;

export const ManageCardList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 10.4rem;
`;

export const ManageCardContainer = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const FooterButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  min-height: 10.4rem;
  padding-top: 2.4rem;

  background-color: ${({ theme }) => theme.colors.gray_900};
`;
