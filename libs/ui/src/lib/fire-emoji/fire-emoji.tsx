import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FireEmojiProps {}

const StyledFireEmoji = styled.div``;

export function FireEmoji(props: FireEmojiProps) {
  return (
    <StyledFireEmoji>
      <span role="img" aria-label="fire">
        🔥
      </span>
    </StyledFireEmoji>
  );
}

export default FireEmoji;
