// RecipiesList.test.tsx

import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import RecipiesList from '../index';

global.fetch = require('jest-fetch-mock');

describe('RecipiesList', () => {
  it('should render error message when the is a server error', async () => {
    fetch.mockRejectOnce(new Error('Server error'));

    const {getByTestId} = render(<RecipiesList />);
    const errorMessage = await waitFor(() => getByTestId('server-error'));

    expect(errorMessage).toBeTruthy();
    expect(errorMessage.props.children).toBe('Sorry, try again latter');
  });
});
