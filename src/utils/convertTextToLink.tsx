import React from "react";
import styled from "styled-components";

export const convertTextToLink = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+?)(?=[.,;:!?)}\]]*(?:\s|$))/g;
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let match;
  let keyIndex = 0;

  while ((match = urlRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    parts.push(
      <LinkText
        key={`link-${keyIndex++}`}
        href={match[0]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {match[0]}
      </LinkText>
    );

    lastIndex = match.index + match[0].length;
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
