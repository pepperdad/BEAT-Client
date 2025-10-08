import { IconTicket } from "@assets/svgs";
import styled, { css } from "styled-components";

export const Layer = styled.section<{ $width: number }>`
  position: fixed;
  bottom: 12rem;
  left: ${({ $width }) => `${$width / 2 + Math.min(375 / 2, $width / 2) - 24}px`};
  z-index: 25;
`;

export const FloatingBtnWrapper = styled.button<{ $showText: boolean }>`

  position: absolute;
  right: 0;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: ${({ $showText }) => ($showText ? "12.7rem" : "5.2rem")};
  padding: 1rem;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.pink_400};
  box-shadow: 0 0 26px 0 rgb(251 36 127 / 60%);
  cursor: pointer;
  border-radius: 50px;

  transition: all 0.3s ease-in-out;
`;

export const FloatingText = styled.p<{ $showText: boolean }>`
  ${({ theme }) => theme.fonts["body1-normal-semi"]};
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;

  ${({ $showText }) =>
    $showText
      ? css`
          transform: translateX(0);
          opacity: 1;

          transition:
            transform 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
        `
      : css`
          transform: translateX(50%);
          opacity: 0;

          transition:
            transform 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
        `}
`;

export const TicketIcon = styled(IconTicket)`
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
`;
