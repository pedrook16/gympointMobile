import {takeLatest, put, all, call} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '~/services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {studentId} = payload;
    console.tron.log(studentId);
    const response = yield call(api.get, `sessions/${studentId}/student`);

    const {id} = response.data;

    yield put(signInSuccess(id));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seu usuário');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
