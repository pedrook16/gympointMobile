import styled from 'styled-components/native';
import logo from '~/assets/logo-inline.png';

export const Container = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image.attrs({
  source: logo,
})``;
