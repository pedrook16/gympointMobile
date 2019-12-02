import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  padding: 30px 30px;
`;
export const InputText = styled.TextInput.attrs({
  placeholder: 'Inclua seu pedido de auxílio',
})`
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  height: 300px;
`;
export const SubmitButton = styled(Button)``;
