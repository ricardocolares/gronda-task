import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import RecipiesList from '../index';

global.fetch = require('jest-fetch-mock');

const mockNavigation = {
  navigate: jest.fn(),
};

describe('RecipiesList', () => {
  it('should render error message when the is a server error', async () => {
    fetch.mockRejectOnce(new Error('Server error'));

    const {getByTestId} = render(<RecipiesList navigation={mockNavigation} />);
    const errorMessage = await waitFor(() => getByTestId('server-error'));

    expect(errorMessage).toBeTruthy();
    expect(errorMessage.props.children).toBe('Sorry, try again latter');
  });

  it('should show "No recipies!" message when there are no recipies', async () => {
    // Simula uma resposta sem receitas do servidor
    fetch.mockResponseOnce(JSON.stringify({recipies: []}));

    const {getByTestId} = render(<RecipiesList />);
    const noRecipiesMessage = await waitFor(() => getByTestId('no-recipies'));

    expect(noRecipiesMessage).toBeTruthy();
    expect(noRecipiesMessage.props.children).toBe('No recipies!');
  });

  test('renders the list correctly', async () => {
    // Simula uma resposta com algumas receitas do servidor
    const mockRecipies = [
      {
        id: 1,
        title: 'Recipe 1',
        img_url: 'uri_image_1',
      },
      {
        id: 2,
        title: 'Recipe 2',
        img_url: 'uri_image_2',
      },
    ];
    fetch.mockResponseOnce(JSON.stringify({recipies: mockRecipies}));

    const {getByTestId, getAllByTestId} = render(<RecipiesList />);
    const recipiesList = await waitFor(() => getByTestId('recipies-list'));
    const recipeCards = getAllByTestId('recipe-card');

    expect(recipiesList).toBeTruthy();
    expect(recipeCards.length).toBe(2); // Verifica se duas receitas foram renderizadas
  });

  it('should navigate correctly to details page', async () => {
    //TODO
  });
});
