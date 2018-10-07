import styled from 'styled-components';
import { Constants } from 'expo';

export const StatusView = styled.View`
  backgroundColor: #71C9C8;
  height: ${ props => props.statusBar.statusBarHeight }
`

StatusView.defaultProps = {
  statusBar: {
    statusBarHeight: Constants.statusBarHeight
  }
}
