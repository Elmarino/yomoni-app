import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CharacterDetailModal from './../CharacterDetailModal';
import { Character } from '@/types/RickAndMortyTypes/Character';

describe('CharacterDetailModal', () => {
  const mockHandleDisplay = jest.fn();

  it('renders correctly when visible', () => {
    const character: Character = {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: { name: 'Earth', url: '' },
      location: { name: 'Earth', url: '' },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [],
      url: '',
      created: '2017-11-04T18:50:21.651Z',
      type: 'Human'
    };

    const { getByText } = render(
      <CharacterDetailModal
        visible={true}
        character={character}
        handleDisplay={mockHandleDisplay}
      />
    );

    expect(getByText('Morty Smith')).toBeTruthy();
    expect(getByText('Status:')).toBeTruthy();
    expect(getByText('Alive')).toBeTruthy();
  });

  it('does not render when not visible', () => {
    const { queryByText } = render(
      <CharacterDetailModal
        visible={false}
        character={null}
        handleDisplay={mockHandleDisplay}
      />
    );

    expect(queryByText('Morty Smith')).toBeNull();
  });

  it('calls handleDisplay when the close button is pressed', () => {
    const character: Character = {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: { name: 'Earth', url: '' },
      location: { name: 'Earth', url: '' },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [],
      url: '',
      created: '2017-11-04T18:50:21.651Z',
      type: 'Human'
    };

    const { getByText } = render(
      <CharacterDetailModal
        visible={true}
        character={character}
        handleDisplay={mockHandleDisplay}
      />
    );

    fireEvent.press(getByText('Close'));
    expect(mockHandleDisplay).toHaveBeenCalled();
  });
});
