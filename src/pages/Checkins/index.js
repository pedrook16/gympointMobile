import React, {useEffect, useState, useCallback} from 'react';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import {useSelector} from 'react-redux';

import api from '~/services/api';

import Empty from '~/components/Empty';

import {
  Container,
  FlatListCheckin,
  ButtonNewCheckin,
  Checkin,
  Index,
  Time,
} from './styles';

export default function Dashboard() {
  const [checkin, setCheckin] = useState([]);
  const studentId = useSelector(state => state.auth.id);

  const loadCheckin = useCallback(async () => {
    const response = await api.get(`students/${studentId}/checkins`);
    const data = response.data.map(check => ({
      ...check,
      formattedDate: formatRelative(parseISO(check.createdAt), new Date(), {
        locale: pt,
      }),
    }));
    setCheckin(data);
  }, [studentId]);

  useEffect(() => {
    loadCheckin();
  }, [loadCheckin]);

  async function handleNewCheckin() {
    await api.post(`students/${studentId}/checkins`);
    loadCheckin();
  }

  return (
    <Container>
      <ButtonNewCheckin onPress={handleNewCheckin}>
        Novo check-in
      </ButtonNewCheckin>
      {checkin.length <= 0 ? (
        <Empty>Sem check-ins realizados :(</Empty>
      ) : (
        <FlatListCheckin
          data={checkin}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <Checkin>
              <Index>Check-in #{index + 1}</Index>
              <Time>{item.formattedDate}</Time>
            </Checkin>
          )}
        />
      )}
    </Container>
  );
}
