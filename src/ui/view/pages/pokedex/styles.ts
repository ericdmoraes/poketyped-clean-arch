import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  border-radius: 20px;
  flex: 1;
  padding: 20px 10px 0px 10px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  border-radius: 20px;
`;

export const TitleLabel = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 30px;
  color: black;
`;

export const SearchDescriptionLabel = styled.Text`
  font-family: 'Poppins-Light';
  font-size: 14px;
  color: black;
  margin-bottom: 20px;
`;

export const SearchInput = styled.TextInput`
  height: 45px;
  width: 100%;
  border: 0.3px;
  border-radius: 15px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
`;

export const PokemonListContainer = styled.View`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const PokemonNameLabel = styled.Text`
  margin-bottom: 4px;
`;
