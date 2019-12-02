import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {Container, InputText, SubmitButton} from './styles';

export default function NewHelpOrder({navigation: navigate}) {
  const [question, setQuestion] = useState('');
  const studentId = useSelector(state => state.auth.id);

  async function handleSubmit() {
    await api.post(`students/${studentId}/help-orders`, {
      question,
    });
    setQuestion('');
    navigate.goBack();
  }

  return (
    <Container>
      <InputText
        numberOfLines={30}
        multiline
        value={question}
        onChangeText={text => setQuestion(text)}
      />

      <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
    </Container>
  );
}

NewHelpOrder.navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
