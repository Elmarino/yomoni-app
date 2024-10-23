import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CharacterCard from '../CharacterCard';

describe('CharacterCard', () => {
  const mockOnPress = jest.fn();

  it('renders correctly with given props', () => {
    const { getByText } = render(
      <CharacterCard
        title="Morty Smith"
        imageBackgroud="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        status="Alive"
        onPressFunction={mockOnPress}
      />
    );

    expect(getByText('Morty Smith')).toBeTruthy();
    expect(getByText('Alive')).toBeTruthy();
  });

  it('calls onPressFunction when pressed', () => {
    const { getByText } = render(
      <CharacterCard
        title="Morty Smith"
        imageBackgroud="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        status="Alive"
        onPressFunction={mockOnPress}
      />
    );

    fireEvent.press(getByText('Morty Smith'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
