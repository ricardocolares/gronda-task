// RecipeDetails.test.tsx

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import RecipeDetails from '../index';

const mockNavigation = {
  navigate: jest.fn(),
};

describe('RecipeDetails', () => {
  it('renders the number of visits the recipe has', () => {
    const {getByTestId} = render(
      <RecipeDetails
        navigation={mockNavigation}
        route={{params: {visits: 10}}}
      />,
    );

    const numberOfVisitsText = getByTestId('number-of-visits-text');
    expect(numberOfVisitsText.props.children).toBe(10);
  });

  it('should navigate to RecipiesList page when back button is pressed', () => {
    const {getByTestId} = render(
      <RecipeDetails
        navigation={mockNavigation}
        route={{params: {visits: 5}}}
      />,
    );

    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Recipies');
  });
});
