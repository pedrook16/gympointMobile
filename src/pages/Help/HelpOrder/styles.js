import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  padding: 30px 30px;
`;

export const ButtonNewHelpOrder = styled(Button)``;

export const HelpList = styled(RectButton)`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
`;

export const HelpHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const HelpResp = styled.View`
  flex-direction: row;
`;

export const HelpQuestinText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
  color: ${props => (props.respond === null ? '#666' : '#42cb59')};
`;

export const HelpDate = styled.Text`
  color: #666;
`;

export const HelpQuestion = styled.Text`
  color: #666;
  font-size: 16px;
  line-height: 30px;
`;
