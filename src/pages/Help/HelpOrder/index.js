import React, {useState, useEffect} from 'react';
import {formatRelative, parseISO} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import pt from 'date-fns/locale/pt';
import {useSelector} from 'react-redux';
import {withNavigationFocus} from 'react-navigation';

import api from '~/services/api';

import {
  Container,
  ButtonNewHelpOrder,
  HelpList,
  HelpHeader,
  HelpResp,
  HelpQuestinText,
  HelpDate,
  HelpQuestion,
  FlatListHelp,
} from './styles';

function HelpOrder({navigation, isFocused}) {
  const [help, setHelp] = useState([]);
  const studentId = useSelector(state => state.auth.id);

  useEffect(() => {
    async function loadHelp() {
      const response = await api.get(`students/${studentId}/help-orders`);
      const data = response.data.map(helpOrderStudent => ({
        ...helpOrderStudent,
        formattedDate: formatRelative(
          parseISO(helpOrderStudent.createdAt),
          new Date(),
          {
            locale: pt,
          },
        ),
      }));
      setHelp(data);
    }
    loadHelp();
  }, [studentId, isFocused]);

  function handleNewHelp() {
    navigation.navigate('NewHelpOrder');
  }

  return (
    <Container>
      <ButtonNewHelpOrder onPress={handleNewHelp}>
        Novo pedido de auxílio
      </ButtonNewHelpOrder>
      <FlatListHelp
        data={help}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <HelpList
            onPress={() => navigation.navigate('DetailHelpOrder', {item})}>
            <HelpHeader>
              <HelpResp>
                <Icon
                  name="check-circle"
                  size={20}
                  color={item.answer === null ? '#999' : '#42cb59'}
                />
                <HelpQuestinText respond={item.answer}>
                  {item.answer === null ? 'Sem resposta' : 'Respondido'}
                </HelpQuestinText>
              </HelpResp>
              <HelpDate>{item.formattedDate}</HelpDate>
            </HelpHeader>
            <HelpQuestion>{item.question}</HelpQuestion>
          </HelpList>
        )}
      />
    </Container>
  );
}

export default withNavigationFocus(HelpOrder);
