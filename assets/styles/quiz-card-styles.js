import styled from 'styled-components';
import { additionalColors } from '../../utils/styles';

export const StyledNumberText = styled.Text`
  position: absolute;
  top: 0;
  right: 0;
  color: ${additionalColors.headers}
  margin-right: 10;
`

export const StyledScoreButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 50;
`

export const StyledScoreButtons = styled.TouchableOpacity`
  margin-left: 20;
  margin-right: 20;
`

