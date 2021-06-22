export function signInRequest(giftcard_number, giftcard_password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { giftcard_number, giftcard_password },
  };
}

export function signInSuccess(token, giftCard) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, giftCard },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
