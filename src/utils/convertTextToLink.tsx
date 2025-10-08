import { ReactNode } from "react";
import styled from "styled-components";

export const convertTextToLink = (text: string) => {
  const urlRegex = /https?:\/\/[^\s]+/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let keyIndex = 0;

  // 무한 루프 방지
  let iterationCount = 0;
  const maxIterations = 1000;

  while ((match = urlRegex.exec(text)) !== null && iterationCount < maxIterations) {
    iterationCount++;

    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    let url = match[0];
    const trailingPunctuationRegex = /[.,;:!?)}\]]+$/;
    url = url.replace(trailingPunctuationRegex, "");

    parts.push(
      <LinkText key={`link-${keyIndex++}`} href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </LinkText>
    );

    lastIndex = match.index + url.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const LinkText = styled.a`
  color: #007aff;
  text-decoration: underline;

  &:visited {
    color: #5856d6;
  }
`;
