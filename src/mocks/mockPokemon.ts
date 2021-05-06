export const mockPokemon = {
  base_experience: 62,
  height: 6,
  id: 4,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
  name: 'Charmander',
  price: 20.67,
  quantity: 1,
  slug: 'charmander',
  weight: 85,
};

export const mockNewPokemon = {
  base_experience: 112,
  height: 4,
  id: 25,
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
  name: 'Pikachu',
  price: 37.33,
  quantity: 1,
  slug: 'pikachu',
  weight: 60,
};

export const mockFromApi = {
  'abilities': [
    {
      'ability': {
        'name': 'blaze',
        'url': 'https://pokeapi.co/api/v2/ability/66/',
      },
      'is_hidden': false,
      'slot': 1,
    },
    {
      'ability': {
        'name': 'solar-power',
        'url': 'https://pokeapi.co/api/v2/ability/94/',
      },
      'is_hidden': true,
      'slot': 3,
    },
  ],
  'base_experience': 62,
  'height': 6,
  'id': 4,
  'name': 'charmander',
  'weight': 85,
  'sprites': {
    'other': {
      'dream_world': {
        'front_default':
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
      },
    },
  },
  'types': [
    {
      'slot': 1,
      'type': {
        'name': 'fire',
        'url': 'https://pokeapi.co/api/v2/type/10/',
      },
    },
  ],
};
