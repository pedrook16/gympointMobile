import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  padding: 30px 30px;
`;
export const FlatListCheckin = styled.FlatList`
  margin-top: 20px;
`;
export const ButtonNewCheckin = styled(Button)``;

export const Checkin = styled.View`
  margin-bottom: 20px;
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
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-right: 20px;
`;
export const Time = styled.Text`
  color: #999;
`;
