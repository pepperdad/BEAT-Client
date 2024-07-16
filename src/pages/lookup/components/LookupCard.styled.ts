import styled from "styled-components";
import { IconArrowRight } from "@assets/svgs";

export const LookupCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 21.4rem;
  height: 19.8rem;
  padding: 1.4rem 2rem;

  background-color: ${({ theme }) => theme.colors.gray_800};
  border-radius: 0.6rem;
`;

export const LookupTitleWrapper = styled.button`
  display: flex;
  width: 17.5rem;
`;

export const LookupTitle = styled.div`
  display: block;
  flex: 1;
  width: 17.3rem;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.gray_0};
  ${({ theme }) => theme.fonts["body2-normal-medi"]};
  white-space: nowrap;
  text-align: start;
  text-overflow: ellipsis;
`;

export const TitleArrowRightIcon = styled(IconArrowRight)`
  right: 0;
  display: flex;
  width: 1.8rem;
  height: 1.8rem;

  path {
    fill: ${({ theme }) => theme.colors.gray_400};
  }
`;

export const BoxDivider = styled.div`
  display: flex;
  width: 100%;

  color: ${({ theme }) => theme.colors.gray_700};

  border-top: 0.1rem solid;
`;

export const ContextLayout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  height: 12.2rem;
`;

export const Context = styled.section`
  display: flex;
  gap: 1.2rem;
`;

export const SubTitle = styled.div`
  display: flex;
  width: 4rem;

  ${({ theme }) => theme.fonts["caption2-medi"]};
  color: ${({ theme }) => theme.colors.gray_400};
`;

export const Text = styled.div`
  display: flex;

  ${({ theme }) => theme.fonts["caption2-medi"]};
  color: ${({ theme }) => theme.colors.gray_0};
`;

export const DepositLayout = styled.section`
  display: flex;
  gap: 0.8rem;
`;

export const CheckingDeposit = styled.div`
  display: flex;

  ${({ theme }) => theme.fonts["caption2-medi"]};
  color: ${({ theme }) => theme.colors.red};
`;

export const CheckedDeposit = styled.div`
  display: flex;

  ${({ theme }) => theme.fonts["caption2-medi"]};
  color: ${({ theme }) => theme.colors.green};
`;

export const AccountLayout = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const Account = styled.div`
  width: 4rem;

  ${({ theme }) => theme.fonts["caption2-medi"]};

  color: ${({ theme }) => theme.colors.gray_400};
`;

export const ArrowRightIcon = styled(IconArrowRight)`
  width: 0.8rem;
  height: 0.8rem;

  path {
    fill: ${({ theme }) => theme.colors.gray_400};
  }
`;
