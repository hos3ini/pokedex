import React from 'react';
import { View } from 'react-native';
import { Card } from '../components/Card';

import { colors } from '../utils/pokemonTypeColors';

import Grass from '../assets/icons/grass.svg';

const CardData = {
  title: 'CardData',
  component: Card,
  args: {
    name: 'pokemon',
    details: ['detail1', 'detail2', 'detail3'],
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg',
    spriteBack: 'https://kai-tw.github.io/PokeCard/backgrounds/grass.png',
    Icon: Grass,
    types: [
      { name: 'grass', textColor: colors['grass'] },
      { name: 'poison', textColor: colors['poison'] },
    ],
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default CardData;

export const Basic = {};

// export const AnotherExample = {
//   args: {
//     text: 'Another example',
//   },
// };
