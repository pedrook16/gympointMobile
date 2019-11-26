import {takeLatest, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {id} = payload;

    yield put(signInSuccess(id));

    // history.push('/student');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seu usuário');
    yield put(signFailure());
  }
}

// export function satId({payload}) {
//   if (!payload) return;

//   const {id} = payload.auth;
// }

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
