import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image, Alert} from 'react-native';

import logo from '~/assets/logo.png';

import {Container, Form, FormInput, SubmitButton} from './styles';

import {signInRequest} from '~/store/modules/auth/actions';

export default function SignIn() {
  const [value, setValue] = useState('');
  const dispach = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    if (!value) {
      return Alert.alert('Preencha o campo', 'Campo ID vazio.');
    }

    return dispach(signInRequest(value));
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          autoCorret={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={value}
          onChangeText={setValue}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Acessar
        </SubmitButton>
      </Form>
    </Container>
  );
}
