import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Content, GiftCardNumber } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">MEU GIFT CARD</Link>
        </nav>

        <aside>
          <GiftCardNumber>
            <div>
              <button type="submit" onClick={handleSignOut}>
                Sair
              </button>
            </div>
          </GiftCardNumber>
        </aside>
      </Content>
    </Container>
  );
}
