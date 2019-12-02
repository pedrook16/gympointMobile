import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Box,
  Question,
  QuestionHeader,
  QuestionDate,
  QuestionTitle,
  AnswerHeader,
  AnswerText,
  Answer,
} from './styles';

export default function DetailHelpOrder({navigation: navigate}) {
  const detail = navigate.getParam('item');

  return (
    <Container>
      <Box>
        <QuestionHeader>
          <QuestionTitle>Pergunta</QuestionTitle>
          <QuestionDate>{detail.formattedDate}</QuestionDate>
        </QuestionHeader>
        <Question>{detail.question}</Question>

        <AnswerHeader>
          <AnswerText>Resposta</AnswerText>
        </AnswerHeader>
        <Answer>
          {detail.answer === null ? 'Aguarde a resposta' : detail.answer}
        </Answer>
      </Box>
    </Container>
  );
}

DetailHelpOrder.navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
