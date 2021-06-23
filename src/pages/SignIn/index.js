import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/images/logo.png';

const schema = Yup.object().shape({
  giftcard_number: Yup.number().required('O Número do cartão é obrigatório'),
  giftcard_password: Yup.string().required('A Senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ giftcard_number, giftcard_password }) {
    dispatch(signInRequest(giftcard_number, giftcard_password));
  }

  return (
    <>
      <img src={logo} alt="Gift Card" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="giftcard_number"
          type="number"
          placeholder="Número do Cartão Presente"
        />
        <Input
          name="giftcard_password"
          type="giftcard_password"
          placeholder="Senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
