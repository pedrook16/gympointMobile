import React, {useState} from 'react';
import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function signIn() {
  const [value, setValue] = useState('');
  function handleSubmit() {}

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
        <SubmitButton>Acessar</SubmitButton>
      </Form>
    </Container>
  );
}
