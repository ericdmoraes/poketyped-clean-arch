import React from 'react';

import {
  HeaderContainer,
  SearchDescriptionLabel,
  SearchInput,
  TitleLabel,
} from './styles';

const HeaderPokedex: React.FC = () => {
  return (
    <HeaderContainer>
      <TitleLabel>Pokédex</TitleLabel>
      <SearchDescriptionLabel>
        Pesquise por um Pokémon por nome ou usando o número nacional da Pokédex.
      </SearchDescriptionLabel>
      <SearchInput
        placeholder="Qual o pokemon?!"
        onChangeText={text => console.log(text)}
        onEndEditing={() => console.log('search teste')}
      />
    </HeaderContainer>
  );
};

export default HeaderPokedex;
