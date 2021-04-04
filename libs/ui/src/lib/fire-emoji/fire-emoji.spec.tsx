import React from 'react';
import { render } from '@testing-library/react';

import FireEmoji from './fire-emoji';

describe('FireEmoji', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FireEmoji />);
    expect(baseElement).toBeTruthy();
  });
});
