import styled from 'styled-components';
import { Platform } from 'react-native';
import { additionalColors } from '../../utils/styles';

export const StyledNumberText = styled.Text`
  position: absolute;
  top: 9;
  right: 0;
  color: ${additionalColors.headers}
  margin-right: 10;
`

export const StyledScoreButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${Platform.OS === 'ios' ? 350 : 290};
`

export const StyledScoreButtons = styled.TouchableOpacity`
  margin-left: 45;
  margin-right: 45;
`

