// eslint-disable-next-line import/no-extraneous-dependencies
import { screen, render } from '@testing-library/react';

import { HomePageHeader } from '.';

describe('Header tests', () => {
  it('header', () => {
    render(<HomePageHeader />);

    expect(screen.getByTestId('header-id')).toBeInTheDocument();
  });
});
