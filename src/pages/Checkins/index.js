import React, {useEffect, useState} from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import api from '~/services/api';

import {Container, ButtonNewCheckin} from './styles';

export default function Dashboard() {
  const [checkin, setCheckin] = useState([]);
  const studentId = useSelector(state => state.auth.id);

  useEffect(() => {
    async function loadCheckin() {
      const response = await api.get(`students/${studentId}/checkins`);
      const data = response.data.map(check => ({
        ...check,
        formattedDate: formatRelative(
          parseISO(check.createdAt), new Date(), { locale: pt}
        )
      }))
      console.tron.log(data)
    }
    loadCheckin();
  }, [studentId]);

  async function handleNewCheckin() {

  }

  return (
    <Container>
      <ButtonNewCheckin onPress={handleNewCheckin}>Novo check-in</ButtonNewCheckin>
    </Container>
  );
}
