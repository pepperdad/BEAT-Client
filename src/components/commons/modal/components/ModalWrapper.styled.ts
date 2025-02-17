import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: rgb(15 15 15 / 70%);
`;

export const ModalContainer = styled.div`
  z-index: 30;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 31.1rem;
  padding: 3.2rem 1.6rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.gray_800};
  border-radius: 6px;
`;

export const ModalTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
`;

export const ModalTitle = styled.span`
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.white};
  white-space: pre-line;
  text-align: center;
`;

//white-space : pre-line 을 사용하면 \n 을 인식가능.
export const ModalSubTitle = styled.span`
  ${({ theme }) => theme.fonts["body2-normal-medi"]};
  color: ${({ theme }) => theme.colors.gray_300};
  white-space: pre-line;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: space-between;
`;
