import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #eee;
  padding: 30px 30px;
`;
export const ButtonNewCheckin = styled(Button)``;
export const Checkin = styled.View`
  margin-top: 20px;
  padding: 0 20px;
  height: 46px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;
export const Index = styled.Text`
  font-weight: bold;
  color: #333;
`;
export const Time = styled.Text`
  color: #999;
`;
