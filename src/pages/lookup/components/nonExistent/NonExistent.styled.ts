import styled from "styled-components";
import { Empty } from "@assets/svgs";

export const NonExistentWrapper = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 37.4rem;
  height: 71.2rem;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.gray_900};
`;

export const NonExistenLayout = styled.section`
  position: absolute;
  top: 19.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  width: 32.6rem;
`;

export const EmptyImg = styled(Empty)`
  width: 15rem;
  height: 15rem;
`;

export const EmptyText = styled.div`
  color: ${({ theme }) => theme.colors.gray_300};
  ${({ theme }) => theme.fonts["body2-normal-medi"]};
  text-align: center;
`;