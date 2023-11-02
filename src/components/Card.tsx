import React from 'react';
import styled from 'styled-components/native';

type TText = {
  color: string;
};

type TTypes = {
  textColor: string;
  name: string;
};

type TCard = {
  name: string;
  spriteUrl: string;
  spriteBack: string;
  Icon: React.FC;
  types: TTypes[];
  details: string[];
};

export const Card = ({ name, details, spriteUrl, spriteBack, Icon, types }: TCard) => {
  return (
    <CardContainer>
      <SpritesBack source={{ uri: spriteBack }}>
        <Sprite source={{ uri: spriteUrl }} />
      </SpritesBack>
      <CardData>
        <CardIcon>
          <Icon />
        </CardIcon>
        <TypesWrapper>
          {types.map((t, index) => (
            <Type color={t.textColor} key={index}>
              {t.name}
            </Type>
          ))}
        </TypesWrapper>
        <CardName>{name}</CardName>
        {details.map((d, index) => (
          <CardDetail key={index}>{d}</CardDetail>
        ))}
      </CardData>
    </CardContainer>
  );
};

const CardContainer = styled.TouchableOpacity`
  display: flex;
  margin: 24px 0;
  border-radius: 16px;
  max-width: 350px;
  height: 220px;
  background: #fff;
  box-shadow: 0 16px 40px rgba(34, 35, 58, 0.25);
  flex-direction: row;
  overflow: hidden;
  cursor: default;
  color: #333;
`;

const SpritesBack = styled.ImageBackground`
  flex: 2;
  position: relative;
  height: 100%;
  width: auto;
`;

const Sprite = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
`;

const CardData = styled.View`
  flex: 1;
  position: relative;
  padding: 24px 32px;
  text-align: right;
  height: 100%;
  background: rgb(255, 255, 255, 0.9);
`;

const CardIcon = styled.View`
  position: absolute;
  top: 16px;
  left: -32px;
  border: 6px solid #fff;
  border-radius: 200px;
  width: 58px;
  height: 58px;
  background: #eee;
`;

const TypesWrapper = styled.View`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  text-transform: capitalize;
`;

const Type = styled.Text<TText>`
  font-size: 10px;
  margin-left: 8px;
  color: ${(props) => props.color};
`;

const CardName = styled.Text`
  margin-top: 8px;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  color: #303030;
`;

const CardDetail = styled.Text`
  margin-top: 8px;
  text-align: right;
  font-size: 12px;
  color: #303030;
`;
