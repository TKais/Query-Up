import styled from 'styled-components';
import { Constants } from 'expo';

export const StyledView = styled.View`
  backgroundColor: #AAE0DC;
  flex: 1;
`

export const StatusView = styled.View`
  backgroundColor: #71C9C8;
  justify-content: flex-end;
  align-items: center;
  height: ${ props => props.statusBar.statusBarHeight }
`

export const StatusText = styled.Text`
  color: #FFFFFF;
`

StatusView.defaultProps = {
  statusBar: {
    statusBarHeight: Constants.statusBarHeight + 20
  }
}